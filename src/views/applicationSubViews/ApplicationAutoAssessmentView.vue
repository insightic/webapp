<template>
  <div class="text-secondary mb-4">Auto Assessment Report</div>

  <div style="max-width: 960px">
    <div class="card w-100" style="width: 18rem">
      <div class="card-header">
        <b>Rule Set</b>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="result in jobRunResults" :key="result.ID">
          <div class="d-flex my-3 flex-row">
            <div class="me-2">
              <i class="text-primary bi bi-check-circle-fill" v-if="result.Status == 'passed'"></i>
              <i class="text-danger bi bi-x-circle-fill" v-if="result.Status == 'failed'"></i>
            </div>
            <div class="flex-grow-1">
              <div>{{ result.RuleName }}</div>
              <div class="text-secondary small">{{ result.RuleDescription }}</div>
              <div class="text-secondary small">{{ formatDateTime(result.UpdatedAt, true) }}</div>
              <div class="mt-3 small" v-if="result.Output">Output Log</div>
              <div v-if="result.Output">
                <CodeViewComponent :code="result.Output" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { getJobRunResults, type JobRunResult } from '@/api'
import ApplicationViewMixin from './ApplicationViewMixin'
import CodeViewComponent from '@/components/CodeViewComponent.vue'
import { formatDateTime } from '@/helpers'

export default {
  components: {
    CodeViewComponent
  },
  mixins: [ApplicationViewMixin],
  async created() {
    const jobID = this.$route.query.jobID as string
    this.jobRunResults = await getJobRunResults(this.projectID, jobID)
    console.log(this.jobRunResults)
  },
  data() {
    return {
      jobRunResults: [] as JobRunResult[]
    }
  },
  methods: {
    formatDateTime
  }
}
</script>
