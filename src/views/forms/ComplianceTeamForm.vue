<template>
  <div style="max-width: 960px">
    <SectionLayout title="Compliance & Team">
      <LabelInputComponent
        label="Company Name"
        type="text"
        v-model:field="companyName"
        :required="true"
      />

      <LabelTextareaComponent
        label="Company Address"
        type="text"
        v-model:field="companyAddress"
        :required="true"
      />

      <PeopleGroupComponent
        label="Executives"
        add-button-name="Add Executive"
        v-model:field="executives"
      />

      <PeopleGroupComponent
        label="Core Team Members"
        add-button-name="Add Core Team Member"
        v-model:field="coreMembers"
      />

      <PeopleGroupComponent
        label="Non-executive Beneficial Owners"
        add-button-name="Add Non-executive Beneficial Owner"
        v-model:field="beneficialOwners"
      />

      <LabelTextFileURLComponent
        label="Government Connections"
        description="Please state all connections you have with the government."
        v-model:field="governmentConnections"
      />

      <SaveNextButtonComponent
        :disabled="!companyName || !companyAddress"
        @save="save"
        @next="next"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import PeopleGroupComponent from '@/components/PeopleGroupComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import type { PeopleInfo, TextFilesObject } from '@/api'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  props: ['applicationData'],
  components: {
    SectionLayout,
    LabelTextareaComponent,
    PeopleGroupComponent,
    LabelInputComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      companyName: '',
      companyAddress: '',
      executives: [] as Array<PeopleInfo>,
      coreMembers: [] as Array<PeopleInfo>,
      beneficialOwners: [] as Array<PeopleInfo>,
      governmentConnections: null as TextFilesObject | null
    }
  },
  methods: {
    data() {
      return {
        CompanyName: this.companyName,
        CompanyAddress: this.companyAddress,
        Executives: this.executives,
        CoreMembers: this.coreMembers,
        BeneficialOwners: this.beneficialOwners,
        GovernmentConnections: this.governmentConnections
      }
    },
    save() {
      this.$emit('save', this.data())
    },
    next() {
      this.$emit('next', this.data())
    },
    mounted() {
      console.log(123)
      if (this.applicationData['ComplianceTeam'] == null) return
      this.companyName = this.applicationData['ComplianceTeam']['CompanyName']
      this.companyAddress = this.applicationData['ComplianceTeam']['CompanyAddress']
      this.executives = this.applicationData['ComplianceTeam']['Executives']
      this.coreMembers = this.applicationData['ComplianceTeam']['CoreMembers']
      this.beneficialOwners = this.applicationData['ComplianceTeam']['BeneficialOwners']
      this.governmentConnections = this.applicationData['ComplianceTeam']['GovernmentConnections']
    }
  }
}
</script>
