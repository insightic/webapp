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
        <li class="list-group-item" v-if="fileObject">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ fileObject.Filename }}
            </div>
            <div class="ms-auto d-flex align-items-center">
              <div class="progress me-2" style="width: 128px" v-if="uploading">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  :style="{ width: `${uploadingProgress}%` }"
                ></div>
              </div>

              <button
                type="button"
                class="btn btn-sm btn-outline-danger mx-2"
                v-if="uploading"
                @click="cancelAbort.abort()"
              >
                Cancel
              </button>

              <button
                type="button"
                class="btn btn-sm btn-outline-primary mx-2"
                @click="download"
                v-if="!uploading"
              >
                <i class="bi bi-cloud-download"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger mx-2"
                v-if="!uploading"
                @click="remove"
              >
                Remove
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item d-flex" v-if="!fileObject">
          <label class="btn btn-primary">
            <input
              type="file"
              style="display: none"
              @change="upload"
              ref="fileInput"
              :accept="accept"
            />
            <i class="bi bi-cloud-upload me-1"></i> Upload File
          </label>
        </li>
      </ul>
    </div>

    <div class="text-secondary small" v-if="footnote" v-html="footnote"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { getPreSignedGetUrl, getPreSignedPutUrl, uploadFile, type FileObject } from '@/api'

const props = defineProps({
  accept: { type: String, default: '*' },

  label: { type: String, required: true },
  description: { type: String },
  footnote: { type: String },

  required: { type: Boolean, default: false },

  field: { type: Object as PropType<FileObject>, default: null }
})

const emit = defineEmits(['update:field'])

const fileInput = ref<HTMLInputElement | null>(null)
const fileObject = ref<FileObject | null>(JSON.parse(JSON.stringify(props.field)))

const uploading = ref(false)
const uploadingProgress = ref(0.0)
const cancelAbort = ref(new AbortController())

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const preSignedPut = await getPreSignedPutUrl()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return
  uploading.value = true
  uploadingProgress.value = 0
  cancelAbort.value = new AbortController()

  fileObject.value = {
    Filename: file.name,
    ObjectID: preSignedPut.ObjectID,
    URL: preSignedPut.URL
  }

  try {
    await uploadFile(
      preSignedPut.URL,
      file,
      cancelAbort.value,
      (evt) => (uploadingProgress.value = (evt.progress || 0) * 100)
    )
    emit('update:field', fileObject.value)
  } catch (err: any) {
    fileObject.value = null
  } finally {
    uploading.value = false
    uploadingProgress.value = 0
  }
}

const download = async function () {
  const objectId = fileObject.value?.ObjectID
  const filename = fileObject.value?.Filename
  if (!objectId || !filename) return
  const preSignedGet = await getPreSignedGetUrl(objectId, filename)
  if (!preSignedGet?.URL) return
  window.open(preSignedGet?.URL)
}

const remove = function () {
  fileObject.value = null
  emit('update:field', fileObject.value)
}
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
