<template>
  <SidebarLayout name="Project" :sub-views="subViews" default-sub-view="Overview" back-button-name="Return to organizations" back-button-path="/"/>
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ProjectOverviewView from '@/views/projectSubViews/ProjectOverviewView.vue'
import ProjectKYCView from './projectSubViews/ProjectKYCView.vue'
import ProjectSourceCodeView from '@/views/projectSubViews/ProjectSourceCodeView.vue'
import ProjectValidationsView from '@/views/projectSubViews/ProjectValidationsView.vue'
import ProjectApplicationsView from '@/views/projectSubViews/ProjectApplicationsView.vue'
import ProjectSettingsView from '@/views/projectSubViews/ProjectSettingsView.vue'

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
          name: 'KYC',
          icon: 'bi-credit-card-2-front',
          component: ProjectKYCView
        },
        {
          name: 'Settings',
          icon: 'bi-gear',
          component: ProjectSettingsView
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
          name: 'Applications',
          icon: 'bi-file-text',
          component: ProjectApplicationsView
        }
      ]
    }
  }
}
</script>
