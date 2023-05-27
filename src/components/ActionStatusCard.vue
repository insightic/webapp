<template>
  <div class="action-status-card p-3 my-2">
    <div class="d-flex">
      <div style="margin-right: 15px; font-size: 1.5rem">
        <i class="bi bi-info-circle"></i>
      </div>
      <div class="align-self-center">
        <div style="font-size: 0.9rem">
          <b>{{ title }}</b>
        </div>
        <div style="font-size: 0.8rem; margin-top: 6px">
          {{ text }}
        </div>
        <div style="font-size: 0.8rem; margin-top: 10px; cursor: pointer"><u>Details</u></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'text']
}
</script>

<style>
.action-status-card {
  padding: 10px;
  background-color: lightpink;
  border-radius: 10px;
}
</style>
