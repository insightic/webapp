<template>
  <div class="text-secondary mb-4">Showing runs from all validations</div>

  <div style="max-width: 960px">
    <div class="card w-100" style="width: 18rem">
      <div class="card-header">
        <b>{{ jobs.length }} validation runs</b>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="job in jobs" :key="job.ID">
          <ValidationComponent
            :total-rules="job.RulesCount"
            :tested-rules="job.RulesPassed + job.RulesFailed + job.RulesSkipped"
            :passed-rules="job.RulesPassed"
            :created-at="job.CreatedAt"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ValidationComponent from '@/components/ValidationComponent.vue'
import { getProjectJobs } from '@/api'
import type { Job } from '@/api'

export default {
  components: {
    ValidationComponent
  },
  async created() {
    this.jobs = await getProjectJobs(this.$route.params.projectID as string)
  },
  data() {
    return {
      jobs: [] as Job[]
    }
  }
}
</script>
