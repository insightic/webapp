<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label><span v-show="required" class="ms-1 text-danger">*</span>
    <select class="form-control" :placeholder="placeholder" @change="onChange">
      <option value="" selected disabled>Please select a project type</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    options: { type: Array<string>, required: true },
    field: { type: String },
    placeholder: { type: String },
    footnote: { type: String },
    required: { type: Boolean, default: false },
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  },
}
</script>
