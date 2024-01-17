<template>
  <div class="m-1 tag">{{ tag }}</div>
</template>

<script lang="ts">
export default {
  props: {
    tag: String
  }
}
</script>

<style scoped>
.tag {
  color: white;
  background-color: rgba(39, 50, 131);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  width: fit-content;
  font-size: 0.7rem;
}
</style>
