<template>
  <div class="d-flex justify-content-between align-items-center my-2">
    <div class="text-secondary">Showing all applications</div>
    <RouterLink class="btn btn-primary" to="/create-application">New Application</RouterLink>
  </div>

  <div class="w-100" style="overflow-x: auto">
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th scope="col" style="width: 40%">Project Name</th>
          <th scope="col" style="width: 10%">Updated At</th>
          <th scope="col" style="width: 10%">Created At</th>
          <th scope="col" style="width: 8%">Status</th>
          <th scope="col" style="width: 12%; min-width: 200px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in applications" :key="application.ID">
          <td>{{ getSubmission(application).Content.Name }}</td>
          <td>{{ formatDate(getSubmission(application).SubmissionAt) }}</td>
          <td>{{ formatDate(getSubmission(application).SubmissionAt) }}</td>
          <td>{{ 'Pending' }}</td>
          <td>
            <a
              class="btn btn-sm btn-outline-primary mx-2"
              type="button"
              :href="'/projects/' + application.ID"
              >View</a
            >
            <a class="btn btn-sm btn-outline-danger mx-2" type="button">Withdraw</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'
import { getProjects, type Application, type Submission } from '@/api'
import { formatDate } from '@/helpers'

export default {
  components: {
    RouterLink
  },
  async created() {
    this.applications = await getProjects()
  },
  data() {
    return {
      applications: [] as Application[]
    }
  },
  computed: {
    ...mapStores(projectsStore)
  },
  methods: {
    formatDate,
    createProject() {
      this.$router.push({ query: { view: 'Create Project' } })
    },
    getSubmission(application: Application): Submission {
      return application.Submissions.slice(-1)[0]
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
