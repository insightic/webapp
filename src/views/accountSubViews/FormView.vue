<template>
  <div class="text-secondary mb-2">Forms</div>

  <div style="max-width: 960px">
    <div class="d-flex mb-4 pb-2 border-bottom">
      <div v-for="form in forms" :key="form">
        <a class="btn" @click="selected = form" :class="selected == form ? 'fw-bold' : ''">{{
          form
        }}</a>
      </div>
    </div>
    <component :is="selected"></component>
  </div>

  <button type="button" class="btn btn-primary">Update</button>
</template>

<script lang="ts">
import Acknowledgement from '../forms/AcknowledgementForm.vue'
import Overview from '../forms/OverviewForm.vue'
import Competitiveness from '../forms/CompetitivenessForm.vue'
import ProjectDetails from '../forms/ProjectDetailsForm.vue'
import Investors from '../forms/InvestorForm.vue'
import Submission from '../forms/SubmissionForm.vue'
import COI from '../forms/COIForm.vue'
import RegistrationAgreement from '../forms/RegistrationAgreementForm.vue'
import ComplianceTeam from '../forms/ComplianceTeamForm.vue'
import Legal from '../forms/LegalForm.vue'
import Technical from '../forms/TechnicalDetailsForm.vue'
import RiskManagement from '../forms/RiskManagementForm.vue'

export default {
  components: {
    Acknowledgement,
    Overview,
    Competitiveness,
    ProjectDetails,
    Investors,
    Submission,
    COI,
    RegistrationAgreement,
    ComplianceTeam,
    Legal,
    Technical,
    RiskManagement
  },
  data() {
    return {
      selected: 'RegistrationAgreement',
      forms: [
        'RegistrationAgreement',
        'ComplianceTeam',
        'Legal',
        'Technical',
        'Acknowledgement',
        'Competitiveness',
        'ProjectDetails',
        'Investors',
        'Submission',
        'COI',
        'Overview',
        'RiskManagement'
      ]
    }
  }
}
</script>
