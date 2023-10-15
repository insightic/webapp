<template>
  <div class="mb-3">
    <label class="form-label">
      {{ label }}
    </label>
    <span v-show="required" class="ms-1 text-danger">*</span>
    <select class="form-select" @change="onChange">
      <option value="" selected disabled>{{ placeholder }}</option>
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
    placeholder: { type: String, default: 'Options...' },
    hint: { type: String },
    footnote: { type: String },
    required: { type: Boolean, default: false }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
