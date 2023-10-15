<template>
  <div style="max-width: 960px">
    <SectionLayout title="Overview">
      <LabelInputComponent
        label="Project Name"
        footnote="Please enter the name of your project."
        type="text"
      />

      <LabelTextareaComponent
        label="Project Summary"
        footnote="Please provide a one-sentence introduction to your project."
        type="text"
      />

      <LabelInputComponent
        label="Official Website"
        footnote="Please enter the URL of your official website."
        type="text"
      />

      <LabelFileUploadComponent label="Pitch Deck" />

      <LabelSelectComponent
        label="Program Selection"
        footnote="Select the program to apply."
        :options="['Sandbox', 'Direct / Full License']"
      />

      <LabelSelectComponent
        label="Project Stage"
        footnote="Please select the current stage of your project."
        :options="[
          'Ideation',
          'Proof of Concept (PoC)',
          'Minimum Viable Product (MVP)',
          'Launch',
          'Grow',
          'Mature'
        ]"
      />

      <LabelSelectComponent
        label="Token Launch"
        footnote="Please select the current stage of your project."
        :options="['Yes', 'No', 'Not Sure']"
      />

      <LabelSelectComponent
        label="Token Circulation"
        footnote="Has the token been circulated?"
        :options="['Yes', 'No']"
      />

      <LabelRadioComponent
        label="Prior Application"
        footnote="Have you applied before?"
        :options="['Have you applied before?', 'No']"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelFileUploadComponent from '@/components/LabelFileUploadComponent.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelRadioComponent,
    LabelInputComponent,
    LabelFileUploadComponent,
    LabelSelectComponent
  }
}
</script>
