<template>
  <BasicLayout>
    <div class="container p-3 mb-5">
      <h1>Application Dashboard</h1>
      <div class="text-secondary">Last update at {{ formatDate(new Date()) }}</div>

      <div v-if="!loading" class="container">
        <div>
          <div class="row">
            <div class="col-6 d-flex">
              <div>
                <CompanyInfo
                  :name="submission?.Content?.Name"
                  :website="submission?.Content?.Website"
                  :one-liner="submission?.Content?.OneLiner"
                />
              </div>
            </div>
            <div class="col-6 d-flex">
              <div class="ms-auto">
                <ScoreBoard :Grade="'B+'" :NowData="'85'" :PreviousData="'80'" :ChangeData="'+5'" />
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
        </div>

        <hr />
        <div v-if="activeSubView">
          <component :is="activeSubView"></component>
        </div>
      </div>
      <div v-if="loading" class="container text-center">
        <div class="spinner-border my-5" role="status"></div>
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
import { formatDate } from '@/helpers'
import { getApplication, type Submission } from '@/api'

export default {
  components: {
    BasicLayout,
    ScoreBoard,
    CompanyInfo,
    CompanyProfile
  },
  data() {
    return {
      loading: true,
      subViewIdx: 0,
      subViews: [
        { name: 'Overview', component: SubmissionDashboard },
        { name: 'Company Profile', component: CompanyProfile },
        { name: 'Change Log', component: ApplicationAutoAssessmentView },
        { name: 'Communication', component: SubmissionCodeValidationView },
        { name: 'Feedback', component: null },
        { name: 'Alerts', component: null },
        { name: 'Report', component: null }
      ],
      submission: null as Submission | null
    }
  },
  async created() {
    const applicationID = this.$route.params.applicationID as string
    const submissionID = this.$route.params.submissionID as string
    const resp = await getApplication(applicationID)
    if (!resp) {
      alert('Error loading application')
      return
    }
    this.submission = resp.Submissions.filter((s) => s.SubmissionID == submissionID)[0]
    this.loading = false
  },
  computed: {
    activeSubView() {
      return toRaw(this.subViews[this.subViewIdx].component)
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
