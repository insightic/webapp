<template>
  <BasicLayout>
    <nav class="navbar navbar-expand">
      <div class="tabNav container-xl">
        <ul class="navbar-nav flex-row">
          <li
            class="nav-item"
            v-for="(item, idx) in subViews"
            :key="idx"
            :class="{ active: idx == subViewIdx }"
            @click="subViewIdx = idx"
          >
            <a class="nav-link">
              <span class="nav-link-icon">
                <i class="bi" :class="item.icon"></i>
              </span>
              <span
                class="nav-link-title d-md-inline-block"
                :class="{ 'd-none': idx != subViewIdx }"
              >
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-xl py-3">
      <div class="page-pretitle">Last update at {{ formatDate(new Date()) }}</div>
      <h1>{{ subViews[subViewIdx].name }}</h1>
      <div v-if="!loading">
        <div v-if="activeSubView">
          <component :is="activeSubView" :submission="submission"></component>
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
        { name: 'Dashboard', icon: 'bi-graph-up-arrow', component: SubmissionDashboard },
        {
          name: 'Smart Contract Validator',
          icon: 'bi-code-square',
          component: SubmissionDashboard
        },
        { name: 'Company Profile', icon: 'bi-kanban', component: CompanyProfile },
        { name: 'Change Log', icon: 'bi-collection', component: SubmissionDashboard },
        { name: 'Alerts', icon: 'bi-exclamation-circle', component: SubmissionCodeValidationView }
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
  /* white-space: nowrap; */
}

.hide-sm {
  display: none;
}

@media (min-width: 768px) {
  .hide-sm {
    display: unset;
  }
}
</style>
