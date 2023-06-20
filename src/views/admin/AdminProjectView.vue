<template>
  <SidebarLayout name="Project" :sub-views="subViews" default-sub-view="Overview" back-button-name="Return to organizations" back-button-path="/admin"/>
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ProjectOverviewView from '@/views/admin/projectSubViews/ProjectOverviewView.vue'
import ProjectSourceCodeView from '@/views/admin/projectSubViews/ProjectSourceCodeView.vue'
import ProjectValidationsView from '@/views/admin/projectSubViews/ProjectValidationsView.vue'
import ProjectSubmissionsView from '@/views/admin/projectSubViews/ProjectSubmissionsView.vue'

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
          name: 'Submissions',
          icon: 'bi-file-text',
          component: ProjectSubmissionsView
        }
      ]
    }
  }
}
</script>
