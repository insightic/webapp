<template>
  <div class="w-100" style="max-width: 960px">
    <div class="d-flex justify-content-between align-items-center my-2">
      <div class="text-secondary">Showing all applications</div>
      <RouterLink class="btn btn-primary" to="/create-application">New Application</RouterLink>
    </div>

    <div v-if="isloading" class="w-100 d-flex justify-content-center mt-5">
      <div class="spinner-border"></div>
    </div>

    <div v-else class="w-100" style="overflow-x: auto">
      <div class="card w-100">
        <div class="card-header"><b>My Applications</b></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="application in applications" :key="application.ID">
            <AccountApplicationComponent
              :name="application.ApplicationName"
              :logo-url="application.LogoURL"
              :one-liner="application.OneLiner"
              :website="application.Website"
              :created-at="application.CreatedAt"
              :updated-at="application.UpdatedAt"
              @view="() => $router.push('/applications/' + application.ApplicationID)"
              @delete="() => deleteApplication(application.ApplicationID)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'
import {
  getApplications,
  deleteApplication,
  type Application,
  type Submission,
  type Applications
} from '@/api'
import { formatDate } from '@/helpers'
import AccountApplicationComponent from '@/components/AccountApplicationComponent.vue'

export default {
  components: {
    RouterLink,
    AccountApplicationComponent
  },
  async created() {
    this.applications = await getApplications()
    this.isloading = false
  },
  data() {
    return {
      applications: [] as Applications[] | null,
      isloading: true
    }
  },
  computed: {
    ...mapStores(projectsStore)
  },
  methods: {
    formatDate,
    getSubmission(application: Application): Submission {
      return application.Submissions.slice(-1)[0]
    },
    async deleteApplication(id: string) {
      if (confirm('Are you sure to delete this project?') == false) {
        return
      } else {
        await deleteApplication(id)
        location.reload()
      }
    }
  }
}
</script>

<style scoped>
th,
tr {
  vertical-align: middle;
}
</style>
