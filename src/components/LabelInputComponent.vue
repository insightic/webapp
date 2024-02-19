<template>
  <div class="mb-3">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>

    <div class="text-secondary small mb-1" v-html="description"></div>
    <div class="input-group">
      <span class="input-group-text" v-if="prefix">{{ prefix }}</span>
      <input
        :type="type"
        class="form-control"
        :value="field"
        :placeholder="placeholder"
        @input="onChange"
        :disabled="disabled"
        :style="{ backgroundColor: disabled ? '#1d273b' : '' }"
      />
    </div>

    <div class="text-secondary small" v-if="footnote" v-html="footnote"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: { type: String, default: 'text' },

    label: { type: String, required: true },
    description: { type: String },
    prefix: { type: String },
    placeholder: { type: String },
    footnote: { type: String },

    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },

    field: { type: [String, Number] }
  },
  emits: ['update:field'],
  methods: {
    isFilled() {
      if (this.field == null || this.field == undefined || this.field == '') return false
      return true
    },
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
