<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label
    ><span v-show="required" class="ms-1 text-danger">*</span>
    <label class="text-secondary small" v-html="hint"></label>
    <input
      :type="type"
      class="form-control"
      :value="field"
      :placeholder="placeholder"
      @change="onChange"
      :disabled="disabled"
    />
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: String },
    placeholder: { type: String },
    hint: { type: String },
    footnote: { type: String },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
