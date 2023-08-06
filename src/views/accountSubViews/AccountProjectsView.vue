<template>
  <div class="text-secondary mb-4">Showing all projects</div>

  <div class="d-flex flex-wrap">
    <ProjectCardComponent @click="createProject()" />
    <ProjectCardComponent v-for="project in projects" :key="project.ID" :project="project.Content" @refresh="refresh"/>
  </div>
</template>

<script lang="ts">
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'
import { getProjects, type Project } from '@/api'

export default {
  components: {
    ProjectCardComponent
  },
  async created() {
    // await projectsStore().getProjects()
    this.projects = await getProjects()
    console.log('hii',this.projects)
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
