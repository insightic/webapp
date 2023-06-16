<template>
  <SidebarLayout name="Account" :sub-views="subViews" default-sub-view="Projects" />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import AccountProjectsView from '@/views/accountSubViews/AccountProjectsView.vue'
import AccountUsersView from '@/views/accountSubViews/AccountUsersView.vue'
import AccountProfileView from '@/views/accountSubViews/AccountProfileView.vue'
import AccountBillingView from '@/views/accountSubViews/AccountBillingView.vue'
import AccountCreateProjectView from '@/views/accountSubViews/AccountCreateProjectView.vue'

export default {
  components: {
    SidebarLayout,
  },
  data() {
    return {
      subViews: [
        {
          name: 'Projects',
          icon: 'bi-box',
          component: AccountProjectsView
        },
        {
          name: 'CreateProject',
          icon: 'bi-plus-circle',
          component: AccountCreateProjectView
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
        },
        {
          name: 'Billing',
          icon: 'bi-receipt',
          component: AccountBillingView
        }
      ]
    }
  }
}
</script>
