<template>
  <div class="container-fluid p-3 mb-5" style="max-width: 1440px">
    <div class="row" v-if="!loading">
      <div class="d-block d-lg-none">
        <LabelSelectComponent
          label="Choose Form"
          description="Please choose the form here"
          :options="optionName"
          @change="changePageBySelect"
        />
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <div v-for="(form, index) in tabs" :key="index">
          <div @click="changePage(index)" class="nav-item" :class="formStepStyle(index)">
            <div class="d-flex align-items-center">
              <i class="bi bi-check-circle-fill me-3" v-if="hasData(index) || current == index"></i>
              <i class="bi bi-check-circle me-3" v-else></i>
              <div>
                {{ form.name }}
              </div>
            </div>
            <div
              v-if="index + 1 != tabs.length"
              style="height: 20px; border-left: 1px gray solid; margin-left: 7px"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-lg-10 col-sm-12">
        <div>
          <keep-alive>
            <component
              :is="toRaw(tabs[current].component)"
              :data="application[tabs[current].name]"
              :disabled="true"
            ></component>
          </keep-alive>
        </div>
      </div>
    </div>
    <div v-if="loading" class="text-center w-100 my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import FormNavButtons from '@/components/FormNavButtons.vue'
import RegistrationAgreement from '../forms/RegistrationAgreementForm.vue'
import ComplianceTeam from '../forms/ComplianceTeamForm.vue'
import Legal from '../forms/LegalForm.vue'
import Overview from '../forms/OverviewForm.vue'
import ProjectDetails from '../forms/ProjectDetailsForm.vue'
import TechnicalDetails from '../forms/TechnicalDetailsForm.vue'
import RiskManagement from '../forms/RiskManagementForm.vue'
import VolumeCommunity from '../forms/VolumeCommunityForm.vue'
import Acknowledgement from '../forms/AcknowledgementForm.vue'
import Competitiveness from '../forms/CompetitivenessForm.vue'
import Investors from '../forms/InvestorForm.vue'
import { createApplication, createSubmission, updateSubmission } from '@/api'
import { toRaw } from 'vue'

export default {
  components: {
    NavFooterLayout,
    FormNavButtons,
    LabelSelectComponent
  },
  props: ['submission'],
  mounted() {},
  data() {
    return {
      loading: true,
      current: 0,
      currentTab: 'Overview',
      tabs: [
        { name: 'Overview', component: Overview },
        { name: 'Registration Agreement', component: RegistrationAgreement },
        { name: 'Compliance & Team', component: ComplianceTeam },
        { name: 'Legal', component: Legal },
        { name: 'Project Details', component: ProjectDetails },
        { name: 'Technical Details', component: TechnicalDetails },
        { name: 'Risk Management', component: RiskManagement },
        { name: 'Volume & Community', component: VolumeCommunity },
        { name: 'Acknowledgement', component: Acknowledgement },
        { name: 'Competitiveness', component: Competitiveness },
        { name: 'Investors', component: Investors }
      ],
      application: {} as { [key: string]: any },
      applicationID: this.$route.params?.applicationID?.toString() || '',
      submissionID: this.$route.params?.submissionID?.toString() || '',
      optionName: [
        'Overview',
        'Registration Agreement',
        'Compliance & Team',
        'Legal',
        'Project Details',
        'Technical Details',
        'Risk Management',
        'Volume & Community',
        'Acknowledgement',
        'Competitiveness',
        'Investors'
      ]
    }
  },
  async created() {
    this.application = this.submission.Content
    this.loading = false
  },
  methods: {
    toRaw: toRaw,
    formStepStyle(index: number) {
      if (this.current == index) return 'text-primary'
      return 'text-secondary'
    },
    changePage(index: number) {
      if (this.hasData(index)) {
        this.current = index
      }
    },
    changePageBySelect(e: any) {
      const index = this.optionName.findIndex((tab) => tab === e.target.value)
      this.current = index
    },
    hasData(idx: number): boolean {
      const tabName = this.tabs[idx].name
      return this.application[tabName] != null
    },
    async newOrSaveDraft(data: any): Promise<boolean> {
      const tabName = this.tabs[this.current].name
      this.application[tabName] = data
      this.application['Name'] = this.application['Overview']['Name']
      this.application['OneLiner'] = this.application['Overview']['OneLiner']
      this.application['Website'] = this.application['Overview']['Website']

      let applicationID = this.applicationID
      let submissionID = this.submissionID
      if (!applicationID) {
        const res = await createApplication()
        if (!res) {
          alert('Error creating application')
          return false
        }
        applicationID = res.ID
        this.applicationID = res.ID
        this.$router.push({ query: { applicationID } })
      }

      if (!submissionID) {
        const res = await createSubmission(applicationID, this.application)
        if (!res) {
          alert('Error creating submission')
          return false
        }
        submissionID = res.SubmissionID
        this.submissionID = res.SubmissionID
        this.$router.push({ query: { applicationID, submissionID } })
      }

      const res = await updateSubmission(applicationID, submissionID, this.application)
      if (!res) {
        alert('Error updating submission')
        return false
      }

      return true
    }
  }
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}

.dot {
  width: 16px;
  height: 16px;
}
</style>
