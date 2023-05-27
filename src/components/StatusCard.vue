<template>
  <div class="w-100 status-card my-2 py-3" @click="active = !active">
    <div class="px-2 text d-flex flex-column" style="text-align: center">
      <div>{{ text }}</div>
      <div style="color: rgb(135, 136, 141); font-size: 0.6rem">{{ footer }}</div>
    </div>
    <hr v-if="active" />
    <div v-if="active" class="px-2 text d-flex flex-column" style="text-align: left">
      <div class="d-flex">
        <i class="bi bi-file-earmark" style="margin-right: 5px"></i>
        <div>{{ desciptionTitle }}</div>
      </div>
      <div class="d-flex">
        <i class="bi bi-code-slash" style="margin-right: 5px"></i>
        <div style="color: rgb(135, 136, 141); font-size: 0.6rem">{{ desciptionText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    footer: String,
    desciptionTitle: String,
    desciptionText: String
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.status-card {
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgba(39, 50, 131) !important;
}

.text {
  color: rgba(39, 50, 131);
  font-size: 0.7rem;
}
</style>
