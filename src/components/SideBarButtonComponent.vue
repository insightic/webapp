<template>
  <div class="sidebar-button d-flex my-2" :class="{'sidebar-button-selected': selected}">
    <i class="bi" :class="icon" style="margin-right: 18px"></i>

    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selected: Boolean,
    icon: String,
    name: String
  }
}
</script>

<style scoped>
.sidebar-button {
  cursor: pointer;
}

.sidebar-button:hover {
  color: #0051ffc7;
}

.sidebar-button-selected {
  color: var(--bs-primary);
}
</style>
