<template>
  <NavFooterLayout>
    <div class="container-fluid p-3 mb-5" style="max-width: 1440px">
      <h1 class="mb-4"><strong>New Application</strong></h1>

      <div class="row">
        <div class="col-2">
          <div v-for="(form, index) in forms" :key="index">
            <div @click="current = index" class="nav-item" :class="formStepStyle(index)">
              <div class="d-flex align-items-center">
                <i class="bi bi-check-circle-fill me-3"></i>
                <div>
                  {{ form }}
                </div>
              </div>
              <div
                v-if="index + 1 != forms.length"
                style="height: 20px; border-left: 1px gray solid; margin-left: 7px"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div>
            <component :is="tabs[current]" @save="save" @next="next"></component>
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
import ConfirmationForm from './forms/ConfirmationForm.vue'

export default {
  components: {
    NavFooterLayout,
    FormNavButtons,
    RegistrationAgreement,
    ComplianceTeam,
    Legal,
    Overview,
    ProjectDetails,
    DigitalAsset,
    TechnicalDetails,
    RiskManagement,
    VolumeCommunity,
    Acknowledgement,
    Competitiveness,
    Investors,
    COI,
    ConfirmationForm
  },
  mounted() {},
  data() {
    return {
      current: 0,
      currentTab: 'RegistrationAgreement',
      tabs: [
        'RegistrationAgreement',
        'ComplianceTeam',
        'Legal',
        'Overview',
        'ProjectDetails',
        'DigitalAsset',
        'TechnicalDetails',
        'RiskManagement',
        'VolumeCommunity',
        'Acknowledgement',
        'Competitiveness',
        'Investors',
        'COI',
        'ConfirmationForm'
      ],
      forms: [
        'Registration Agreement',
        'Compliance & Team',
        'Legal',
        'Overview',
        'Project Details',
        'Digital Asset',
        'Technical Details',
        'Risk Management',
        'Volume & Community',
        'Acknowledgement',
        'Competitiveness',
        'Investors',
        'Conflict of Interest',
        'Confirmation'
      ],
      application: {} as { [key: string]: any }
    }
  },
  computed: {},
  methods: {
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
    save(data: any) {
      const tab = this.tabs[this.current]
      this.application[tab] = data
      console.log(this.application)
    },
    next(data: any) {
      const tab = this.tabs[this.current]
      this.application[tab] = data
      if (this.current + 1 != this.tabs.length) {
        this.current = this.current + 1
        return
      }
      console.log(this.application)
      alert(JSON.stringify(this.application))
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
