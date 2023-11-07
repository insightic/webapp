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
        <div v-if="(activeSubView && submission) || subViewIdx == subViews.length - 1">
          <component
            :is="activeSubView"
            :submission="submission"
            :application="application"
          ></component>
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
import SmartContractValidatorView from '@/views/applicationSubViews/SmartContractValidatorView.vue'
import CompanyProfileView from '@/views/applicationSubViews/CompanyProfileView.vue'
import MySubmissionsView from '@/views/applicationSubViews/MySubmissionsView.vue'

import ScoreBoard from '../components/dashboard/ScoreBoardComponent.vue'
import CompanyInfo from '@/components/dashboard/CompanyInfoComponent.vue'
import { formatDate } from '@/helpers'
import { getApplication, type Application, type Submission } from '@/api'

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
          component: null
        },
        {
          name: 'My Submissions',
          icon: 'bi-collection',
          component: MySubmissionsView
        }
      ],
      application: null as Application | null,
      submission: null as Submission | null
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
