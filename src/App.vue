<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <div class="background"></div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(86, 161, 208, 0.08);
  z-index: -1000;
}
</style>
