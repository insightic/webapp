<template>
  <div style="max-width: 960px">
    <SectionLayout title="Conflict of Interest">
      <LabelSwitchComponent
        label="Regulatory and Organizational Affiliations"
        description="
            Do any members of your core team have relationships, affiliations, or interactions with any regulators, organizations, or decision-makers that could potentially, or be perceived to, influence their judgment or actions in the execution of their roles and responsibilities?"
        v-model:field="regulatoryAffiliations"
      />

      <LabelTextFileURLComponent
        v-if="regulatoryAffiliations"
        label="Description of the nature of the relationship or interaction"
        v-model:field="relationshipDescription"
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  components: {
    SectionLayout,
    LabelSwitchComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      regulatoryAffiliations: false,
      relationshipDescription: null as TextFilesObject | null
    }
  },
  methods: {
    data() {
      return {
        RegulatoryAffiliations: this.regulatoryAffiliations,
        RelationshipDescription: this.relationshipDescription
      }
    },
    save() {
      this.$emit('save', this.data())
    },
    next() {
      this.$emit('next', this.data())
    }
  }
}
</script>
