<template>
  <div class="text-secondary mb-4">Auto Assessment Report</div>
</template>

<script lang="ts">
import { getJobRunResults, type JobRunResult } from '@/api'
import ProjectViewMixin from './ProjectViewMixin'

export default {
  mixins: [ProjectViewMixin],
  async created() {
    const jobID = this.$route.query.jobID as string
    this.jobRunResults = await getJobRunResults(this.projectID, jobID)
    console.log(this.jobRunResults)
  },
  data() {
    return {
      jobRunResults: [] as JobRunResult[]
    }
  }
}
</script>
