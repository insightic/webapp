<template>
  <div style="max-width: 960px">
    <SectionLayout title="Legal">
      <LabelTextFileURLComponent
        label="Regulatory Status"
        footnote="Provide any third-party or internal legal opinion, memorandum or analysis (if available) on the regulatory status of the token/network."
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
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelSwitchComponent,
    LabelTextFileURLComponent
  }
}
</script>
