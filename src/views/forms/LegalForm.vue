<template>
  <div style="max-width: 960px">
    <SectionLayout title="Legal">
      <LabelFileUploadComponent
        label="Regulatory Status"
        footnote="Provide any third-party or internal legal opinion, memorandum or analysis (if available) on the regulatory status of the token/network, including under U.S. federal, state or foreign securities laws and other financial product-related laws relating to the token."
      />
      <LabelSwitchComponent
        label="Legal Action"
        footnote="Has the asset, network, organization, or any individuals associated ever been the subject of an investigation or action by a law enforcement or regulatory body?"
        width="100"
        height="40"
        :options="['Yes', 'No']"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelFileUploadComponent from '@/components/LabelFileUploadComponent.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelFileUploadComponent,
    LabelSwitchComponent
  }
}
</script>
