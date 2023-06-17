<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label>
    <input :type="type" class="form-control" :placeholder="placeholder" />
    <label class="text-secondary" style="font-size: 0.8rem;" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String },
    footnote: { type: String }
  }
}
</script>
