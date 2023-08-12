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
            :job-id="job.ID"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ValidationComponent from '@/components/ValidationComponent.vue'
import ApplicationViewMixin from './ApplicationViewMixin'

import { getProjectJobs } from '@/api'
import type { Job } from '@/api'

export default {
  components: {
    ValidationComponent
  },
  mixins: [ApplicationViewMixin],
  async created() {
    this.jobs = await getProjectJobs(this.projectID)
  },
  data() {
    return {
      jobs: [] as Job[]
    }
  }
}
</script>
