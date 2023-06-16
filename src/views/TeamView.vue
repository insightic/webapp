<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-3">
      <h5 class="mb-4">Team</h5>

      <SideBarButtonComponent
        v-for="(subView, idx) in subViews"
        :key="idx"
        :name="subView.name"
        :icon="subView.icon"
        :selected="teamSubView == subView.name.toLocaleLowerCase()"
        @click="clickSideBar(subView.name.toLocaleLowerCase())"
      />

      <hr style="color: rgba(0, 0, 0, 0.2)" />

      <button type="button" class="mt-3 w-100 btn btn-outline-danger">Logout</button>
    </div>
    <div class="flex-grow-1 p-3">
      <component :is="subViews.filter(v => v.name.toLocaleLowerCase() == teamSubView)[0].component" />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'
import TeamProjectsView from '@/views/teamSubViews/TeamProjectsView.vue'
import TeamUsersView from '@/views/teamSubViews/TeamUsersView.vue'
import TeamProfileView from '@/views/teamSubViews/TeamProfileView.vue'
import TeamBillingView from '@/views/teamSubViews/TeamBillingView.vue'

export default {
  components: {
    NavBar,
    SideBarButtonComponent,
    TeamProjectsView,
    TeamUsersView,
    TeamProfileView,
    TeamBillingView
  },
  created() {
    if (!this.teamSubView) this.$router.replace(`/teams/${this.teamID}/projects`)
  },
  data() {
    return {
      subViews: [
        {
          name: 'Projects',
          icon: 'bi-box',
          component: TeamProjectsView
        },
        {
          name: 'Users',
          icon: 'bi-people',
          component: TeamUsersView
        },
        {
          name: 'Profile',
          icon: 'bi-diagram-3',
          component: TeamProfileView
        },
        {
          name: 'Billing',
          icon: 'bi-receipt',
          component: TeamBillingView
        }
      ]
    }
  },
  computed: {
    teamID() {
      return this.$route.params.teamID
    },
    teamSubView() {
      return this.$route.params.teamSubView
    },
  },
  methods: {
    clickSideBar(subView: string) {
      this.$router.push(`/teams/${this.teamID}/${subView}`)
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  border-right: 1px solid #e0e0e0;
  transition: width 0.5s;
  background-color: #e9f2f8;
}

.sidebar-button {
  cursor: pointer;
}
</style>
