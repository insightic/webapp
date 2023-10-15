<template>
  <BasicLayout>
    <div class="container p-3 mb-5">
      <h1>Submission</h1>
      <div class="text-secondary">Submission Details</div>

      <ul class="nav nav-pills my-3">
        <li class="nav-item">
          <div class="nav-link" :class="{ active: subViewIdx == 0 }" @click="subViewIdx = 0">
            Details
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="{ active: subViewIdx == 1 }" @click="subViewIdx = 1">
            Assessment
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="{ active: subViewIdx == 2 }" @click="subViewIdx = 2">
            Code Validation
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="{ active: subViewIdx == 3 }" @click="subViewIdx = 3">
            Dashboard
          </div>
        </li>
      </ul>
      <hr />
      <div>
        <component :is="activeSubView"></component>
      </div>
    </div>
  </BasicLayout>
</template>

<script lang="ts">
import { toRaw, type Component } from 'vue'
import BasicLayout from '@/layouts/BasicLayout.vue'
import SubmissionDetailsView from '@/views/submissionSubViews/SubmissionDetailsView.vue'
import SubmissionCodeValidationView from '@/views/submissionSubViews/SubmissionCodeValidationView.vue'
import ApplicationAutoAssessmentView from './applicationSubViews/ApplicationAutoAssessmentView_Backup.vue'
import SubmissionDashboard from '@/views/submissionSubViews/SubmissionDashboard.vue'

export default {
  components: {
    BasicLayout
  },
  data() {
    return {
      subViewIdx: 0,
      subViews: [
        SubmissionDetailsView,
        ApplicationAutoAssessmentView,
        SubmissionCodeValidationView,
        SubmissionDashboard
      ]
    }
  },
  computed: {
    activeSubView(): Component {
      return toRaw(this.subViews[this.subViewIdx])
    }
  }
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
