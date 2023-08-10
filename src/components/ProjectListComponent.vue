<template>
  <div class="project d-flex my-1 mx-1 p-2 flex-row align-items-center" :class="isHeader ? 'header': ''" @click="click($.vnode.key! as number)">

      <div class="col col-3 d-flex align-items-center">
        <span v-if="!isHeader" class="me-3">{{ counter }}.</span>
        <!-- <img v-show="!isHeader" :src="icon" class="logo h-8 w-8 me-3" /> -->
        <div> {{ isHeader ? 'Project Name' : project!.Name }} 
            <i v-show="sortBy=='name'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
        </div>
      </div>
      <div class="col col-3 small" :class="isHeader ? '': 'text-secondary'"> 
        {{ isHeader ? 'Last Updated On' : formatDateTime(project!.UpdatedAt) }} 
        <i v-show="sortBy=='modifiedAt'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
      </div>
      <div class="col col-3 small" :class="isHeader ? '': 'text-secondary'"> 
        {{ isHeader ? 'Created On' : formatDateTime(project!.CreatedAt) }} 
        <i v-show="sortBy=='createdAt'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
      </div>

      <div class="col col-1 small" :class="isHeader ? '': 'text-secondary'"> 
        {{ isHeader ? 'Status' : 'Pending' }} 
        <i v-show="sortBy=='desc'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
      </div>

      <!-- vertical dots button -->
      <div class="col col-1 small d-flex" :class="isHeader ? '': 'text-secondary'"> 
        <button v-if="!isHeader" type="button" @click.stop="click(project!.ID)" class="btn btn-outline-primary m-0 p-1 me-2">View</button>
        <button v-if="!isHeader" type="button" @click.stop="deleteProject(project!.ID)" class="btn btn-outline-danger m-0 p-1">Delete</button>
        <!-- <i class="bi bi-three-dots-vertical actions" @click.stop=""></i> -->
      </div>
        

      
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers';
import type { PropType } from 'vue'
import { deleteProject, type ProjectContent as Project } from "@/api"


export default {
  props: {
    project: { type: Object as PropType<Project> },
    isAdmin: { type: Boolean, default: false },
    isHeader: { type: Boolean },
    isAsc: { type: Boolean },
    sortBy: { type: String },
    icon: { type: String },
    counter: { type: Number },
  },
  methods: {
    formatDateTime,
    toCreateProject() {
      this.$router.push('/?tab=CreateProject' )
    },
    click(projectID: number) {
      if (this.isAdmin) this.$router.push(`/admin/projects/${projectID}`)
      else this.$router.push(`/projects/${projectID}`)
    },
    async deleteProject(projectID: number) {
      if (confirm('Are you sure to delete this project?') == false) {
        return
      } else {
        const res = await deleteProject(projectID)
        this.$emit('refresh')
      }
    }
  },
  computed: {
    bold() {
      return this.isHeader ? '600' : '400';
    }
  }
}
</script>

<style scoped>
.project:hover {
  cursor: pointer;
}

.header {
font-weight: 600;
color: #000000;
border: none
}

.header > .col:hover {
cursor: pointer;
background-color: #e2e2e205;
}

.logo {
  width: 32px;
  height: 32px;
}

.actions:hover {
  cursor: pointer;
}
</style>
