<template>
  <div style="max-width: 960px">
    <SectionLayout title="COI">
      <LabelRadioComponent
        label="Regulatory and Organizational Affiliations"
        hint="
            Do any members of your core team have relationships, affiliations, or interactions with any regulators, organizations, or decision-makers that could potentially, or be perceived to, influence their judgment or actions in the execution of their roles and responsibilities?
            "
        :options="[
          'Yes [please provide specific details, including names and a description of the nature of the relationship or interaction.]',
          'no'
        ]"
        class="mb-4 mt-3"
      />

      <LabelTextareaComponent
        label="Confirmation"
        hint="
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
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelRadioComponent
  }
}
</script>
