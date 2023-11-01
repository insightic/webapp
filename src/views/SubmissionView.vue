<template>
  <BasicLayout>
    <div class="container p-3 mb-5">
      <h1>Submission</h1>
      <div class="text-secondary">Submission Details</div>
      <div class="container">
        <div class="row">
          <div class="col">
            <CompanyInfo></CompanyInfo>
          </div>
          <div class="col">
            <ScoreBoard></ScoreBoard>
          </div>
        </div>
      </div>
      <ul class="nav nav-pills my-3">
        <li class="nav-item" v-for="(item, index) in topBarName">
          <div
            class="nav-link"
            :class="{ active: subViewIdx == index }"
            @click="subViewIdx = index"
          >
            {{ item }}
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
import SubmissionDashboard from '@/views/submissionSubViews/SubmissionDashboard.vue'
import SubmissionCodeValidationView from '@/views/submissionSubViews/SubmissionCodeValidationView.vue'
import ApplicationAutoAssessmentView from './submissionSubViews/ApplicationAutoAssessmentView_Backup.vue'
import ScoreBoard from '../components/dashboard/ScoreBoardComponent.vue'
import CompanyInfo from '@/components/dashboard/CompanyInfoComponent.vue'

export default {
  components: {
    BasicLayout,
    ScoreBoard,
    CompanyInfo
  },
  data() {
    return {
      subViewIdx: 0,
      subViews: [SubmissionDashboard, ApplicationAutoAssessmentView, SubmissionCodeValidationView],
      topBarName: [
        'Overview',
        'Company Profile',
        'Change Log',
        'Communication',
        'Feedback',
        'Alerts',
        'Report'
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
