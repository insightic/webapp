<template>
  <div class="d-flex p-2 project-sidebar-item" :class="{highlighted: highlighted}">
    <div style="margin-right: 20px"><i class="bi bi-code-square"></i></div>
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    guid: String,
    highlighted: Boolean
  }
}
</script>

<style scoped>
.project-sidebar-item {
    cursor: pointer;
}

.project-sidebar-item:hover {
    color: rgba(39, 50, 131);
}

.highlighted {
    color: rgba(39, 50, 131);
}
</style>
