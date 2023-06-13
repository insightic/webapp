<template>
  <div class="d-flex org">

    <div class="sideIcon" >
      <div class="h-100 org-sidebar" >
        <div class="container sidebar-container">
          <div class="sidenav-btn mt-3 mb-5 fs-6" @click="create=!create">Create Project</div>
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
            @click="selectedProjectGuid = project.guid; create = false"
          />
        </div>
      </div>
      <div class="openbtn">
        <button class="toggleBtn" @click="toggleSidebar">
          <i v-if="sideWidth == '0px'" class="bi bi-chevron-double-right"></i>
          <i v-else class="bi bi-chevron-double-left"></i>
        </button>
      </div>
    </div>
    <div class="h-100 w-100 org-main">
      <div v-if="create" class="container-fluid">
        <CreateProjectView />
      </div>
      <div v-else-if="selectedProjectGuid" class="container-fluid">
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
import CreateProjectView from '@/views/createProjectView.vue'

export default {
  components: {
    ProjectSidebarItem,
    ProjectDetailsView,
    CreateProjectView
  },
  data() {
    return {
      searchValue: '',
      selectedProjectGuid: '',
      sideWidth: '0px',
      create: true
    }
  },
  methods: {
    toggleSidebar() {
      this.sideWidth = this.sideWidth === '0px' ? '250px' : '0px'
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

.sideIcon {
  /* width: v-bind('sideWidth'); */
  transition: width 0.5s;
}

.openbtn {
  display: block;
  position: fixed;
  top: 50%;
  margin-left: v-bind('sideWidth');
  transition: margin-left 0.5s;
}

.toggleBtn {
  background-color: #E9F2F8;
  color: rgba(39, 50, 131);
  font-size: 1.2rem;
  width: 20px;
  border-radius: 0px 5px 5px 0px; 
  padding: 0px;
}

.toggleBtn > i {
  font-size: 15px;
  margin: 0
}

.org-sidebar {
  width: v-bind('sideWidth');
  border-right: 1px solid #e0e0e0;
  transition: width 0.5s;
  background-color: #E9F2F8;
}
.org-main {
  overflow-y: auto;
  background-color: white;
}

.sidenav-btn {
  color: rgba(39, 50, 131);
  cursor: pointer;
}

@media (min-width: 576px) { 
  .openbtn {
    margin-left: v-bind('sideWidth');
  }
}

@media (min-width: 768px) { 
  .openbtn {
    display: none;
  }

  .org-sidebar {
    display: block;
    width: 250px;
  }
}

</style>
