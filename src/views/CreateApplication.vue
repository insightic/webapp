<template>
  <BasicLayout>
    <div class="container p-3">
      <h1>Create New Application</h1>

      <div class="d-flex align-items-center align-items-start mb-3">
        <div
          class="me-2 nav-item"
          @click="current = 1"
          :class="current == 1 ? '' : 'text-secondary'"
        >
          <i v-if="current == 1" class="bi bi-1-square-fill"></i>
          <i v-else class="bi bi-1-square"></i>
          <span class="ms-2">Overview</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 2"
          :class="current == 2 ? '' : 'text-secondary'"
        >
          <i v-if="current == 2" class="bi bi-2-square-fill"></i>
          <i v-else class="bi bi-2-square"></i>
          <span class="ms-2">Team</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 3"
          :class="current == 3 ? '' : 'text-secondary'"
        >
          <i v-if="current == 3" class="bi bi-3-square-fill"></i>
          <i v-else class="bi bi-3-square"></i>
          <span class="ms-2">Objective</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 4"
          :class="current == 4 ? '' : 'text-secondary'"
        >
          <i v-if="current == 4" class="bi bi-4-square-fill"></i>
          <i v-else class="bi bi-4-square"></i>
          <span class="ms-2">Purpose</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="ms-2 nav-item"
          @click="current = 5"
          :class="current == 5 ? '' : 'text-secondary'"
        >
          <i v-if="current == 5" class="bi bi-5-square-fill"></i>
          <i v-else class="bi bi-5-square"></i>
          <span class="ms-2">Assets</span>
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<script lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

export default {
  components: {
    BasicLayout
  },
  data() {
    return {
      current: 1
    }
  }
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>
