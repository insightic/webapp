<template>
  <div class="text-secondary mb-4">Auto Assessment Report</div>

  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col" width="20%">Name</th>
        <th scope="col" width="20%">Status</th>
        <th scope="col" width="60%">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result, idx) in jobRunResults" :key="idx">
        <td>{{ result.RuleName }}</td>
        <td>
          <span v-if="result.Status == 'passed'">
            <i class="bi bi-check-circle text-success"></i>
          </span>
          <span v-if="result.Status == 'failed'">
            <i class="bi bi-x-circle text-danger"></i>
          </span>
          <span v-if="result.Status == 'skipped'">
            <i class="bi bi-dash-circle text-warn"></i>
          </span>
          <span v-if="result.Status == 'internal_error'">
            <i class="bi bi-exclamation-circle text-danger"></i>
          </span>
        </td>
        <td>{{ result.Output }}</td>
      </tr>
    </tbody>
  </table>
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
