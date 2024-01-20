<template>
  <div class="sidebar-button d-flex" :class="{ 'sidebar-button-selected': selected }">
    <i class="bi me-3" :class="icon"></i>

    <div class="me-2">{{ name }}</div>

    <i class="bi" :class="rightIcon" v-if="rightIcon"></i>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selected: { type: Boolean },
    icon: { type: String, required: true },
    rightIcon: { type: String },
    name: { type: String, required: true }
  }
}
</script>

<style scoped>
.sidebar-button {
  cursor: pointer;
  font-size: 1rem;
  margin: 15px 0px;
  color: var(--tblr-gray-400);
}

.sidebar-button:hover {
  color: var(--tblr-linkedin);
}

.sidebar-button-selected {
  color: var(--tblr-linkedin);
}
</style>
