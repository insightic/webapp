<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-2">Side Bar</div>
    <div class="flex-grow-1 p-2">Main</div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  border-right: 1px solid #e0e0e0;
  transition: width 0.5s;
  background-color: #e9f2f8;
}
</style>
