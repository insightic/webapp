<template>
  <div
    class="my-4 p-4 rounded w-100 border border-2 wrapper"
    :style="bgColor ? { backgroundColor: bgColor } : {}"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    bgColor: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #f3f3f4;
  border-color: #d1d1d3;
}
</style>
