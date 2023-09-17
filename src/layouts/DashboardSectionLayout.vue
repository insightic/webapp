<template>
  <div class="my-4 p-4 rounded w-100 border border-2 wrapper" :style="bgColor ? {backgroundColor: bgColor} : {}">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    bgColor : {
      type: String,
      default: null
    },
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #F3F3F4;
  border-color: #D1D1D3;
}

</style>
