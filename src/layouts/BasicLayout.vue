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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.content {
  margin-top: 63px;
}

@media (min-width: 768px) {
  .view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .content {
    height: calc(100vh - 63px);
    overflow-y: auto;
  }
}
</style>
