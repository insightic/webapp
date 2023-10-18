<template>
  <div class="mb-4">
    <label class="form-label">
      {{ props.label }}
    </label>

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
            <div class="ms-auto">
              <button type="button" class="btn btn-sm btn-outline-primary mx-2" @click="download">
                <i class="bi bi-cloud-download"></i>
              </button>
              <button type="button" class="btn btn-sm btn-outline-danger mx-2">Remove</button>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <label class="btn btn-primary">
            <input type="file" style="display: none" @change="upload" ref="fileInput" />
            <i class="bi bi-cloud-upload me-1"></i> Upload File
          </label>
        </li>
      </ul>
    </div>

    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getPreSignedGetUrl, getPreSignedPutUrl, uploadFile } from '@/api'

const fileInput = ref<HTMLInputElement | null>(null)
const filename = ref('')
const objectID = ref('')
const url = ref('')

const props = defineProps({
  label: { type: String, required: true },
  footnote: { type: String }
})

const upload = async function () {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  const preSignedPut = await getPreSignedPutUrl()
  if (!preSignedPut?.ObjectID || !preSignedPut?.URL) return
  filename.value = file.name
  objectID.value = preSignedPut.ObjectID
  url.value = preSignedPut.URL
  await uploadFile(preSignedPut.URL, file)
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
