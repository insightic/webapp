<template>
  <div class="mb-3">
    <label for="basic-url" class="form-label">Your {{ label }} URL</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">{{ link }}</span>
      <input :type="type" class="form-control" :value="field" @change="onChange" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: String },
    link: { type: String, required: true }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
