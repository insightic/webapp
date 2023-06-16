<template>
  <div class="sidebar-button d-flex" :class="{'sidebar-button-selected': selected}">
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
  font-size: 1.05rem;
  margin: 15px 0px;
}

.sidebar-button:hover {
  color: #0051ffc7;
}

.sidebar-button-selected {
  color: var(--bs-primary);
}
</style>
