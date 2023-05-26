<template>
  <div class="card">
    <div class="card-header title">{{ title }}</div>
    <div class="card-body">
      <AttrDisplayCard />
    </div>
  </div>
</template>

<script lang="ts">
import AttrDisplayCard from './AttrDisplayCard.vue'

export default {
  props: {
    title: String
  },
  components: {
    AttrDisplayCard
  }
}
</script>

<style scoped>
.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(39, 50, 131);
}
</style>
