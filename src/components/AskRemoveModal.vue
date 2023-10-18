<template>
  <div
    class="modal modal-lg fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tips</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure to delete this person? Once deleted, it cannot be recovered.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="$emit('close')"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('sure')">
            Yes, I am sure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    visible: { type: Boolean, required: true }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
