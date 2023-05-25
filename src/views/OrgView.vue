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
          :name="project.name"
          :guid="project.guid"
          :highlighted="project.guid == selectedProjectGuid"
        />
      </div>
    </div>
    <div class="h-100 w-100 org-main">
      <div class="container-fluid">
        <ProjectDetailsView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProjectSidebarItem from '@/components/ProjectSidebarItem.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'

export default {
  components: {
    ProjectSidebarItem,
    ProjectDetailsView
  },
  data() {
    return {
      selectedProjectGuid: '123',
      projects: [
        {
          name: 'Wolf Game',
          guid: '123',
          highlighted: true
        },
        {
          name: 'Pool Together',
          guid: '456'
        },
        {
          name: 'Olympus',
          guid: '789'
        },
        {
          name: 'Euler Finance',
          guid: '101112'
        }
      ]
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
  /* background-color: red; */
  border-right: 1px solid #e0e0e0;
}
.org-main {
  /* background-color: blue; */
  overflow-y: auto;
  background-color: white;
}
</style>
