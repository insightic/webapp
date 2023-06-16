<template>
  <SidebarLayout name="Project" :sub-views="subViews" default-sub-view="Details" back-button-name="Return to organizations" back-button-path="/"/>
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ProjectDetailsView from '@/views/projectSubViews/ProjectDetailsView.vue'
import ProjectSourceCodeView from '@/views/projectSubViews/ProjectSourceCodeView.vue'
import ProjectValidationsView from '@/views/projectSubViews/ProjectValidationsView.vue'

export default {
  components: {
    SidebarLayout
  },
  data() {
    return {
      subViews: [
        {
          name: 'Details',
          icon: 'bi-info-circle',
          component: ProjectDetailsView
        },
        {
          name: 'Source Code',
          icon: 'bi-code-slash',
          component: ProjectSourceCodeView
        },
        {
          name: 'Validations',
          icon: 'bi-bar-chart-steps',
          component: ProjectValidationsView
        }
      ]
    }
  }
}
</script>
