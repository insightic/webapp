<template>
    <div class="my-3">
      <label class="form-label">{{ label }}</label>
      <textarea class="form-control" :placeholder="placeholder" :rows="rows"/>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      label: { type: String, required: true },
      rows: { type: Number, default: 3 },
      placeholder: { type: String }
    }
  }
  </script>
  