<template>
  <div style="max-width: 960px">
    <SectionLayout title="Confirmation">
      <LabelTextareaComponent
        label="Confirmation"
        footnote="
              I hereby affirm that the information provided is accurate and complete to the best of my knowledge. I understand the obligation to disclose any potential conflicts of interest and will promptly update this declaration if any relevant changes occur.
              "
        type="text"
        class="mb-4"
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
