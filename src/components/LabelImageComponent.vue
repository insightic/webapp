<template>
  <div class="mb-4">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>
    <div class="text-secondary small mb-2" v-html="description"></div>

    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li :class="['list-group-item', { disabled: disabled }]">
          <img style="width: 100px; height: 100px" class="me-2" :src="src" v-if="src" />
          <label class="btn btn-primary">
            <input type="file" style="display: none" @change="upload" ref="fileInput" :accept="accept" />
            <i class="bi bi-cloud-upload me-1"></i> Select Image
          </label>
        </li>
      </ul>
    </div>

    <div class="text-secondary small" v-if="footnote" v-html="footnote"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { getPreSignedPutPublic, uploadFile, type FileObject } from '@/api'

defineProps({
  accept: { type: String, default: 'image/*' },

  label: { type: String, required: true },
  description: { type: String },
  footnote: { type: String },

  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },

  field: { type: Object as PropType<FileObject | null>, default: null }
})

const emit = defineEmits(['update:field'])

const fileInput = ref<HTMLInputElement | null>(null)
const uploadingFileObject = ref<FileObject | null>(null)
const src = ref("")

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  console.log(file)
  if (!file) return

  const preSignedPut = await getPreSignedPutPublic()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return
  console.log(preSignedPut.URL)

  uploadingFileObject.value = {
    Filename: file.name,
    ObjectID: preSignedPut.ObjectID,
    URL: preSignedPut.URL
  }

  try {
    await uploadFile(
      preSignedPut.URL,
      file,
    )
    emit('update:field', uploadingFileObject.value)
  } finally {
    uploadingFileObject.value = null
    src.value = preSignedPut.GetURL
  }
}
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}

.list-group-item.disabled {
  background-color: #e9ecef;
}
</style>
