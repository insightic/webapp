<template>
  <div style="max-width: 960px">
    <SectionLayout title="Acknowledgement">
      <LabelTextareaComponent
        label="Partnerships, Collaborations, and Vendor Relationships"
        footnote="
            a. Can you list the major partnerships, collaborations, and vendor relationships that your organization has engaged in, including those with Fortune 500 companies or industry leaders? `\n
            b. What were the objectives, outcomes, and enhancements to your service offerings or capabilities due to these collaborations and relationships? \n
            c. Do you have any testimonials or endorsements from renowned individuals or reputable entities? If permissible, can you share these testimonials? \n
            d. Have you published any research papers, articles, or works in collaboration with industry experts or reputed institutions? Please provide references or links to such works \n
            "
        type="text"
      />

      <LabelTextareaComponent
        label="Clientele and High-Impact Projects"
        footnote="
            a. Can you provide examples of high-profile clients you have served and high-impact projects you have completed, especially those in collaboration with well-known entities? <br />
            b. Were the objectives of these projects met, and what were the measurable outcomes and impacts of these projects and client engagements?
            "
        type="text"
      />

      <LabelTextareaComponent
        label="Awards, Recognitions, and Reputation"
        footnote="
            a. Has your organization received any awards or recognitions from reputable bodies or organizations? If so, can you provide details of such awards and the criteria?
            "
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
