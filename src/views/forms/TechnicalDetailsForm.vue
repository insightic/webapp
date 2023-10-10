<template>
  <div style="max-width: 960px">
    <SectionLayout title="RegistrationAgreement">
      <LabelTextareaComponent
        label="Provide a Detailed Description of the Technology"
        hint="Brief description of the technology, platform, or system developed or being developed."
        type="text"
        class="mb-4"
      />
      <div class="col-md-12" style="margin-bottom: 40px;">
        <div class="">
          <label for="document" class="">Technical Documentation <span class="text-danger">*</span></label>
          <input
            type="file"
            ref="whitepaper"
            class="form-controls w-100"
            id="document"
          />
          <div class="text-secondary small">
            Submit any technical documents that detail the technology.(Document can be online like github wiki or just a pdf files)
          </div>
        </div>
      </div>
      <div class="col-md-12" style="margin-bottom: 40px;">
        <div class="">
          <label for="document" class="">Upload/Import Code Base <span class="text-danger">*</span></label>
          <input
            type="file"
            ref="whitepaper"
            class="form-controls w-100"
            id="document"
          />
          <div class="text-secondary small">
            Provide a link to the repository or upload a ZIP file containing the code base and test suites.(Code files can be in URL, github link, or zip.)
          </div>
        </div>
      </div>
      <LabelTextareaComponent
        label="IP Holdings"
        hint="List any patents, trademarks, or other intellectual property held or pending related to the technology."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Licensing"
        hint="Detail any licensing agreements or restrictions on the use of the technology or intellectual property."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Team Composition"
        hint="List the members of the development team, along with their roles, qualifications, and experience."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Contribution to the Project"
        hint="Describe the specific contributions made by each team member to the development of the technology."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Contribution Details"
        hint="Detail any contributions made to open-source projects, including links to pull requests, repositories, or other verifiable evidence of contribution."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Impact of Contributions"
        hint="Describe the impact and significance of the open-source contributions made, including any adoption or recognition by the community."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Contribution to Standards"
        hint="Detail any contributions made to the development or refinement of industry standards, protocols, or frameworks."
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Recognition and Adoption"
        hint="Describe any recognition received for contributions to standards and the level of adoption within the industry."
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
