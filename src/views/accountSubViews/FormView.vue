<template>
    <div class="text-secondary mb-2">Forms</div>
  
    <div style="max-width: 960px">
        <div class="d-flex mb-4 pb-2 border-bottom">
            <div v-for="form in forms" :key="form">
                <a class="btn" @click="selected = form" :class="selected == form ? 'fw-bold': ''">{{ form }}</a>
            </div>
        </div>
        <component :is="selected"></component>
    </div>
  
    <button type="button" class="btn btn-primary">Update</button>
  </template>
  
<script lang="ts">
import Acknowledgement from '../forms/AcknowledgementForm.vue';
import Overview from '../forms/OverviewForm.vue';
import Competitiveness from '../forms/CompetitivenessForm.vue';
import ProjectDetails from '../forms/ProjectDetailsForm.vue';
import Investors from '../forms/InvestorForm.vue';
import Submission from '../forms/SubmissionForm.vue';
import COI from '../forms/COIForm.vue';
  
export default {
    components: {
        Acknowledgement,
        Overview,
        Competitiveness,
        ProjectDetails,
        Investors,
        Submission,
        COI
    },
    data() {
      return {
        selected: 'Acknowledgement',
        forms: ['Acknowledgement', 'Competitiveness', 'ProjectDetails', 'Investors', 'Submission', 'COI', 'Overview']
      }
    }
}
</script>
  