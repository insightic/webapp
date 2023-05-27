<template>
  <div>
    <div class="row my-3">
      <div class="col-md-4"><ActionCard title="Total Suggestion" status="17" /></div>
      <div class="col-md-4"><ActionCard title="Completed" status="5" /></div>
      <div class="col-md-4"><ActionCard title="Action Needed" status="8" /></div>
    </div>
    <h3>Action</h3>
  </div>
</template>

<script lang="ts">
import ActionCard from '@/components/ActionCard.vue'

export default {
  props: ['project'],
  components: {
    ActionCard
  }
}
</script>
