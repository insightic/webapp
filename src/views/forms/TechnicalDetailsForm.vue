<template>
  <div style="max-width: 960px">
    <SectionLayout title="Technical Details">
      <LabelTextareaComponent
        label="Detailed Description of the Technology"
        footnote="Brief description of the technology, platform, or system developed or being developed."
        type="text"
        class="mb-4"
      />
      <LabelFileUploadComponent
        label="Technical Documentation"
        footnote="Submit any technical documents that detail the technology. (Document can be online like
            GitHub wiki or just a PDF files)."
      />
      <LabelFileUploadComponent
        label="Code Base"
        footnote="Provide a link to the repository or upload a ZIP file containing the code base and test
            suites. (Code files can be in URL, GitHub link, or ZIP.)"
      />
      <LabelTextareaComponent
        label="IP Holdings"
        footnote="List any patents, trademarks, or other intellectual property held or pending related to the technology."
        type="text"
      />
      <LabelTextareaComponent
        label="Licensing"
        footnote="Detail any licensing agreements or restrictions on the use of the technology or intellectual property."
        type="text"
      />
      <LabelTextareaComponent
        label="Team Composition"
        footnote="List the members of the development team, along with their roles, qualifications, and experience."
        type="text"
      />
      <LabelTextareaComponent
        label="Contribution to the Project"
        footnote="Describe the specific contributions made by each team member to the development of the technology."
        type="text"
      />
      <LabelTextareaComponent
        label="Contribution Details"
        footnote="Detail any contributions made to open-source projects, including links to pull requests, repositories, or other verifiable evidence of contribution."
        type="text"
      />
      <LabelTextareaComponent
        label="Impact of Contributions"
        footnote="Describe the impact and significance of the open-source contributions made, including any adoption or recognition by the community."
        type="text"
      />
      <LabelTextareaComponent
        label="Contribution to Standards"
        footnote="Detail any contributions made to the development or refinement of industry standards, protocols, or frameworks."
        type="text"
      />
      <LabelTextareaComponent
        label="Recognition and Adoption"
        footnote="Describe any recognition received for contributions to standards and the level of adoption within the industry."
        type="text"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelFileUploadComponent from '@/components/LabelFileUploadComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelFileUploadComponent
  }
}
</script>
