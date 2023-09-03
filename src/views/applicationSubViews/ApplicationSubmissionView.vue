<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Submissions</h1>
      <div class="d-flex justify-content-between align-items-center my-2">
        <div class="text-secondary">Showing all submissions</div>
        <button class="btn btn-primary" @click="toCreateSubmission">New Submission</button>
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
                  :href="'/projects/' + applicationID + '/' + submission.SubmissionID"
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
                  @click="toSubmission(submission.SubmissionID)"
                >
                  Continue Application
                </button>
              </td>
            </tr>
            <!-- <tr v-for="application in applications" :key="application.ID">
              <td>asdf</td>
              <td>{{ formatDate(getSubmission(application).SubmissionAt) }}</td>
              <td>{{ formatDate(getSubmission(application).SubmissionAt) }}</td>
              <td>{{ 'Pending' }}</td>
              <td>
                <a
                  class="btn btn-sm btn-outline-primary mx-2"
                  type="button"
                  :href="'/projects/' + application.ID"
                  >View</a
                >
                <a class="btn btn-sm btn-outline-danger mx-2" type="button">Withdraw</a>
              </td>
            </tr> -->
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
    this.applicationID = this.$route.params.projectID as string
    const resp = await getApplication(this.applicationID)
    this.submissions = resp?.Submissions || []
    this.draftExists = resp!.Submissions.filter((item) => item.Status == 'draft').length > 0
    console.log('submission', this.submissions)
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
    toCreateSubmission() {
      if (this.draftExists) {
        window.alert(
          'You already have a draft submission. Please continue on the draft submission.'
        )
      } else {
        this.$router.push('/projects/' + this.applicationID + '/create-submission')
      }
    },
    toSubmission(submissionID: string) {
      this.$router.push('/projects/' + this.applicationID + '/' + submissionID + '/draft')
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

<!-- <template>
  <SidebarLayout
    name="Application"
    :sub-views="subViews"
    default-sub-view="Overview"
    back-button-name="Return to organizations"
    back-button-path="/"
  />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ProjectOverviewView from '@/views/applicationSubViews/ApplicationOverviewView.vue'
import ProjectKYCView from './applicationSubViews/ApplicationKYCView.vue'
import ProjectSourceCodeView from '@/views/applicationSubViews/ApplicationSourceCodeView.vue'
import ProjectValidationsView from '@/views/applicationSubViews/ApplicationValidationsView.vue'
import ProjectResultsView from '@/views/applicationSubViews/ApplicationResultsView.vue'
import ProjectAutoAssessmentView from '@/views/applicationSubViews/ApplicationAutoAssessmentView.vue'
import ProjectAutoAssessmentView_Backup from './applicationSubViews/ApplicationAutoAssessmentView_Backup.vue'
import ApplicationDetailsView from './applicationSubViews/ApplicationDetailsView.vue'

export default {
  components: {
    SidebarLayout
  },
  data() {
    return {
      subViews: [
        {
          name: 'Overview',
          icon: 'bi-info-circle',
          component: ProjectOverviewView
        },
        {
          name: 'Details',
          icon: 'bi-info-square',
          component: ApplicationDetailsView,
          hidden: true
        },
        {
          name: 'Report',
          icon: 'bi-patch-question',
          component: ProjectAutoAssessmentView,
          hidden: true
        },
        {
          name: 'KYC',
          icon: 'bi-credit-card-2-front',
          component: ProjectKYCView
        },
        {
          name: 'Source Code',
          icon: 'bi-code-slash',
          component: ProjectSourceCodeView
        },
        {
          name: 'Validations',
          icon: 'bi-clipboard2-check',
          component: ProjectValidationsView
        },
        {
          name: 'Results',
          icon: 'bi-file-text',
          component: ProjectResultsView
        },
        {
          name: 'Auto Assessment View (Example)',
          icon: 'bi-patch-question',
          component: ProjectAutoAssessmentView_Backup
        }
      ]
    }
  }
}
</script>
./applicationSubViews/ProjectKYCView.vue./applicationSubViews/ProjectAutoAssessmentView_Backup.vue./applicationSubViews/ProjectKYCView.vue./applicationSubViews/ProjectAutoAssessmentView_Backup.vue -->
