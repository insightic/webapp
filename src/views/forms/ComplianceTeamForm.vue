<template>
  <div style="max-width: 960px">
    <SectionLayout title="Compliance & Team">
      <LabelInputComponent
        label="Company Name"
        type="text"
        v-model:field="companyName"
        :required="true"
        :disabled="disabled"
      />

      <LabelTextareaComponent
        label="Company Address"
        type="text"
        v-model:field="companyAddress"
        :required="true"
        :disabled="disabled"
      />

      <PeopleGroupComponent
        label="Executives"
        add-button-name="Add Executive"
        v-model:field="executives"
        :disabled="disabled"
      />

      <PeopleGroupComponent
        label="Core Team Members"
        add-button-name="Add Core Team Member"
        v-model:field="coreMembers"
        :disabled="disabled"
      />

      <PeopleGroupComponent
        label="Non-executive Beneficial Owners"
        add-button-name="Add Non-executive Beneficial Owner"
        v-model:field="beneficialOwners"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Government Connections"
        description="Please state all connections you have with the government."
        v-model:field="governmentConnections"
        :disabled="disabled"
      />

      <SaveNextButtonComponent
        :disabled="!companyName || !companyAddress"
        @save="save"
        @next="next"
        v-if="!disabled"
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
  props: ['data', 'disabled'],
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
    payload() {
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
      this.$emit('save', this.payload())
    },
    next() {
      this.$emit('next', this.payload())
    }
  },
  activated() {
    if (!this.data) return
    this.companyName = this.data['CompanyName']
    this.companyAddress = this.data['CompanyAddress']
    this.executives = this.data['Executives']
    this.coreMembers = this.data['CoreMembers']
    this.beneficialOwners = this.data['BeneficialOwners']
    this.governmentConnections = this.data['GovernmentConnections']
  }
}
</script>
