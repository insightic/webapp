<template>
  <div class="mb-3">
    <label class="form-label bold">{{ props.label }}</label>

    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <textarea
            class="form-control px-1"
            style="border: 0px; resize: none; overflow: hidden"
            @input="onInput"
            rows="1"
            placeholder="Please describe in text or attach files by uploading or url..."
            ref="textarea"
          />
        </li>
        <li class="list-group-item" v-for="(file, idx) in files" :key="idx">
          <div class="d-flex flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ file.name }}
            </div>
            <div class="ms-auto">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary mx-2"
                @click="download(idx)"
              >
                <i class="bi bi-cloud-download"></i>
              </button>
              <button type="button" class="btn btn-sm btn-outline-danger mx-2" @click="remove(idx)">
                Remove
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <button class="btn btn-sm btn-outline-primary me-2">
            <label class="d-flex align-items-center">
              <input type="file" style="display: none" @change="upload" ref="fileInput" />
              <i class="bi bi-cloud-upload me-1"></i> Upload File
            </label>
          </button>
          <button class="btn btn-sm btn-outline-primary">
            <div class="d-flex align-items-center">
              <i class="bi bi-link me-1"></i>
              <div>Add Link</div>
            </div>
          </button>
        </li>
      </ul>
    </div>

    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { getPreSignedGetUrl, getPreSignedPutUrl, uploadFile, type filesInfo } from '@/api'

const textarea: Ref<HTMLElement | null> = ref(null)
const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<filesInfo[]>([])

const props = defineProps({
  label: { type: String, required: true },
  footnote: { type: String }
})

const onInput = function () {
  if (!textarea.value) return
  textarea.value.style.height = '18px'
  textarea.value.style.height = textarea.value.scrollHeight + 'px'
}

const remove = function (idx: number) {
  files.value.splice(idx, 1)
}

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const preSignedPut = await getPreSignedPutUrl()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return
  const fileInfo = {
    name: file.name,
    objectID: preSignedPut.ObjectID
  }
  files.value?.push(fileInfo)
  await uploadFile(preSignedPut.URL, file)
}

const download = async function (idx: number) {
  const objectID = files.value[idx].objectID
  const filename = files.value[idx].name
  const preSignedGet = await getPreSignedGetUrl(objectID, filename)
  if (!preSignedGet?.URL) return
  window.location.href = preSignedGet?.URL
}
</script>
