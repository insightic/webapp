<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label
    ><span v-show="required" class="ms-1 text-danger">*</span>
    <div class="d-flex align-items-center">
      <input
        :type="type"
        class="form-control"
        :value="field"
        :placeholder="placeholder"
        @change="onChange"
        :disabled="disabled"
      />
      <button class="btn btn-sm btn-outline-secondary" @click="show = !show" type="button">
        {{ show ? 'Delete Comment' : 'Add Comment' }}
      </button>
    </div>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
    <div>
      <label v-show="show" class="form-label">Comment for {{ label }}</label>
      <textarea
        v-show="show"
        class="form-control"
        :value="fieldComment"
        :placeholder="'Leave your comments here'"
        :rows="1"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: String },
    fieldComment: { type: String },
    placeholder: { type: String },
    footnote: { type: String },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      show: false
    }
  },
  emits: ['update:field'],
  methods: {
    onChange(e: any) {
      this.$emit('update:field', e.target.value)
    }
  }
}
</script>

<style scoped>
.btn {
  font-size: 0.7rem;
}
</style>
