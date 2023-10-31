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
              <th scope="col" style="width: 50%">Sumission ID</th>
              <th scope="col" style="width: 10%">Created At</th>
              <th scope="col" style="width: 8%">Status</th>
              <th scope="col" style="width: 12%; min-width: 200px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="submission in submissions" :key="submission.SubmissionID">
              <td>{{ submission.SubmissionID }}</td>
              <td>{{ formatDate(submission.CreatedAt) }}</td>
              <td>{{ submission.Status }}</td>
              <td v-if="submission.Status != 'draft'">
                <a
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
              <td v-else>
                <button
                  class="btn btn-sm btn-outline-primary mx-2"
                  @click="ContinueSubmission(submission.SubmissionID)"
                >
                  Continue Submission
                </button>
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
      draftExists: false
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
      this.$router.push('/applications/' + this.applicationID + '/create-submission')
      // if (this.draftExists) {
      //   window.alert(
      //     'You already have a draft submission. Please continue on the draft submission.'
      //   )
      // } else {
      //   this.$router.push('/projects/' + this.applicationID + '/create-submission')
      // }
    },
    ContinueSubmission(submissionID: string) {
      this.$router.push('/applications/' + this.applicationID + '/' + submissionID + '/continue-submission')
      // this.$router.push({name:'SubmissionView', query: {submissionID:submissionID, edit:'1'}})
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
