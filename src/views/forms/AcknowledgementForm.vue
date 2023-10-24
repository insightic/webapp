<template>
  <div style="max-width: 960px">
    <SectionLayout title="Acknowledgement">
      <LabelTextFileURLComponent
        label="Partnerships, Collaborations, and Vendor Relationships"
        description="
            a. Can you list the major partnerships, collaborations, and vendor relationships that your organization has engaged in, including those with Fortune 500 companies or industry leaders? <br/>
            b. What were the objectives, outcomes, and enhancements to your service offerings or capabilities due to these collaborations and relationships? <br/>
            c. Do you have any testimonials or endorsements from renowned individuals or reputable entities? If permissible, can you share these testimonials? <br/>
            d. Have you published any research papers, articles, or works in collaboration with industry experts or reputed institutions? Please provide references or links to such works?
            "
        v-model:field="partnerships"
      />

      <LabelTextFileURLComponent
        label="Clientele and High-Impact Projects"
        description="
            a. Can you provide examples of high-profile clients you have served and high-impact projects you have completed, especially those in collaboration with well-known entities? <br />
            b. Were the objectives of these projects met, and what were the measurable outcomes and impacts of these projects and client engagements?
            "
        v-model:field="clientele"
      />

      <LabelTextFileURLComponent
        label="Awards, Recognitions, and Reputation"
        description="
            a. Has your organization received any awards or recognitions from reputable bodies or organizations? If so, can you provide details of such awards and the criteria?
            "
        v-model:field="awards"
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      partnerships: null as TextFilesObject | null,
      clientele: null as TextFilesObject | null,
      awards: null as TextFilesObject | null
    }
  },
  methods: {
    data() {
      return {
        Partnerships: this.partnerships,
        Clientele: this.clientele,
        Awards: this.awards
      }
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
