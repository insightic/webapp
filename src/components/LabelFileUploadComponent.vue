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
        <li class="list-group-item" v-if="filename && objectID && url">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ filename }}
            </div>
            <div class="ms-auto d-flex align-items-center">
              <div class="progress me-2" style="width: 128px" v-if="uploading">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  :style="{ width: `${uploadingProgress}%` }"
                ></div>
              </div>

              <button type="button" class="btn btn-sm btn-outline-danger mx-2" v-if="uploading">
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
              <button type="button" class="btn btn-sm btn-outline-danger mx-2" v-if="!uploading">
                Remove
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item d-flex" v-if="!filename || !objectID || !url">
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
import { ref } from 'vue'
import { getPreSignedGetUrl, getPreSignedPutUrl, uploadFile } from '@/api'

defineProps({
  accept: { type: String, default: '*' },

  label: { type: String, required: true },
  description: { type: String },
  footnote: { type: String },

  required: { type: Boolean, default: false }
})

const fileInput = ref<HTMLInputElement | null>(null)
const filename = ref('')
const objectID = ref('')
const url = ref('')

const uploading = ref(false)
const uploadingProgress = ref(0.0)

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const preSignedPut = await getPreSignedPutUrl()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return
  uploading.value = true
  filename.value = file.name
  objectID.value = preSignedPut.ObjectID
  url.value = preSignedPut.URL
  await uploadFile(
    preSignedPut.URL,
    file,
    (evt) => (uploadingProgress.value = (evt.progress || 0) * 100)
  )
  uploading.value = false
}

const download = async function () {
  const preSignedGet = await getPreSignedGetUrl(objectID.value, filename.value)
  if (!preSignedGet?.URL) return
  window.location.href = preSignedGet?.URL
}
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
