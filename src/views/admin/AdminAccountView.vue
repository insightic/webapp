<template>
  <SidebarLayout name="Account" :sub-views="subViews" default-sub-view="Projects" />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import AccountProjectsView from '@/views/admin/accountSubViews/AccountProjectsView.vue'
import AccountUsersView from '@/views/admin/accountSubViews/AccountUsersView.vue'
import AccountProfileView from '@/views/admin/accountSubViews/AccountProfileView.vue'

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
          component: AccountProjectsView
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
