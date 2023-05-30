<template>
  <div>
    <div class="row my-3">
      <div class="col-md-4">
        <ActionCard title="Total Suggestion" status="17" changes="↑ 122" type="up">
          <i class="bi bi-search"></i>
        </ActionCard>
      </div>
      <div class="col-md-4">
        <ActionCard title="Completed" status="5" changes="↑ 5.4%" type="up">
          <i class="bi bi-check2-circle"></i>
        </ActionCard>
      </div>
      <div class="col-md-4">
        <ActionCard title="Action Needed" status="8" changes="↓ 3.2%" type="down">
          <i class="bi bi-info-circle"></i>
        </ActionCard>
      </div>
    </div>
    <h4>Action</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in project?.actionsView.actions" :key="idx">
        <ActionStatusCard :title="status.title" :text="status.text" :type="status.type" />
      </div>
    </div>
    <h4>Task</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in project?.actionsView.tasks" :key="idx">
        <ActionStatusCard :title="status.title" :text="status.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ActionStatusCard from '@/components/ActionStatusCard.vue'
import ActionCard from '@/components/ActionCard.vue'

export default {
  props: ['project'],
  components: {
    ActionStatusCard,
    ActionCard
  }
}
</script>
