<template>
  <div id="result-component-template" style="display: inline;">
    <div
      class="rounded p-3 bg-opacity-25 h-100 w-100"
      :class="{
        'bg-danger': variant == 'danger',
        'bg-warn': variant == 'warn',
        'bg-success': variant == 'success'
      }"
    >
      <div class="d-flex align-items-top">
        <i v-if="variant == 'danger'" class="bi bi-x-circle-fill me-2 text-danger"></i>
        <i v-if="variant == 'success'" class="bi bi-check-circle-fill me-2 text-success"></i>

        <div class="text-break">
          <div style="font-size: 1.05rem">
            <b>{{ title }}</b>
          </div>
          <div class="small mb-2">{{ description }}</div>
          <div class="small">
            <b><u>Whitepaper</u></b>
          </div>
          <div class="small">{{ whitepaper }}</div>
          <div class="small">
            <b><u>Code</u></b>
          </div>
          <div class="small">{{ code }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    variant: { type: String, default: 'success' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    whitepaper: { type: String, default: '' },
    code: { type: String, default: '' }
  },
}
</script>

<style scoped></style>
