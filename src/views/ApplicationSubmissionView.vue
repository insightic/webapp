<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Submissions</h1>
      <div class="d-flex justify-content-between align-items-center my-2">
        <div class="text-secondary">Showing all submissions</div>
        <button class="btn btn-primary" @click="CreateSubmission">New Submission</button>
      </div>

      <div class="w-100 my-3" style="overflow-x: auto">
        <table class="table table-bordered">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 40%">Sumission ID</th>
              <th scope="col" style="width: 10%">Created At</th>
              <th scope="col" style="width: 8%">Status</th>
              <th scope="col" style="width: 22%; min-width: 200px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="submission in submissions" :key="submission.SubmissionID">
              <td>{{ submission.SubmissionID }}</td>
              <td>{{ formatDate(submission.CreatedAt) }}</td>
              <td>{{ submission.Status }}</td>
              <td>
                <button
                  v-if="submission.Status == 'draft'"
                  class="btn btn-sm btn-outline-primary mx-2"
                  @click="ContinueSubmission(submission.SubmissionID)"
                >
                  Continue Submission
                </button>
                <a
                  v-if="submission.Status != 'draft'"
                  class="btn btn-sm btn-outline-primary mx-2"
                  type="button"
                  :href="'/applications/' + applicationID + '/' + submission.SubmissionID"
                  >View</a
                >
                <a
                  class="btn btn-sm btn-outline-danger mx-2"
                  type="button"
                  @click="deleteSubmission(applicationID, submission.SubmissionID)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import { getApplication, type Submission, deleteSubmission } from '@/api'
import { formatDate } from '@/helpers'

export default {
  data() {
    return {
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
  },
  components: {
    NavFooterLayout
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
