<template>
  <div class="d-flex p-2 project-sidebar-item">
    <div style="margin-right: 20px"><img :src="logo" class="logo" /></div>
    <div class="text" :class="{ highlighted: highlighted }">{{ name }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    guid: String,
    name: String,
    logo: String,
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

.logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(39, 50, 131);
  background-color: white;
  padding: 3px;
}

.text {
  line-height: 32px;
}

.highlighted {
  color: rgba(39, 50, 131);
  font-weight: bold;
}
</style>
