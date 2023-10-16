<template>
  <div style="max-width: 960px">
    <SectionLayout title="Volume & Community">
      <LabelTextareaComponent
        label="Please describe the size and activeness of your community on platforms such as Twitter, Telegram, Discord, etc."
        footnote="
        Please provide detailed information

        PS
        Restrict format to
        1. [ platform1 ] [ URL ] [ size of community]
        2. [ platform2 ] [ URL ] [ size of community]
        "
        type="text"
      />
      <LabelTextareaComponent
        label="Please provide rough statistics on the number of users, and include on-chain proof/reference sites if applicable."
        footnote="Please provide detailed information and links to reference sites"
        type="text"
      />
      <LabelInputComponent label="Total Value Locked(TVL)" type="text" />
      <LabelInputComponent label="Total Trading/Transaction Volume" type="text" />
      <LabelTextareaComponent
        label="Geographical Demographic"
        footnote="Please describe the geographical demographic of your community"
        type="text"
      />
      <LabelTextareaComponent
        label="User Acquisition Strategy"
        footnote="How do you plan to attract new users to your project? [Please describe your strategy in detail]"
        type="text"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelRadioComponent,
    LabelTextareaComponent
  }
}
</script>
