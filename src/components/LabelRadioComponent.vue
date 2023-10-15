<template>
  <div class="mb-2">
    <label class="form-label">
      {{ label }}
    </label>
    <span v-show="required" class="ms-1 text-danger">*</span> <br />
    <label class="text-secondary small mb-3" v-html="hint"></label>
    <div class="form-check" v-for="option in options" :key="option">
      <input class="form-check-input" type="radio" :name="options.toString()" id="option" />
      <label class="form-check-label" for="flexRadioDefault2">
        {{ option }}
      </label>
    </div>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    options: { type: Array<string>, required: true },
    field: { type: String },
    placeholder: { type: String, default: 'Please select project type' },
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
