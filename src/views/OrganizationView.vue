<template>
  <SidebarLayout name="Organization" :sub-views="subViews" default-sub-view="Projects" />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import OrganizationProjectsView from '@/views/organizationSubViews/OrganizationProjectsView.vue'
import OrganizationUsersView from '@/views/organizationSubViews/OrganizationUsersView.vue'
import OrganizationProfileView from '@/views/organizationSubViews/OrganizationProfileView.vue'
import OrganizationBillingView from '@/views/organizationSubViews/OrganizationBillingView.vue'
import CreateProjectView from '@/views/organizationSubViews/CreateProjectView.vue'

export default {
  components: {
    SidebarLayout
  },
  data() {
    return {
      subViews: [
        {
          name: 'Projects',
          icon: 'bi-box',
          component: OrganizationProjectsView
        },
        {
          name: 'CreateProject',
          icon: 'bi-plus-circle',
          component: CreateProjectView
        },
        {
          name: 'Users',
          icon: 'bi-people',
          component: OrganizationUsersView
        },
        {
          name: 'Profile',
          icon: 'bi-diagram-3',
          component: OrganizationProfileView
        },
        {
          name: 'Billing',
          icon: 'bi-receipt',
          component: OrganizationBillingView
        }
      ]
    }
  }
}
</script>
