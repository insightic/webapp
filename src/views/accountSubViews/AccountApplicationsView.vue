<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="text-secondary">Showing all applications</div>
    <button class="btn btn-primary" @click="createProject()">Create Project</button>
  </div>

  <div class="d-flex flex-wrap">
    <!-- <ProjectCardComponent @click="createProject()" /> -->
    <!-- <ProjectCardComponent v-for="project in projects" :key="project.ID" :project="project.Content" @refresh="refresh"/> -->
  </div>

    <!-- file list -->
    <div class="d-flex flex-column w-100">
      <ProjectListComponent :isHeader="true" :isAdmin="false"/>
      <ProjectListComponent v-for="(project, index) in projects" :key="project.ID" :project="project.Content" :isAdmin="false" :counter="index+1" @refresh="refresh"/>
    </div>
</template>

<script lang="ts">
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import ProjectListComponent from '@/components/ProjectListComponent.vue'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'
import { getProjects, type Project } from '@/api'

export default {
  components: {
    ProjectListComponent
  },
  async created() {
    // await projectsStore().getProjects()
    this.projects = await getProjects()
  },
  data() {
    return {
      projects: [] as Project[]
    }
  },
  computed: {
    ...mapStores(projectsStore),
    // projects() {
    //   // return Object.values(this.projectsStore.projects)
    //   return getProjects() as any as Project[]
    // },
  },
  methods: {
    createProject() {
      this.$router.push({ query: { view: 'Create Project' } })
    },
    refresh() {
      window.location.reload()
    }
  }
}
</script>
