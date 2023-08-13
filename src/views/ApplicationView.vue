<template>
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
./applicationSubViews/ProjectKYCView.vue./applicationSubViews/ProjectAutoAssessmentView_Backup.vue./applicationSubViews/ProjectKYCView.vue./applicationSubViews/ProjectAutoAssessmentView_Backup.vue
