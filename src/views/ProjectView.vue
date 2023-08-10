<template>
  <SidebarLayout name="Project" :sub-views="subViews" default-sub-view="Overview" back-button-name="Return to organizations" back-button-path="/"/>
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ProjectOverviewView from '@/views/projectSubViews/ProjectOverviewView.vue'
import ProjectKYCView from './projectSubViews/ProjectKYCView.vue'
import ProjectSourceCodeView from '@/views/projectSubViews/ProjectSourceCodeView.vue'
import ProjectValidationsView from '@/views/projectSubViews/ProjectValidationsView.vue'
import ProjectResultsView from '@/views/projectSubViews/ProjectResultsView.vue'
import ProjectAutoAssessmentView from '@/views/projectSubViews/ProjectAutoAssessmentView.vue'
import ProjectAutoAssessmentView_Backup from './projectSubViews/ProjectAutoAssessmentView_Backup.vue'

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
          name: 'Report',
          icon: 'bi-patch-question',
          component: ProjectAutoAssessmentView,
          hidden: true,
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
        },
      ]
    }
  }
}
</script>
