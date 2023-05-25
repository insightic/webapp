<template>
  <div class="org-button mx-auto" @click="onClick">
    <div class="d-flex" style="justify-content: space-around">
      <i class="bi bi-boxes"></i>
      <div>{{ name }}</div>
      <i class="bi bi-chevron-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    guid: String
  },
  methods: {
    onClick() {
      this.$router.push(`/organizations/${this.guid}`)
    }
  }
}
</script>

<style scoped>
.org-button {
  cursor: pointer;
  width: 100%;
  padding: 30px 20px 30px 20px;
  margin-bottom: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
}

.org-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
