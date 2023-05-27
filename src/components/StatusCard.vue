<template>
  <div class="w-100 card my-2">
    <div class="text d-flex flex-column py-3 px-2">
      <div>{{ text }}</div>
      <div style="color: rgb(135, 136, 141); font-size: 0.6rem">{{ footer }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    footer: String
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  height: unset;
  border: 2px solid rgba(39, 50, 131);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);
}

.text {
  color: rgba(39, 50, 131);
  text-align: center;
  font-size: 0.7rem;
}
</style>
