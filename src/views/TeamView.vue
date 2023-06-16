<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-3">
      <h5 class="mb-4">Team</h5>

      <SideBarButtonComponent
        name="Projects"
        icon="bi-box"
        :selected="teamSubView == 'projects'"
        @click="clickSideBar('projects')"
      />

      <SideBarButtonComponent
        name="Profile"
        icon="bi-diagram-3"
        :selected="teamSubView == 'profile'"
        @click="clickSideBar('profile')"
      />

      <hr style="color: rgba(0, 0, 0, 0.2)" />

      <button type="button" class="mt-3 w-100 btn btn-outline-danger">Logout</button>
    </div>
    <div class="flex-grow-1 p-3">
      <component :is="teamSubViewComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'
import TeamProjectsView from '@/views/teamSubViews/TeamProjectsView.vue'
import TeamProfileView from '@/views/teamSubViews/TeamProfileView.vue'

export default {
  components: {
    NavBar,
    SideBarButtonComponent,
    TeamProjectsView,
    TeamProfileView
  },
  created() {
    if (!this.teamSubView) this.$router.replace(`/teams/${this.teamID}/projects`)
  },
  computed: {
    teamID() {
      return this.$route.params.teamID
    },
    teamSubView() {
      return this.$route.params.teamSubView
    },
    teamSubViewComponent() {
      if (this.teamSubView == 'projects') return TeamProjectsView
      if (this.teamSubView == 'profile') return TeamProfileView
      return null
    }
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
