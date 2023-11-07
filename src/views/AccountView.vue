<template>
  <SidebarLayout name="Account" :sub-views="subViews" default-sub-view="Applications" />
</template>

<script lang="ts">
import SidebarLayout from '@/layouts/SidebarLayout.vue'

import ApplicationsView from '@/views/ApplicationsView.vue'
import UsersView from '@/views/UsersView.vue'
import ProfileView from '@/views/ProfileView.vue'

export default {
  components: {
    SidebarLayout
  },
  data() {
    return {
      subViews: [
        {
          name: 'Applications',
          icon: 'bi-card-checklist',
          component: ApplicationsView
        },
        {
          name: 'Users',
          icon: 'bi-people',
          component: UsersView
        },
        {
          name: 'Profile',
          icon: 'bi-info-circle',
          component: ProfileView
        }
      ]
    }
  }
}
</script>
