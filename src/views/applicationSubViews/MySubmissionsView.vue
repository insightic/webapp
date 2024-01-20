<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <button class="btn btn-primary" @click="createSubmission">New Submission</button>
  </div>

  <div class="card w-100">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="s in application.Submissions" :key="s.SubmissionID">
        <AccountApplicationSubmissionComponent
          :name="s.Content?.Name"
          :one-liner="s.Content?.OneLiner"
          :logo-url="s.Content?.LogoURL"
          :status="s.Status"
          :submission-id="s.SubmissionID"
          :created-at="s.CreatedAt"
          @continue="() => continueSubmission(s.SubmissionID)"
          @delete="() => deleteSubmission(s.SubmissionID)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { deleteSubmission } from '@/api'
import { formatDate } from '@/helpers'
import AccountApplicationSubmissionComponent from '@/components/AccountApplicationSubmissionComponent.vue'

export default {
  components: {
    AccountApplicationSubmissionComponent
  },
  props: ['application', 'submission'],
  computed: {
    applicationID() {
      return this.$route.params.applicationID as string
    }
  },
  methods: {
    formatDate,
    async deleteSubmission(submissionID: string) {
      if (confirm('Are you sure to delete this submission?') == false) {
        return
      } else {
        await deleteSubmission(this.applicationID, submissionID)
        location.reload()
      }
    },
    createSubmission() {
      this.$router.push(`/create-application?applicationID=${this.applicationID}`)
    },
    continueSubmission(submissionID: string) {
      this.$router.push(
        `/create-application?applicationID=${this.applicationID}&submissionID=${submissionID}`
      )
    }
  }
}
</script>

<style scoped>
th,
tr {
  vertical-align: middle;
}
</style>
