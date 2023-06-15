<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />

  <div class="container">
    <div class="mx-auto my-5 teams py-3 px-5">
        <h1 class="my-3">Teams</h1>
    </div>
  </div>
</template>

<style scoped>
.teams {
  width: 100%;
  max-width: 720px;
  background-color: rgba(86, 161, 208, 0.15);
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
