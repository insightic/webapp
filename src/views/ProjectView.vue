<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-3">
      <h5 class="mb-4">Project</h5>

      <SideBarButtonComponent
        v-for="(subView, idx) in subViews"
        :key="idx"
        :name="subView.name"
        :icon="subView.icon"
        :selected="projectSubView == subView.name.toLocaleLowerCase()"
        @click="clickSideBar(subView.name.toLocaleLowerCase())"
      />

      <hr style="color: rgba(0, 0, 0, 0.2)" />

      <button type="button" class="mt-3 w-100 btn btn-outline-danger">Logout</button>
    </div>
    <div class="flex-grow-1 p-3">
      <component
        :is="subViews.filter((v) => v.name.toLocaleLowerCase() == projectSubView)[0].component"
      />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'
import ProjectDetailsView from '@/views/projectSubViews/ProjectDetailsView.vue'
import ProjectSourceCodeView from '@/views/projectSubViews/ProjectSourceCodeView.vue'
import ProjectValidationsView from '@/views/projectSubViews/ProjectValidationsView.vue'

export default {
  components: {
    NavBar,
    SideBarButtonComponent,
    ProjectDetailsView,
    ProjectSourceCodeView,
    ProjectValidationsView
  },
  created() {
    if (!this.projectSubView) this.$router.replace(`/projects/${this.projectID}/details`)
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
        },
      ]
    }
  },
  computed: {
    projectID() {
      return 1
    },
    projectSubView() {
      return this.$route.params.projectSubView
    }
  },
  methods: {
    clickSideBar(subView: string) {
      this.$router.push(`/projects/${this.projectID}/${subView}`)
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
</style>
