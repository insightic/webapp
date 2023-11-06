<template>
  <div class="mb-3">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>

    <div class="text-secondary small mb-1" v-html="description"></div>
    <select class="form-select" @change="onChange" :value="field" :disabled="disabled">
      <option value="" selected disabled>{{ placeholder }}</option>
      <option
        v-for="(option, index) in options"
        :key="option"
        :value="option"
        :disabled="index > pageFinishedNum"
      >
        {{ option }}
      </option>
    </select>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    description: { type: String },
    options: { type: Array<string | number>, required: true },
    placeholder: { type: String, default: 'Options...' },
    footnote: { type: String },
    pageFinishedNum: { type: Number, default: Number.MAX_VALUE },

    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },

    field: { type: [String, Number] }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>
