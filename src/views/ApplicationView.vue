<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Applications</h1>
      <div class="text-secondary">Showing all submissions</div>

      <div class="w-100 my-3" style="overflow-x: auto">
        <table class="table table-bordered">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 40%">Sumission ID</th>
              <th scope="col" style="width: 10%">Updated At</th>
              <th scope="col" style="width: 10%">Created At</th>
              <th scope="col" style="width: 8%">Status</th>
              <th scope="col" style="width: 12%; min-width: 200px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="submission in submissions">
              <td>{{ submission["SubmissionID"] }}</td>
              <td>{{ formatDate(submission["UpdatedAt"]) }}</td>
              <td>{{ formatDate(submission["UpdatedAt"]) }}</td>
              <td>{{ submission["Status"] }}</td>
              <td>
                <a class="btn btn-sm btn-outline-primary mx-2" type="button">View</a>
                <a class="btn btn-sm btn-outline-danger mx-2" type="button">Withdraw</a>
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
import { getProject } from '@/api'
import {formatDate} from "@/helpers";

export default {
    methods: {formatDate},
  data() {
    return {
      applicationID: '',
      submissions: []
    }
  },
  created() {
    this.applicationID = window.location.href.split('/')[4]
    getProject(this.applicationID).then((Response) => {
        Response ? this.submissions = Response.Submissions : null
    })
  },
  components: {
    NavFooterLayout
  }
}
</script>

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
