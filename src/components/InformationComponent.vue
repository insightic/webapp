<template>
  <div id="result-component-template" style="display: inline">
    <div
      class="rounded p-3 bg-opacity-25 h-100 w-100"
      :class="{
        'bg-danger': variant == 'Fail',
        'bg-warning': variant == 'not sure',
        'bg-success': variant == 'Pass'
      }"
    >
      <div class="d-flex align-items-top">
        <i v-if="variant == 'Fail'" class="bi bi-x-circle-fill me-2 text-danger"></i>
        <i v-if="variant == 'not sure'" class="bi bi-exclamation-circle-fill me-2 text-warning"></i>
        <i v-if="variant == 'Pass'" class="bi bi-check-circle-fill me-2 text-success"></i>

        <div class="text-break">
          <div style="font-size: 1.05rem">
            <b>{{ title }}</b>
          </div>
          <div class="small">
            <b><u>Your Information</u></b>
          </div>
          <div
            class="small"
            style="
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* number of lines to show */
              line-clamp: 2;
              -webkit-box-orient: vertical;
            "
          >
            {{ information }}
          </div>
          <div class="small">
            <b><u>Received Data</u></b>
          </div>
          <div
            class="small"
            style="
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* number of lines to show */
              line-clamp: 2;
              -webkit-box-orient: vertical;
            "
          >
            {{ dataReceived }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: { type: String, default: '' },
    dataReceived: { type: String, default: '' },
    information: { type: String, default: '' },
    variant: { type: String, default: 'Pass' }
  }
}
</script>

<style scoped></style>
