<template>
  <div class="d-flex org">
    <div class="h-100 org-sidebar">
      <div class="container">
        <div class="mt-3" style="color: rgba(39, 50, 131); font-size: 1.2rem">Projects</div>

        <form class="form-inline my-2">
          <input class="form-control" type="search" placeholder="Search..." aria-label="Search" />
        </form>

        <ProjectSidebarItem
          v-for="project in projects"
          :key="project.guid"
          :guid="project.guid"
          :name="project.name"
          :logo="project.logo"
          :highlighted="project.guid == selectedProjectGuid"
          @click="selectedProjectGuid = project.guid"
        />
      </div>
    </div>
    <div class="h-100 w-100 org-main">
      <div class="container-fluid">
        <ProjectDetailsView v-if="selectedProjectGuid" />
        <div v-else>Select a project to start!</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProjectSidebarItem from '@/components/ProjectSidebarItem.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

export default {
  components: {
    ProjectSidebarItem,
    ProjectDetailsView
  },
  data() {
    return {
      selectedProjectGuid: ''
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    projects() {
      const organizationGuid = (this.$route.params.organizationGuid as string) || ''
      const organization = this.organizationsStore.organizations.find(
        (org) => org.guid === organizationGuid
      )
      if (organization) return organization.projects
      return []
    }
  }
}
</script>

<style scoped>
.org {
  height: calc(100vh - 56px);
}

.org-sidebar {
  width: 300px;
  border-right: 1px solid #e0e0e0;
}
.org-main {
  overflow-y: auto;
  background-color: white;
}
</style>
