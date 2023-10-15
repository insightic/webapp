<template>
  <div class="background-color"></div>
  <div class="background-image" :style="{ backgroundImage: `url('${props.src}')` }"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

console.log(props.src)
</script>

<style scoped>
.background-color {
  z-index: -2000;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.background-image {
  z-index: -1000;
  background-position: center;
  background-size: cover;
  opacity: 0.01;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
