<template>
  <div style="max-width: 960px">
    <SectionLayout title="Compliance & Team">
      <LabelInputComponent
        label="Company Name"
        type="text"
        v-model:field="editingField.CompanyName"
        @update:field="change"
      />
      <LabelTextareaComponent
        label="Company Address"
        type="text"
        v-model:field="editingField.CompanyAddress"
        @update:field="change"
      />
      <PeopleGroupComponent
        label="Executives"
        add-button-name="Add Executive"
        v-model:field="editingField.Executives"
        @update:field="change"
      />
      <PeopleGroupComponent
        label="Core Team Members"
        add-button-name="Add Core Team Member"
        v-model:field="editingField.CoreMemebers"
        @update:field="change"
      />
      <PeopleGroupComponent
        label="Non-executive Beneficial Owners"
        add-button-name="Add Non-executive Beneficial Owner"
        v-model:field="editingField.BeneficialOwners"
        @update:field="change"
      />
      <LabelTextFileURLComponent
        label="Government Connections"
        footnote="Please state all connections you have with the government."
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
import type { PropType } from 'vue'
import type { PeopleInfo } from '@/api'

export default {
  props: {
    field: {
      type: Object as PropType<{
        CompanyName: string
        CompanyAddress: string
        Executives: PeopleInfo[]
        CoreMembers: PeopleInfo[]
        BeneficialOwners: PeopleInfo[]
      }>,
      default: null
    }
  },
  created() {
    this.editingField = {
      CompanyName: this.field?.CompanyName,
      CompanyAddress: this.field?.CompanyAddress,
      Executives: this.field?.Executives,
      CoreMemebers: this.field?.CoreMembers,
      BeneficialOwners: this.field?.BeneficialOwners
    }
  },
  data() {
    return {
      editingField: {
        CompanyName: '',
        CompanyAddress: '',
        Executives: Array<PeopleInfo>(),
        CoreMemebers: Array<PeopleInfo>(),
        BeneficialOwners: Array<PeopleInfo>()
      }
    }
  },
  components: {
    SectionLayout,
    LabelTextareaComponent,
    PeopleGroupComponent,
    LabelInputComponent,
    LabelTextFileURLComponent
  },
  methods: {
    change() {
      this.$emit('update:field', this.editingField)
      this.$emit('change', 'ComplianceAndTeam', this.editingField)
      console.log(this.editingField);
    }
  }
}
</script>
