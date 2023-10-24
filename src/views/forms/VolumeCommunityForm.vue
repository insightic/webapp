<template>
  <div style="max-width: 960px">
    <SectionLayout title="Volume & Community">
      <LabelTextareaComponent
        label="Please describe the size and activeness of your community on platforms such as Twitter, Telegram, Discord, etc."
        description="
        Please provide detailed information <br/>
        Restrict format to <br/>
        1. [ platform1 ] [ URL ] [ size of community] <br/>
        2. [ platform2 ] [ URL ] [ size of community] <br/>
        "
      />

      <LabelTextFileURLComponent
        label="Please provide rough statistics on the number of users, and include on-chain proof/reference sites if applicable."
        description="Please provide detailed information and links to reference sites"
      />

      <LabelInputComponent label="Total Value Locked (TVL)" />

      <LabelInputComponent label="Total Trading/Transaction Volume" />

      <LabelTextareaComponent
        label="Geographical Demographic"
        description="Please describe the geographical demographic of your community"
      />

      <LabelTextFileURLComponent
        label="User Acquisition Strategy"
        description="How do you plan to attract new users to your project?"
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  methods: {
    data() {
      return {}
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
