<template>
  <div style="max-width: 960px">
    <SectionLayout title="Technical Details">
      <LabelTextFileURLComponent
        label="Detailed Description of the Technology"
        description="Brief description of the technology, platform, or system developed or being developed."
      />

      <LabelTextFileURLComponent
        label="Technical Documentation"
        description="Submit any technical documents that detail the technology. (Document can be online like
            GitHub wiki or just a PDF files)."
      />

      <LabelTextFileURLComponent
        label="Code Base"
        description="Provide a link to the repository or upload a ZIP file containing the code base and test
            suites. (Code files can be in URL, GitHub link, or ZIP.)"
      />

      <LabelTextFileURLComponent
        label="IP Holdings"
        description="List any patents, trademarks, or other intellectual property held or pending related to the technology."
      />

      <LabelTextFileURLComponent
        label="Licensing"
        description="Detail any licensing agreements or restrictions on the use of the technology or intellectual property."
      />

      <LabelTextFileURLComponent
        label="Team Composition"
        description="List the members of the development team, along with their roles, qualifications, and experience."
      />

      <LabelTextFileURLComponent
        label="Contribution"
        description="Detail any contributions made to open-source projects, industry standards, protocols, or frameworks, including links to pull requests, repositories, or other verifiable evidence of contribution."
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {}
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
