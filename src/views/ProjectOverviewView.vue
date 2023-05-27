<template>
  <div class="row">
    <div class="col-md-6 p-2" v-for="(prop, idx) in project?.props" :key="idx">
      <PropDisplayGroup :title="prop.title" :props="prop.props" />
    </div>
  </div>
</template>

<script lang="ts">
import PropDisplayGroup from '@/components/PropDisplayGroup.vue'

export default {
  props: ['project'],
  components: {
    PropDisplayGroup
  }
}
</script>
