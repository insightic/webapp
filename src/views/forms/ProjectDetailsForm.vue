<template>
  <div style="max-width: 960px">
    <SectionLayout title="Project Details">
      <LabelTextareaComponent
        label="Project Summary"
        footnote="Please provide a detailed summary of your project."
        type="text"
      />

      <LabelTextareaComponent
        label="Category and Classification"
        footnote="Please select all the categories that your project."
        type="text"
      />

      <LabelTextareaComponent
        label="Challenges and Roadblocks"
        footnote="Please describe the challenges and difficulties while developing the project."
        type="text"
      />

      <LabelTextareaComponent
        label="Solutions and Innovation"
        footnote="Please describe the solutions that solves the business problem."
        type="text"
      />

      <LabelTextareaComponent
        label="Target Audience"
        footnote="Please list down the target audience of your products."
        type="text"
      />

      <LabelTextareaComponent
        label="Impacts / Benefits"
        footnote="Please provide a detailed summary on the impacts and benefits brought to the target audience listed down in question 5."
        type="text"
      />

      <LabelTextareaComponent
        label="Business Model"
        footnote="Please provide a detailed summary on the following: a. Current and planned revenue streams and usage. b. Is the team working on multiple projects at the same time?"
        type="text"
      />

      <LabelTextareaComponent
        label="Product Stage"
        footnote="Please list out the roadmap of your product."
        type="text"
      />

      <LabelTextareaComponent
        label="Roadmap"
        footnote="Please list out the roadmap of your company."
        type="text"
      />

      <LabelTextareaComponent label="Other Details" type="text" />
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
