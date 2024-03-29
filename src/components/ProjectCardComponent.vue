<template>
  <div class="m-3 project-card p-3">
    <div v-if="project" @click="click(project!.ID)">
      <div class="d-flex">
        <h4 class="align-self-center">{{ project!.Name }}</h4>
        <div class="flex-grow-1"></div>
        <div class="align-self-center project-status rounded">Pending</div>
      </div>

      <div class="my-3">
        <div style="font-size: 0.9rem">Created On</div>
        <div class="text-secondary" style="font-size: 0.8rem">
          {{ formatDateTime(project!.CreatedAt) }}
        </div>
      </div>

      <div class="my-3">
        <div style="font-size: 0.9rem">Last Updated On</div>
        <div class="text-secondary" style="font-size: 0.8rem">
          {{ formatDateTime(project!.UpdatedAt) }}
        </div>
      </div>

      <div class="project-image my-3 w-100 rounded"></div>

      <div class="text-secondary mt-3" style="font-size: 0.8rem">
        <div class="row">
          <div class="col-6">File Count: 80</div>
          <div class="col-6">Open Issues: 80</div>
        </div>
      </div>

      <button
        type="button"
        @click.stop="deleteProject(project!.ID)"
        class="btn mt-3 btn-outline-danger mx-auto w-100"
      >
        Delete
      </button>
    </div>

    <div v-else class="text-center" @click="toCreateProject">
      <div class="my-5">
        <i class="bi bi-plus-lg" style="font-size: 6rem"></i>
      </div>

      <button type="button" class="btn btn-outline-primary my-3 mx-auto">CREATE PROJECT</button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers'
import type { PropType } from 'vue'
import { deleteApplication, type ProjectContent as Project } from '@/api'

export default {
  props: {
    project: { type: Object as PropType<Project> },
    isAdmin: { type: Boolean, default: false }
  },
  methods: {
    formatDateTime,
    toCreateProject() {
      this.$router.push('/?tab=CreateProject')
    },
    click(projectID: number) {
      if (this.isAdmin) this.$router.push(`/admin/projects/${projectID}`)
      else this.$router.push(`/projects/${projectID}`)
    },
    async deleteProject(projectID: number) {
      if (confirm('Are you sure to delete this project?') == false) {
        return
      } else {
        const res = await deleteApplication(projectID)
        this.$emit('refresh')
      }
    }
  }
}
</script>

<style scoped>
.project-card {
  cursor: pointer;
  width: 296px;
  border: 1px solid #00000022;
  border-radius: 5px;
}

.project-card:hover {
  width: 296px;
  background-color: #00000005;
  border: 1px solid #00000022;
  border-radius: 5px;
}

.project-status {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  background-color: #00000022;
}

.project-image {
  aspect-ratio: 16/9;
  background-image: url('/project-image.jpg');
  background-size: cover;
}
</style>
