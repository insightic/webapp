<template>
  <div class="mb-3" style="width: 100%; height: 100%">
    <iframe :src="src" style="width: 100%; height: 100%"> </iframe>
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
