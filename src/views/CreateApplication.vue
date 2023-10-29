<template>
  <NavFooterLayout>
    <div class="container-fluid p-3 mb-5" style="max-width: 1440px">
      <h1 class="mb-4">
        <strong>New Application</strong>
      </h1>

      <div class="row">
        <div class="col-2">
          <div v-for="(form, index) in tabs" :key="index">
            <div @click="changePage(index)" class="nav-item" :class="formStepStyle(index)">
              <div class="d-flex align-items-center">
                <i class="bi bi-check-circle-fill me-3"></i>
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
        <div class="col-10">
          <div>
            <component
              :is="toRaw(tabs[current].component)"
              @save="save"
              @next="next"
              :applicationData="application"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import FormNavButtons from '@/components/FormNavButtons.vue'
import RegistrationAgreement from './forms/RegistrationAgreementForm.vue'
import ComplianceTeam from './forms/ComplianceTeamForm.vue'
import Legal from './forms/LegalForm.vue'
import Overview from './forms/OverviewForm.vue'
import ProjectDetails from './forms/ProjectDetailsForm.vue'
import DigitalAsset from './forms/DigitalAssetForm.vue'
import TechnicalDetails from './forms/TechnicalDetailsForm.vue'
import RiskManagement from './forms/RiskManagementForm.vue'
import VolumeCommunity from './forms/VolumeCommunityForm.vue'
import Acknowledgement from './forms/AcknowledgementForm.vue'
import Competitiveness from './forms/CompetitivenessForm.vue'
import Investors from './forms/InvestorForm.vue'
import COI from './forms/COIForm.vue'
import Confirmation from './forms/ConfirmationForm.vue'
import { saveApplicationDraft, updateSubmissionDraft } from '@/api'
import { toRaw } from 'vue'

export default {
  components: {
    NavFooterLayout,
    FormNavButtons
  },
  mounted() {},
  data() {
    return {
      current: 0,
      pageFinishedNum: 0,
      currentTab: 'Overview',
      tabs: [
        { name: 'Overview', component: Overview },
        { name: 'Registration Agreement', component: RegistrationAgreement },
        { name: 'Compliance & Team', component: ComplianceTeam },
        { name: 'Legal', component: Legal },
        { name: 'ProjectDetails', component: ProjectDetails },
        { name: 'Digital Asset', component: DigitalAsset },
        { name: 'Technical Details', component: TechnicalDetails },
        { name: 'Risk Management', component: RiskManagement },
        { name: 'Volume & Community', component: VolumeCommunity },
        { name: 'Acknowledgement', component: Acknowledgement },
        { name: 'Competitiveness', component: Competitiveness },
        { name: 'Investors', component: Investors },
        { name: 'Conflict of Interest', component: COI },
        { name: 'Confirmation', component: Confirmation }
      ],
      application: {} as { [key: string]: any }
    }
  },
  computed: {
    applicationID: function () {
      return this.$route.query?.applicationID?.toString() || ''
    },
    submissionID: function () {
      return this.$route.query?.submissionID?.toString() || ''
    }
  },
  methods: {
    toRaw: toRaw,
    formStepStyle(index: number) {
      if (this.current == index) return 'text-primary'
      return 'text-secondary'
    },
    onChange(form: string, data: { [key: string]: any }) {
      console.log(form)
      console.log(data)
    },
    nextStep() {
      window.alert('Please fill in all required fields')
    },
    changePage(index: number) {
      if (this.pageFinishedNum >= index) {
        this.current = index
      }
    },
    async newOrSaveDraft(data: any) {
      const tabName = this.tabs[this.current].name
      this.application[tabName] = data
      this.application['Name'] = this.application['Overview']['Name']
      this.application['OneLiner'] = this.application['Overview']['OneLiner']
      this.application['Website'] = this.application['Overview']['Website']

      const applicationData = JSON.stringify(this.application)
      if (!applicationData) {
        alert('Error saving application draft')
        return
      }
      let res = null
      if (this.applicationID && this.submissionID) {
        res = await updateSubmissionDraft(this.applicationID, this.submissionID, applicationData)
        if (!res) {
          alert('Error saving application draft')
          return
        }

        console.log(res)
      } else {
        res = await saveApplicationDraft(applicationData)
        if (!res) {
          alert('Error saving application draft')
          return
        }
        this.$router.push({
          query: { applicationID: res?.applicationID, submissionID: res.submissionID }
        })
      }
    },
    async save(data: any) {
      await this.newOrSaveDraft(data)
    },
    async next(data: any) {
      // this.pageFinishedNum = this.pageFinishedNum + 1
      // const tabName = this.tabs[this.current].name
      // this.application[tabName] = data
      // if (this.current + 1 != this.tabs.length) {
      //   this.current = this.current + 1
      //   return
      // }
      // // Send network-request to the back-end
      // this.application['Name'] = this.application['Overview']['ProjectName']
      // this.application['One-liner'] = this.application['Overview']['ProjectOneLiner']
      // this.application['Website'] = this.application['Overview']['OfficialWebsite']
      // const res = await submitApplicationDraft(JSON.stringify(this.application))
      // console.log(res, 'result')
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
