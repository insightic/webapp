<template>
  <div class="d-flex my-3 flex-row">
    <div class="me-2">
      <i class="text-primary bi bi-check-circle-fill" v-if="passedRules == totalRules"></i>
      <i class="text-danger bi bi-x-circle-fill" v-else></i>
    </div>
    <div>
      <div v-if="passedRules == totalRules">All Rules Passed</div>
      <div v-else>Validation Not Passed</div>
      <div class="text-secondary small">
        {{ testedRules }}/{{ totalRules }} Rules Tested, and {{ passedRules }}/{{ totalRules }}
        Passed.
      </div>
      <div class="text-secondary small">{{ formatDateTime(createdAt, true) }}</div>
    </div>
    <div class="ms-auto">
      <button type="button" class="btn btn-sm btn-outline-primary mx-2 my-1" @click="click(jobId)">
        View Report
      </button>
      <button
        type="button"
        class="btn btn-sm btn-success mx-2 my-1"
        v-if="passedRules == totalRules"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers'

export default {
  props: {
    totalRules: { type: Number, required: true },
    testedRules: { type: Number, required: true },
    passedRules: { type: Number, required: true },
    createdAt: { type: String, required: true },
    jobId: { type: Number, required: true }
  },
  methods: {
    formatDateTime,
    click(jobID: number) {
      this.$router.push({
        path: `/projects/${this.$route.params.projectID}`,
        query: { jobID: jobID, view: 'Report' }
      })
    }
  }
}
</script>
