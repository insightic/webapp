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
              <i class="text-primary bi bi-person" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              <table style="width: 80%; text-align: left">
                <tr class="text-secondary small">
                  <td>Name</td>
                  <td>Date of Birth</td>
                  <td>Social Medias</td>
                  <td>Share Percentage</td>
                  <td>CV</td>
                </tr>
                <tr>
                  <td>Gong Yiwei</td>
                  <td>1994/02/28</td>
                  <td class="d-flex">
                    <i class="bi bi-twitter me-2"></i>
                    <i class="bi bi-linkedin me-2"></i>
                    <i class="bi bi-github me-2"></i>
                  </td>
                  <td>80%</td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary px-2">
                      <i class="bi bi-cloud-download"></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-sm btn-outline-danger mx-2">Remove</button>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <button class="btn btn-sm btn-primary">{{ addButtonName }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  addButtonName: { type: String, default: 'Add' }
})
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
