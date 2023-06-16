<template>
  <div class="d-flex flex-wrap">
    <ProjectCardComponent @click="createProject()" />
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
  async created() {
    await projectsStore().getProjects()
  },
  computed: {
    ...mapStores(projectsStore),
    projects() {
      return Object.values(this.projectsStore.projects)
    },
    organizationID(): string {
      return this.$route.params.organizationID as string
    }
  },
  methods: {
    createProject() {
      this.$router.push({ query: { tab: 'Create Project' } })
    }
  }
}
</script>
