<template>
  <div style="max-width: 960px">
    <SectionLayout title="Competitiveness">
      <LabelTextFileURLComponent
        label="Major Competitors"
        footnote="Please share a list of major competitors for the business that you are aware of."
      />

      <LabelTextFileURLComponent
        label="Main innovation / differentiation over the competitors?"
        footnote="Please share the difference in the business logic between your company and the competitors and what is your innovation / advantages over the competitors."
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent
  }
}
</script>
