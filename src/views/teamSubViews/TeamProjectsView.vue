<template>
  <h3>Projects</h3>

  <div class="d-flex flex-wrap">
    <ProjectCardComponent />
    <ProjectCardComponent v-for="project in projects" :key="project.ID" :project="project" />
  </div>
</template>

<script lang="ts">
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'

export default {
  components: {
    ProjectCardComponent
  },
  computed: {
    ...mapStores(projectsStore),
    projects() {
      return Object.values(this.projectsStore.projects)
    },
    teamID(): string {
      return this.$route.params.teamID as string
    }
  },
  async created() {
    if (!this.teamID) this.$router.replace(`/teams/${this.teamID}/projects`)
    await projectsStore().getProjects(this.teamID)
  }
}
</script>
