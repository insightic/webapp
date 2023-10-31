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
        <div class="col-10">
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
import { createApplication, createSubmission, updateSubmission } from '@/api'
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
      if (this.hasData(index)) {
        this.current = index
      }
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

      if (!this.applicationID) {
        const res = await createApplication()
        if (!res) {
          alert('Error creating application')
          return false
        }
        this.$router.push({ query: { applicationID: res.applicationID } })
      }

      if (!this.submissionID) {
        const res = await createSubmission(this.applicationID, this.application)
        if (!res) {
          alert('Error creating submission')
          return false
        }
        this.$router.push({ query: { submissionID: res.submissionID } })
      }

      const res = await updateSubmission(this.applicationID, this.submissionID, this.application)
      if (!res) {
        alert('Error updating submission')
        return false
      }

      return true
    },
    async save(data: any) {
      await this.newOrSaveDraft(data)
    },
    async next(data: any) {
      await this.newOrSaveDraft(data)
      this.pageFinishedNum = this.pageFinishedNum + 1
      if (this.current + 1 != this.tabs.length) {
        this.current = this.current + 1
        return
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
