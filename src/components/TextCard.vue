<template>
  <div class="card">
    <div class="label">{{ label }}</div>
    <div class="text">
      <div style="position: absolute; top: 50%; transform: translate(0, -40%)">{{ text }}</div>
    </div>
    <div
      class="label"
      style="position: absolute; bottom: 0; left: 0; right: 0; padding: 5px; text-align: center"
    >
      {{ footer }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    text: String,
    footer: String
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  border: 2px solid rgba(39, 50, 131);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);
  height: 96px;
}

.label {
  color: rgb(135, 136, 141);
  font-size: 0.6rem;
}

.text {
  color: rgba(39, 50, 131);
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
