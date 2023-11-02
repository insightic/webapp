<template>
  <NavFooterLayout>
    <div class="container-fluid p-3 mb-5" style="max-width: 1440px">
      <h1 class="mb-4">
        <strong>New Application</strong>
      </h1>

      <div class="row" v-if="!loading">
        <div class="d-block d-lg-none">
          <LabelSelectComponent
            label="Choose Form"
            description="Please choose the form here"
            :options="optionName"
            v-model:field="tabs[current].name"
            @change="changePageBySelect"
          />
        </div>
        <div class="col-lg-2 d-none d-lg-block">
          <div v-for="(form, index) in tabs" :key="index">
            <div @click="changePage(index)" class="nav-item" :class="formStepStyle(index)">
              <div class="d-flex align-items-center">
                <i
                  class="bi bi-check-circle-fill me-3"
                  v-if="hasData(index) || current == index"
                ></i>
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
                @save="save"
                @next="next"
                :data="application[tabs[current].name]"
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
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import FormNavButtons from '@/components/FormNavButtons.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import RegistrationAgreement from './forms/RegistrationAgreementForm.vue'
import ComplianceTeam from './forms/ComplianceTeamForm.vue'
import Legal from './forms/LegalForm.vue'
import Overview from './forms/OverviewForm.vue'
import ProjectDetails from './forms/ProjectDetailsForm.vue'
// import DigitalAsset from './forms/DigitalAssetForm.vue'
import TechnicalDetails from './forms/TechnicalDetailsForm.vue'
import RiskManagement from './forms/RiskManagementForm.vue'
import VolumeCommunity from './forms/VolumeCommunityForm.vue'
import Acknowledgement from './forms/AcknowledgementForm.vue'
import Competitiveness from './forms/CompetitivenessForm.vue'
import Investors from './forms/InvestorForm.vue'
import COI from './forms/COIForm.vue'
import Confirmation from './forms/ConfirmationForm.vue'

import {
  getApplication,
  createApplication,
  createSubmission,
  updateSubmission,
  submitSubmissionDraft
} from '@/api'
import { toRaw } from 'vue'

export default {
  components: {
    NavFooterLayout,
    FormNavButtons,
    LabelSelectComponent
  },
  data() {
    return {
      loading: true,
      current: 0,
      pageFinishedNum: 0,
      currentTab: 'Overview',
      tabs: [
        { name: 'Overview', hasData: false, component: Overview },
        { name: 'Registration Agreement', hasData: false, component: RegistrationAgreement },
        { name: 'Compliance & Team', hasData: false, component: ComplianceTeam },
        { name: 'Legal', hasData: false, component: Legal },
        { name: 'ProjectDetails', hasData: false, component: ProjectDetails },
        { name: 'Technical Details', hasData: false, component: TechnicalDetails },
        { name: 'Risk Management', hasData: false, component: RiskManagement },
        { name: 'Volume & Community', hasData: false, component: VolumeCommunity },
        { name: 'Acknowledgement', hasData: false, component: Acknowledgement },
        { name: 'Competitiveness', hasData: false, component: Competitiveness },
        { name: 'Investors', hasData: false, component: Investors },
        { name: 'Conflict of Interest', hasData: false, component: COI },
        { name: 'Confirmation', hasData: false, component: Confirmation }
      ],
      application: {} as { [key: string]: any },
      optionName: ['Overview']
    }
  },
  async created() {
    if (this.applicationID() && this.submissionID()) {
      const resp = await getApplication(this.applicationID())
      if (resp) {
        this.application = resp.Submissions.filter(
          (res) => res.SubmissionID == this.submissionID()
        )[0]?.Content
      }
    }

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
    changePageBySelect() {
      const index = this.tabs.findIndex((tab) => tab.name === this.tabs[this.current].name)
      console.log(index)
      this.current = index
    },
    hasData(idx: number): boolean {
      const tabName = this.tabs[idx].name
      return this.application[tabName] != null
    },
    applicationID() {
      return this.$route.query.applicationID as string
    },
    submissionID() {
      return this.$route.query.submissionID as string
    },
    async newOrSaveDraft(data: any): Promise<boolean> {
      const tabName = this.tabs[this.current].name
      this.optionName = this.tabs.slice(0, this.pageFinishedNum + 1).map((tab) => tab.name)
      this.application[tabName] = data
      this.application['Name'] = this.application['Overview']['Name']
      this.application['OneLiner'] = this.application['Overview']['OneLiner']
      this.application['Website'] = this.application['Overview']['Website']

      let applicationID = this.applicationID()
      let submissionID = this.submissionID()
      if (!applicationID) {
        const res = await createApplication()
        if (!res) {
          alert('Error creating application')
          return false
        }
        applicationID = res.ID
        this.$router.push({ query: { applicationID } })
      }

      if (!submissionID) {
        const res = await createSubmission(applicationID, this.application)
        if (!res) {
          alert('Error creating submission')
          return false
        }
        submissionID = res.SubmissionID
        this.$router.push({ query: { applicationID, submissionID } })
      }

      const res = await updateSubmission(applicationID, submissionID, this.application)
      if (!res) {
        alert('Error updating submission')
        return false
      }

      return true
    },
    async save(data: any) {
      await this.newOrSaveDraft(data)
      console.log(123)
    },
    async next(data: any) {
      await this.newOrSaveDraft(data)
      this.pageFinishedNum = this.pageFinishedNum + 1
      if (this.current + 1 != this.tabs.length) {
        this.current = this.current + 1
        return
      } else {
        if (this.applicationID() && this.submissionID()) {
          await submitSubmissionDraft(this.applicationID(), this.submissionID(), this.application)
          this.$router.push(`/applications/${this.applicationID}`)
        }
      }
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
