<template>
  <div class="text-secondary mb-4">Showing runs from all validations</div>

  <div style="max-width: 960px">
    <div class="card w-100" style="width: 18rem">
      <div class="card-header"><b>{{ jobs.length }} validation runs</b></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="job in jobs" :key="job.ID">
          <ValidationComponent
            :total-rules="job.TotalRules"
            :tested-rules="job.TestedRules"
            :passed-rules="job.PassedRules"
            :created-at="job.CreatedAt"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ValidationComponent from '@/components/ValidationComponent.vue'

export default {
  components: {
    ValidationComponent
  },
  data() {
    return {
      jobs: [
        {
          ID: 3,
          TotalRules: 100,
          TestedRules: 100,
          PassedRules: 100,
          CreatedAt: '2023-03-21 10:21:10'
        },
        {
          ID: 2,
          TotalRules: 100,
          TestedRules: 100,
          PassedRules: 90,
          CreatedAt: '2023-03-20 10:21:10'
        },
        {
          ID: 1,
          TotalRules: 100,
          TestedRules: 100,
          PassedRules: 100,
          CreatedAt: '2023-03-19 10:21:10'
        },
        {
          ID: 4,
          TotalRules: 100,
          TestedRules: 100,
          PassedRules: 60,
          CreatedAt: '2023-03-20 10:21:10'
        },
        {
          ID: 5,
          TotalRules: 100,
          TestedRules: 50,
          PassedRules: 40,
          CreatedAt: '2023-03-20 10:21:10'
        },
      ]
    }
  }
}
</script>
