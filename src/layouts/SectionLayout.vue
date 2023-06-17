<template>
  <div>
    <h5>{{ title }}</h5>
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
