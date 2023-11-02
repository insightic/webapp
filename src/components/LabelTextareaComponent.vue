<template>
  <div class="mb-3">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>

    <div class="text-secondary small mb-1" v-html="description"></div>
    <textarea
      class="form-control"
      :value="field"
      :placeholder="placeholder"
      :rows="rows"
      @input="onChange"
      :disabled="disabled"
    />
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    rows: { type: Number, default: 3 },

    placeholder: { type: String },
    description: { type: String },
    footnote: { type: String },

    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },

    field: { type: String }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
