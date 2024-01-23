<template>
  <BasicLayout>
    <nav class="navbar navbar-expand" style="position: absolute; left: 0; right: 0; z-index: 1000">
      <div class="container-xl">
        <ul class="navbar-nav flex-row subNav">
          <li
            class="nav-item"
            v-for="(item, idx) in subViews"
            :key="idx"
            :class="{ active: idx == subViewIdx }"
            @click="subViewIdx = idx"
          >
            <a v-if="isVissible(item)" class="nav-link">
              <span class="nav-link-icon" :class="{ 'text-secondary': idx != subViewIdx }">
                <i class="bi" :class="item.icon"></i>
              </span>
              <span
                class="nav-link-title d-lg-inline-block"
                :class="{ 'd-none': idx != subViewIdx, 'text-secondary': idx != subViewIdx }"
                style="white-space: nowrap"
              >
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-xl py-3" style="margin-top: 56px">
      <div class="page-pretitle">Last update at {{ formatDate(new Date()) }}</div>
      <h1>{{ subViews[subViewIdx].name }}</h1>
      <div v-if="!loading">
        <div v-if="(activeSubView && submission) || subViewIdx == subViews.length - 1">
          <component
            :is="activeSubView"
            :submission="submission"
            :application="application"
            :jobResults="jobResults"
          >
          </component>
        </div>

        <div v-else>
          <div class="my-5 text-center w-100">
            <div class="empty-title">No active submission found</div>
            <div class="empty-subtitle text-secondary">Try to create a new submission</div>
            <div class="empty-action">
              <a href="./." class="btn btn-primary">
                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
                Create your first submission
              </a>
            </div>
          </div>
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

import DashboardView from '@/views/applicationSubViews/DashboardView.vue'
import SocialMediaAnalysis from '@/views/applicationSubViews/SocialMediaAnalysis.vue'
import StableCoin from './applicationSubViews/StableCoinView.vue'
import SmartContractValidatorView from '@/views/applicationSubViews/SmartContractValidatorView.vue'
import CompanyProfileView from '@/views/applicationSubViews/CompanyProfileView.vue'
import AlertView from '@/views/applicationSubViews/AlertView.vue'
import MySubmissionsView from '@/views/applicationSubViews/MySubmissionsView.vue'

import ScoreBoard from '../components/dashboard/ScoreBoardComponent.vue'
import CompanyInfo from '@/components/dashboard/CompanyInfoComponent.vue'
import { formatDate } from '@/helpers'
import { getApplication, getJobResults, type Application, type Submission } from '@/api'

export default {
  components: {
    BasicLayout,
    ScoreBoard,
    CompanyInfo
  },
  data() {
    return {
      loading: true,
      subViewIdx: 0,
      subViews: [
        {
          name: 'Dashboard',
          icon: 'bi-graph-up-arrow',
          component: DashboardView
        },
        {
          name: 'Social Media Analysis',
          icon: 'bi-globe2',
          component: SocialMediaAnalysis,
          resultKey: 'social'
        },
        {
          name: 'Stable Coin',
          icon: 'bi-arrow-left-right',
          component: StableCoin
        },
        {
          name: 'Smart Contract Validator',
          icon: 'bi-code-square',
          component: SmartContractValidatorView
        },
        {
          name: 'Company Profile',
          icon: 'bi-kanban',
          component: CompanyProfileView
        },
        {
          name: 'Alerts',
          icon: 'bi-exclamation-circle',
          component: AlertView
        },
        {
          name: 'My Submissions',
          icon: 'bi-collection',
          component: MySubmissionsView
        }
      ],
      application: null as Application | null,
      submission: null as Submission | null,
      jobResults: null as any | null
    }
  },
  async created() {
    const applicationID = this.$route.params.applicationID as string
    const resp = await getApplication(applicationID)
    if (!resp) {
      alert('Error loading application')
      return
    }
    this.application = resp
    this.submission = resp.Submissions.filter((s) => s.Status == 'active')[0]

    this.jobResults = await getJobResults(applicationID, this.submission.SubmissionID)
    this.loading = false
  },
  computed: {
    activeSubView() {
      return toRaw(this.subViews[this.subViewIdx].component)
    }
  },
  methods: {
    formatDate,
    isVissible(subView: any): boolean {
      if (!subView.resultKey) return true
      if (!this.jobResults) return false
      const result = this.jobResults.filter((r: any) => r.job_name == subView.resultKey)[0]
      return result != null && result != undefined
    }
  }
}
</script>

<style scoped>
.active {
  border-bottom: 1px solid var(--tblr-linkedin);
}

.subNav {
  overflow-x: auto;
  overflow-y: hidden;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.subNav::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.subNav {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.nav-link {
  cursor: pointer;
}
</style>
