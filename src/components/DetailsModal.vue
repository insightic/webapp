<template>
  <div
    class="modal fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <div class="p-4">
            <div style="text-align: center">
              <div class="my-2">
                <i
                  class="bi bi-exclamation-triangle"
                  style="font-size: 3rem; color: rgba(255, 30, 30, 1)"
                ></i>
              </div>

              <h5 class="modal-title mb-2" style="font-size: 1rem">{{ title }}</h5>
              <p
                style="font-size: 0.8rem; max-width: 300px; color: rgb(135, 136, 141)"
                class="mx-auto"
              >
                {{ description }}
              </p>
            </div>

            <div class="mx-auto mt-4" style="max-width: 400px">
              <div class="form-check my-2">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">
                  <span style="font-size: 0.9rem">Email to VASP applicant</span> <br />
                  <span style="font-size: 0.8rem; color: rgb(135, 136, 141)"
                    >Send an email to the applicants</span
                  >
                </label>
              </div>
              <div class="form-check my-2">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">
                  <span style="font-size: 0.9rem">Add to watchlist</span> <br />
                  <span style="font-size: 0.8rem; color: rgb(135, 136, 141)"
                    >Get notified when there is updates</span
                  >
                </label>
              </div>
              <div class="form-check my-2">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">
                  <span style="font-size: 0.9rem">Feedback to internal regulator consultants</span>
                  <br />
                  <span style="font-size: 0.8rem; color: rgb(135, 136, 141)"
                    >Allow the internal regulator consultants to review</span
                  >
                </label>
              </div>
            </div>

            <div style="text-align: center" class="mt-5">
              <button type="button" class="btn btn-primary" @click="$emit('close')">Confirm</button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="$emit('close')"
                style="margin-left: 10px"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'description', 'actions', 'tasks', 'visible']
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
