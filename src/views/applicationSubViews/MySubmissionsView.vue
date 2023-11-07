<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <button class="btn btn-primary" @click="createSubmission">New Submission</button>
  </div>

  <div class="card w-100">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item"
        v-for="submission in application.Submissions"
        :key="submission.SubmissionID"
      >
        <AccountApplicationSubmissionComponent
          :name="submission.Content?.Name"
          :one-liner="submission.Content?.OneLiner"
          :status="submission.Status"
          :submission-id="submission.SubmissionID"
          :created-at="submission.CreatedAt"
          @continue="() => continueSubmission(submission.SubmissionID)"
          @view="() => $router.push('/applications/' + applicationID)"
          @delete="() => deleteSubmission(submission.SubmissionID)"
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
        const res = await deleteSubmission(this.applicationID, submissionID)
        console.log(res)
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
