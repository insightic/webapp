<template>
  <SidebarLayout name="Account" :sub-views="subViews" default-sub-view="Applications" />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import AccountApplicationsView from '@/views/accountSubViews/AccountApplicationsView.vue'
import AccountUsersView from '@/views/accountSubViews/AccountUsersView.vue'
import AccountKYCView from '@/views/accountSubViews/AccountKYCView.vue'
import AccountProfileView from '@/views/accountSubViews/AccountProfileView.vue'
import AccountCreateProjectView from '@/views/accountSubViews/AccountCreateProjectView.vue'

export default {
  components: {
    SidebarLayout
  },
  data() {
    return {
      subViews: [
        {
          name: 'Applications',
          icon: 'bi-box',
          component: AccountApplicationsView
        },
        {
          name: 'Create Project',
          icon: 'bi-plus-circle',
          component: AccountCreateProjectView,
          hidden: true
        },
        {
          name: 'Users',
          icon: 'bi-people',
          component: AccountUsersView
        },
        {
          name: 'Profile',
          icon: 'bi-diagram-3',
          component: AccountProfileView
        }
      ]
    }
  }
}
</script>
