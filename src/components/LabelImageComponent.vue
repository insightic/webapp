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
          <img style="width: 100px" class="me-2" :src="src" v-if="src" />
          <button class="btn btn-primary me-2" :disabled="disabled">
            <label class="d-flex align-items-center">
              <input
                type="file"
                style="display: none"
                @change="upload"
                ref="fileInput"
                :accept="accept"
              />
              <i class="bi bi-cloud-upload me-1"></i> Select Image
            </label>
          </button>
        </li>
      </ul>
    </div>

    <div class="text-secondary small" v-if="footnote" v-html="footnote"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { getPreSignedPutPublic, uploadFile, type FileObject } from '@/api'

const props = defineProps({
  accept: { type: String, default: 'image/*' },

  label: { type: String, required: true },
  description: { type: String },
  footnote: { type: String },

  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },

  field: { type: String, default: '' }
})

const emit = defineEmits(['update:field'])

const fileInput = ref<HTMLInputElement | null>(null)
const uploadingFileObject = ref<FileObject | null>(null)
const src = ref(props.field)

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const ext = file.name.split('.')?.pop()
  const preSignedPut = await getPreSignedPutPublic(ext)
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return

  uploadingFileObject.value = {
    Filename: file.name,
    ObjectID: preSignedPut.ObjectID,
    URL: preSignedPut.GetURL
  }

  try {
    await uploadFile(preSignedPut.URL, file)
    emit('update:field', uploadingFileObject.value.URL)
  } finally {
    src.value = uploadingFileObject.value.URL
    uploadingFileObject.value = null
  }
}

watch(
  () => props.field,
  () => {
    src.value = props.field
  }
)
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
