<template>
  <div class="d-flex org">
    <div class="h-100 org-sidebar">
      <div class="container">
        <div class="mt-3" style="color: rgba(39, 50, 131); font-size: 1.2rem">Projects</div>

        <form class="form-inline my-2">
          <input
            class="form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            v-model="searchValue"
          />
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
      <div v-if="selectedProjectGuid" class="container-fluid">
        <ProjectDetailsView
          :organization-guid="organizationGuid"
          :project-guid="selectedProjectGuid"
        />
      </div>
      <div v-else class="h-100 w-100">
        <div style="text-align: center; margin-top: 15%">
          <div style="font-size: 4rem; color: red">
            <img
              src="/logo-full.png"
              style="width: 256px; filter: grayscale(100%); opacity: 0.3"
            />
          </div>
          <div style="width: 100%; max-width: 320px; color: rgba(0, 0, 0, 0.5)" class="mx-auto">
            AI-Powered Regulatory Assessment Solution for Digital Asset Innovation
          </div>
        </div>
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
      searchValue: '',
      selectedProjectGuid: ''
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    organizationGuid() {
      return this.$route.params.organizationGuid as string
    },
    projects() {
      const organization = this.organizationsStore.findOrganization(this.organizationGuid)
      if (!organization) return []
      if (!this.searchValue) return organization.projects
      const searchValue = this.searchValue.toLowerCase()
      return organization.projects.filter((project) =>
        project.name.toLowerCase().includes(searchValue)
      )
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
