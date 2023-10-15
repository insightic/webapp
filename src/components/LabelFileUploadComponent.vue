<template>
  <div class="mb-4">
    <label class="form-label">
      {{ props.label }}
    </label>

    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-file-earmark" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              {{ props.filename }}
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-sm btn-outline-primary mx-2">
                <i class="bi bi-cloud-download"></i>
              </button>
              <button type="button" class="btn btn-sm btn-outline-danger mx-2">Remove</button>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <button class="btn btn-sm btn-primary me-2">Upload File</button>
          <button class="btn btn-sm btn-outline-primary me-2">Upload by Link</button>
        </li>
      </ul>
    </div>

    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  filename: { type: String, default: 'Default File.pdf' },
  footnote: { type: String }
})
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
