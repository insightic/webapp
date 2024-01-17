<template>
  <NavFooterLayout>
    <div class="container-fluid p-3 mb-5" style="max-width: 1440px">
      <h1 class="mb-4">
        <strong>{{ tilte[formType] }}</strong>
      </h1>

      <div class="row" v-if="!loading">
        <div class="d-block d-lg-none">
          <LabelSelectComponent
            label="Choose Form"
            description="Please choose the form here"
            :options="optionName"
            :pageFinishedNum="pageFinishedNum"
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
                <i class="bi bi-circle me-3" v-else></i>
                <div>
                  {{ form.name }}
                </div>
              </div>
              <div
                v-if="index + 1 != tabs.length"
                style="height: 20px; border-left: 1px gray solid; margin-left: 6px"
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
        { index: 0, name: 'Overview', component: Overview },
        {
          index: 1,
          name: 'Registration Agreement',
          component: RegistrationAgreement
        },
        { index: 2, name: 'Compliance & Team', component: ComplianceTeam },
        { index: 3, name: 'Legal', component: Legal },
        { index: 4, name: 'Project Details', component: ProjectDetails },
        { index: 5, name: 'Technical Details', component: TechnicalDetails },
        { index: 6, name: 'Risk Management', component: RiskManagement },
        { index: 7, name: 'Volume & Community', component: VolumeCommunity },
        { index: 8, name: 'Acknowledgement', component: Acknowledgement },
        { index: 9, name: 'Competitiveness', component: Competitiveness },
        { index: 10, name: 'Investors', component: Investors },
        { index: 11, name: 'Conflict of Interest', component: COI },
        { index: 12, name: 'Confirmation', component: Confirmation }
      ],
      application: {} as { [key: string]: any },
      applicationID: this.$route.query.applicationID as string,
      submissionID: this.$route.query.submissionID as string,
      optionName: [
        'Overview',
        'RegistrationAgreement',
        'Compliance & Team',
        'Legal',
        'Project Details',
        'Technical Details',
        'Risk Management',
        'Volume & Community',
        'Acknowledgement',
        'Competitiveness',
        'Investors',
        'COI',
        'Confirmation'
      ],
      tilte: ['New Application', 'New Submission', 'Continue Submission'],
      formType: 0
    }
  },
  async created() {
    if (this.applicationID != undefined && this.submissionID == undefined) {
      this.formType = 1
    } else if (this.applicationID != undefined && this.submissionID != undefined) {
      this.formType = 2
    }
    if (this.applicationID && this.submissionID) {
      const resp = await getApplication(this.applicationID)
      if (resp) {
        this.application = resp.Submissions.filter(
          (res) => res.SubmissionID == this.submissionID
        )[0]?.Content
      }
      this.current = Object.keys(this.application).length - 4
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
    changePageBySelect(e: any) {
      const index = this.optionName.findIndex((tab) => tab === e.target.value)
      console.log(index)
      this.current = index
    },
    hasData(idx: number): boolean {
      const tabName = this.tabs[idx].name
      return this.application[tabName] != null
    },
    async newOrSaveDraft(data: any): Promise<boolean> {
      const tabName = this.tabs[this.current].name
      this.application[tabName] = data
      this.application['LogoURL'] = this.application['Overview']['LogoURL']
      this.application['Name'] = this.application['Overview']['Name']
      this.application['OneLiner'] = this.application['Overview']['OneLiner']
      this.application['Website'] = this.application['Overview']['Website']

      if (!this.applicationID) {
        const res = await createApplication()
        if (!res) {
          alert('Error creating application')
          return false
        }
        this.applicationID = res.ID
      }

      if (!this.submissionID) {
        const res = await createSubmission(this.applicationID, this.application)
        if (!res) {
          this.$notify({
            title: 'Tips',
            text: 'Error creating submission',
            type: 'warn'
          })
          return false
        }
        this.submissionID = res.SubmissionID
      }

      const res = await updateSubmission(this.applicationID, this.submissionID, this.application)
      if (!res) {
        this.$notify({
          title: 'Tips',
          text: 'Error updating submission',
          type: 'warn'
        })
        return false
      }
      return true
    },
    async save(data: any) {
      const res = await this.newOrSaveDraft(data)
      if (res) {
        this.$notify({
          title: 'Tips',
          text: 'Form has been saved successfully.',
          type: 'success'
        })
      }
    },
    async next(data: any) {
      const res = await this.newOrSaveDraft(data)
      if (res) {
        this.$notify({
          title: 'Tips',
          text: 'Form has been saved successfully.',
          type: 'success'
        })
      }
      this.pageFinishedNum = this.pageFinishedNum + 1
      if (this.current + 1 != this.tabs.length) {
        this.current = this.current + 1
        return
      } else {
        if (this.applicationID && this.submissionID) {
          await submitSubmissionDraft(this.applicationID, this.submissionID, this.application)
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
