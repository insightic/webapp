<template>
  <div class="mb-3">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>

    <div class="text-secondary small mb-1" v-html="description"></div>
    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li :class="['list-group-item', { disabled: disabled }]">
          <textarea
            class="form-control px-1"
            style="border: none; resize: none; overflow: hidden; box-shadow: none;"
            @input="onInput"
            rows="1"
            placeholder="Please describe in text or attach files by uploading or url..."
            ref="textarea"
            v-model="text"
            :disabled="disabled"
            :style="{ backgroundColor: disabled ? '#e9ecef' : 'white' }"
          />
        </li>
        <li
          :class="['list-group-item', { disabled: disabled }]"
          v-for="(file, idx) in files"
          :key="idx"
        >
          <div class="d-flex flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ file.Filename }}
            </div>
            <div class="ms-auto">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary mx-2"
                @click="download(idx)"
                v-if="!uploading"
              >
                <i class="bi bi-cloud-download"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger mx-2"
                @click="remove(idx)"
                v-if="!uploading"
                :disabled="disabled"
              >
                Remove
              </button>
            </div>
          </div>
        </li>

        <li :class="['list-group-item', { disabled: disabled }]" v-if="uploadingFileObject">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ uploadingFileObject.Filename }}
            </div>
            <div class="ms-auto d-flex align-items-center">
              <div class="progress me-2" style="width: 128px">
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
                :disabled="disabled"
              >
                Cancel
              </button>
            </div>
          </div>
        </li>

        <li
          :class="['list-group-item', { disabled: disabled }]"
          v-if="!uploading && !uploadingFileObject"
        >
          <button class="btn btn-sm btn-outline-primary me-2" :disabled="disabled">
            <label class="d-flex align-items-center">
              <input type="file" style="display: none" @change="upload" ref="fileInput" />
              <i class="bi bi-cloud-upload me-1"></i> Upload File
            </label>
          </button>
        </li>
      </ul>
    </div>

    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { getPreSignedGetUrl, getPreSignedPutUrl, uploadFile, type FileObject } from '@/api'

const textarea: Ref<HTMLElement | null> = ref(null)
const fileInput = ref<HTMLInputElement | null>(null)
const text = ref('')
const files = ref<FileObject[]>([])
const uploading = ref(false)
const uploadingProgress = ref(0.0)
const uploadingFileObject = ref<FileObject | null>(null)
const cancelAbort = ref(new AbortController())

defineProps({
  label: { type: String, required: true },
  description: { type: String },
  footnote: { type: String },

  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['update:field'])

const onInput = function () {
  if (!textarea.value) return
  textarea.value.style.height = '18px'
  textarea.value.style.height = textarea.value.scrollHeight + 'px'
  emit('update:field', { Text: text.value, Files: files.value })
}

const remove = function (idx: number) {
  files.value.splice(idx, 1)
}

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const preSignedPut = await getPreSignedPutUrl()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return

  uploading.value = true
  uploadingProgress.value = 0
  uploadingFileObject.value = {
    Filename: file.name,
    ObjectID: preSignedPut.ObjectID,
    URL: preSignedPut.URL
  }
  cancelAbort.value = new AbortController()

  try {
    await uploadFile(
      preSignedPut.URL,
      file,
      cancelAbort.value,
      (evt) => (uploadingProgress.value = (evt.progress || 0) * 100)
    )
  } finally {
    files.value?.push(uploadingFileObject.value)
    emit('update:field', { Text: text.value, Files: files.value })
    uploading.value = false
    uploadingProgress.value = 0
    uploadingFileObject.value = null
  }
}

const download = async function (idx: number) {
  const objectID = files.value[idx].ObjectID
  const filename = files.value[idx].Filename
  const preSignedGet = await getPreSignedGetUrl(objectID, filename)
  if (!preSignedGet?.URL) return
  window.location.href = preSignedGet?.URL
}
</script>

<style scoped>
.list-group-item.disabled {
  background-color: #e9ecef;
}
</style>
