<template>
  <div style="max-width: 960px">
    <SectionLayout title="Legal">
      <LabelTextFileURLComponent
        label="Regulatory Status"
        description="Provide any third-party or internal legal opinion, memorandum or analysis (if available) on the regulatory status of the token/network."
        v-model:field="regulatoryStatus"
        :disabled="disabled"
      />

      <LabelSwitchComponent
        label="Legal Action"
        description="Has the asset, network, organization, or any individuals associated ever been the subject of an investigation or action by a law enforcement or regulatory body?"
        v-model:field="legalAction"
        :disabled="disabled"
      />

      <SaveNextButtonComponent @save="save" @next="next" v-if="!disabled" />
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
  props: ['data', 'disabled'],
  components: {
    SectionLayout,
    LabelSwitchComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      regulatoryStatus: null as TextFilesObject | null,
      legalAction: false
    }
  },
  methods: {
    payload() {
      return {
        RegulatoryStatus: this.regulatoryStatus,
        LegalAction: this.legalAction
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
    this.regulatoryStatus = this.data['RegulatoryStatus']
    this.legalAction = this.data['LegalAction']
  }
}
</script>
