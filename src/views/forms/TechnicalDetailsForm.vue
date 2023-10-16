<template>
  <div style="max-width: 960px">
    <SectionLayout title="Technical Details">
      <LabelTextFileURLComponent
        label="Detailed Description of the Technology"
        footnote="Brief description of the technology, platform, or system developed or being developed."
      />

      <LabelTextFileURLComponent
        label="Technical Documentation"
        footnote="Submit any technical documents that detail the technology. (Document can be online like
            GitHub wiki or just a PDF files)."
      />

      <LabelTextFileURLComponent
        label="Code Base"
        footnote="Provide a link to the repository or upload a ZIP file containing the code base and test
            suites. (Code files can be in URL, GitHub link, or ZIP.)"
      />

      <LabelTextFileURLComponent
        label="IP Holdings"
        footnote="List any patents, trademarks, or other intellectual property held or pending related to the technology."
        type="text"
      />

      <LabelTextFileURLComponent
        label="Licensing"
        footnote="Detail any licensing agreements or restrictions on the use of the technology or intellectual property."
        type="text"
      />

      <LabelTextFileURLComponent
        label="Team Composition"
        footnote="List the members of the development team, along with their roles, qualifications, and experience."
        type="text"
      />

      <LabelTextFileURLComponent
        label="Contribution"
        footnote="Detail any contributions made to open-source projects, industry standards, protocols, or frameworks, including links to pull requests, repositories, or other verifiable evidence of contribution."
        type="text"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent
  }
}
</script>
