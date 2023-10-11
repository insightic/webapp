<template>
  <div class="row">
    <div class="col-md-6 p-2" v-for="(g, idx) in data" :key="idx">
      <PropDisplayGroup :title="g.title" :props="g.props" />
    </div>
  </div>
</template>

<script lang="ts">
import PropDisplayGroup from '@/components/PropDisplayGroup.vue'

export default {
  props: ['project'],
  components: {
    PropDisplayGroup
  },
  computed: {
    data() {
      return this.project?.overviewView || []
    }
  }
}
</script>
