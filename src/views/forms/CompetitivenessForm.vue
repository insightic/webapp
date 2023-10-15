<template>
  <div style="max-width: 960px">
    <SectionLayout title="Competitiveness">
      <LabelTextareaComponent
        label="Major Competitors"
        footnote="Please share a list of major competitors for the business that you are aware of."
        type="text"
      />

      <LabelTextareaComponent
        label="Main innovation / differentiation over the competitors?"
        footnote="Please share the difference in the business logic between your company and the competitors and what is your innovation / advantages over the competitors."
        type="text"
      />

      <LabelTextareaComponent
        label="Awards, Recognitions, and Reputation"
        footnote="a. Has your organization received any awards or recognitions from reputable bodies or organizations? If so, can you provide details of such awards and the criteria?"
        type="text"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent
  }
}
</script>
