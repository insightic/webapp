<template>
  <div class="status-card-group p-2 w-100 mb-2" :style="{ backgroundColor: backgroundColor }">
    <div class="w-100" style="text-align: right; cursor: pointer" @click="active = !active">
      {{ title }}
      <i v-if="!active" class="bi bi-arrow-bar-down" style="margin-left: 10px"> </i>
      <i v-if="active" class="bi bi-arrow-bar-up" style="margin-left: 10px"></i>
    </div>
    <div v-if="active">
      <StatusCard
        v-for="(status, idx) in statuses"
        :key="idx"
        :text="status.text"
        :footer="status.footer"
        :desciption-title="status.desciptionTitle"
        :desciption-text="status.desciptionText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import StatusCard from './StatusCard.vue'

export default {
  props: ['title', 'statuses', 'backgroundColor'],
  components: {
    StatusCard
  },
  data() {
    return { active: false }
  }
}
</script>

<style scoped>
.status-card-group {
  border-radius: 4px;
  font-size: 0.85rem;
}
</style>
