<template>
  <div class="mb-4">
    <h4 class="mb-2">{{ title }}</h4>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: { type: String, required: true }
  }
}
</script>
