<template>
  <div style="max-width: 960px">
    <SectionLayout title="Investors">
      <LabelTextFileURLComponent
        label="Key Incubators, Advisors, and Major Investors/Partner"
        footnote="Please share a list of your key incubators, advisors, and major investors or partners, specifying involvement in tokens and equity."
      />

      <LabelTextareaComponent
        label="Valuation of Each Funding Round"
        footnote="
            Please share the valuation (Fully Diluted Valuation if possible) of each round of funding your project has undergone
            (Please provide detailed information).
            "
        type="text"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelTextFileURLComponent
  }
}
</script>
