<template>
  <div class="view">
    <NavBarComponent class="navbar" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue'

export default {
  components: {
    NavBarComponent
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.content {
  margin-top: 56px;
  height: calc(100vh - 56px);
  overflow-y: auto;
}

.view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
