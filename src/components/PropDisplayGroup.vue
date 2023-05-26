<template>
  <div class="card">
    <div class="card-header title">{{ title }}</div>
    <div class="card-body">
      <component
        :is="prop?.component"
        v-for="(prop, idx) in props"
        :key="idx"
        :prop="prop"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import PropDisplayCard from './PropDisplayCard.vue'
import PropDisplayKeyValue from './PropDisplayKeyValue.vue'
import PropDisplayTable from './PropDisplayTable.vue'

export default {
  props: ['title', 'props'],
  components: {
    PropDisplayCard,
    PropDisplayKeyValue,
    PropDisplayTable
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
