<template>
  <div class="text my-2" :class="{active: active}">{{ text }}</div>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    active: Boolean
  }
}
</script>

<style scoped>
.text {
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(135, 136, 141);
}

.active {
    color: rgba(39, 50, 131);
}
</style>