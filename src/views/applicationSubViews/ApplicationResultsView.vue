<template>
  <div class="text-secondary mb-4">Showing all applications</div>

  <div style="max-width: 960px">
    <div class="card w-100">
      <div class="card-header">
        <b>{{ applications.length }} applications</b>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="application in applications" :key="application.ID">
          <ApplicationComponent :status="application.Status" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationComponent from '@/components/ApplicationComponent.vue'

export default {
  components: {
    ApplicationComponent
  },
  data() {
    return {
      applications: [
        {
          ID: 0,
          Status: 'approved'
        },
        {
          ID: 1,
          Status: 'pending'
        },
        {
          ID: 2,
          Status: 'pending'
        },
        {
          ID: 3,
          Status: 'rejected'
        }
      ]
    }
  }
}
</script>
