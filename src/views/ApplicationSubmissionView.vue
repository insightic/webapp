<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Submissions</h1>
      <div class="d-flex justify-content-between align-items-center my-2">
        <div class="text-secondary">Showing all submissions</div>
        <button class="btn btn-primary" @click="CreateSubmission">New Submission</button>
      </div>

      <div v-if="isloading" class="w-100 d-flex justify-content-center mt-5">
      <div class="spinner-border"></div>
    </div>

      <div v-if="!isloading" class="w-100 my-3" style="overflow-x: auto">
        <div class="card w-100">
          <div class="card-header"><b>My Submissions</b></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"  v-for="submission in submissions" :key="submission.SubmissionID">
              <AccountApplicationSubmissionComponent
                :name="submission.Content?.Name"
                :one-liner="submission.Content?.OneLiner"
                :status="submission.Status"
                :submission-id="submission.SubmissionID"
                :created-at="submission.CreatedAt"
                @continue="() => ContinueSubmission(submission.SubmissionID)"
                @view="() => $router.push('/applications/' + applicationID + '/' + submission.SubmissionID)"
                @delete="() => deleteSubmission(applicationID, submission.SubmissionID)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import { getApplication, type Submission, deleteSubmission } from '@/api'
import { formatDate } from '@/helpers'
import AccountApplicationSubmissionComponent from '@/components/AccountApplicationSubmissionComponent.vue'

export default {
  components: {
    NavFooterLayout,
    AccountApplicationSubmissionComponent
  },
  data() {
    return {
      isloading: true,
      applicationID: '',
      submissions: [] as Array<Submission>,
      draftExists: false,
      isDisabled: false
    }
  },
  async created() {
    this.applicationID = this.$route.params.applicationID as string
    const resp = await getApplication(this.applicationID)
    this.submissions = resp?.Submissions || []
    this.draftExists = resp!.Submissions.filter((item) => item.Status == 'draft').length > 0
    this.isloading = false
  },
  methods: {
    formatDate,
    async deleteSubmission(applicationID: string, submissionID: string) {
      if (confirm('Are you sure to delete this submission?') == false) {
        return
      } else {
        const res = await deleteSubmission(applicationID, submissionID)
        console.log(res)
        location.reload()
      }
    },
    CreateSubmission() {
      this.$router.push(`/create-application?applicationID=${this.applicationID}`)
    },
    ContinueSubmission(submissionID: string) {
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
