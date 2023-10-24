<template>
  <div style="max-width: 960px">
    <SectionLayout title="Legal">
      <LabelTextFileURLComponent
        label="Regulatory Status"
        description="Provide any third-party or internal legal opinion, memorandum or analysis (if available) on the regulatory status of the token/network."
        v-model:field="regulatoryStatus"
      />

      <LabelSwitchComponent
        label="Legal Action"
        description="Has the asset, network, organization, or any individuals associated ever been the subject of an investigation or action by a law enforcement or regulatory body?"
        v-model:field="legalAction"
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

export default {
  components: {
    SectionLayout,
    LabelSwitchComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      regulatoryStatus: null,
      legalAction: false
    }
  },
  methods: {
    data() {
      return {
        regulatoryStatus: this.regulatoryStatus,
        legalAction: this.legalAction
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
