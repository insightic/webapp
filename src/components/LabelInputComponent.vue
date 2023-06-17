<template>
  <div class="my-3">
    <label class="form-label">{{ label }}</label>
    <input :type="type" class="form-control" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String }
  }
}
</script>
