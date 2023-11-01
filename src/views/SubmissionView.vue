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
        <li class="nav-item" v-for="(item, idx) in subViews" :key="idx">
          <div
            class="nav-link"
            :class="{ active: subViewIdx == idx }"
            @click="subViewIdx = idx"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
      <hr />
      <div v-if="activeSubView">
        <component :is="activeSubView"></component>
      </div>
    </div>
  </BasicLayout>
</template>

<script lang="ts">
import { toRaw } from 'vue'
import BasicLayout from '@/layouts/BasicLayout.vue'
import SubmissionDashboard from '@/views/submissionSubViews/SubmissionDashboard.vue'
import CompanyProfile from '@/views/submissionSubViews/CompanyProfile.vue'
import SubmissionCodeValidationView from '@/views/submissionSubViews/SubmissionCodeValidationView.vue'
import ApplicationAutoAssessmentView from './submissionSubViews/ApplicationAutoAssessmentView_Backup.vue'
import ScoreBoard from '../components/dashboard/ScoreBoardComponent.vue'
import CompanyInfo from '@/components/dashboard/CompanyInfoComponent.vue'

export default {
  components: {
    BasicLayout,
    ScoreBoard,
    CompanyInfo,
    CompanyProfile
  },
  data() {
    return {
      subViewIdx: 0,
      subViews: [
        {name: 'Overview', component: SubmissionDashboard},
        {name: 'Company Profile', component: CompanyProfile},
        {name: 'Change Log', component: ApplicationAutoAssessmentView},
        {name: 'Communication', component: SubmissionCodeValidationView},
        {name: 'Feedback', component: null},
        {name: 'Alerts', component: null},
        {name: 'Report', component: null}
      ]
    }
  },
  computed: {
    activeSubView() {
      return toRaw(this.subViews[this.subViewIdx].component)
    }
  }
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
