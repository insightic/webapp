<template>
  <div style="max-width: 960px">
    <SectionLayout title="Technical Details">
      <LabelTextFileURLComponent
        label="Detailed Description of the Technology"
        description="Brief description of the technology, platform, or system developed or being developed."
        v-model:field="detailedDescription"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Technical Documentation"
        description="Submit any technical documents that detail the technology. (Document can be online like
            GitHub wiki or just a PDF files)."
        v-model:field="technicalDocumentation"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Code Base"
        description="Provide a link to the repository or upload a ZIP file containing the code base and test
            suites. (Code files can be in URL, GitHub link, or ZIP.)"
        v-model:field="codeBase"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="IP Holdings"
        description="List any patents, trademarks, or other intellectual property held or pending related to the technology."
        v-model:field="ipHoldings"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Licensing"
        description="Detail any licensing agreements or restrictions on the use of the technology or intellectual property."
        v-model:field="licensing"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Team Composition"
        description="List the members of the development team, along with their roles, qualifications, and experience."
        v-model:field="teamComposition"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Contribution"
        description="Detail any contributions made to open-source projects, industry standards, protocols, or frameworks, including links to pull requests, repositories, or other verifiable evidence of contribution."
        v-model:field="contribution"
        :disabled="disabled"
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
  props: ['data', 'disabled'],
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      detailedDescription: null as TextFilesObject | null,
      technicalDocumentation: null as TextFilesObject | null,
      codeBase: null as TextFilesObject | null,
      ipHoldings: null as TextFilesObject | null,
      licensing: null as TextFilesObject | null,
      teamComposition: null as TextFilesObject | null,
      contribution: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        DetailedDescription: this.detailedDescription,
        TechnicalDocumentation: this.technicalDocumentation,
        CodeBase: this.codeBase,
        IPHoldings: this.ipHoldings,
        Licensing: this.licensing,
        TeamComposition: this.teamComposition,
        Contribution: this.contribution
      }
    },
    save() {
      this.$emit('save', this.payload())
    },
    next() {
      this.$emit('next', this.payload())
    }
  },
  activated() {
    if (!this.data) return
    this.detailedDescription = this.data['DetailedDescription']
    this.technicalDocumentation = this.data['TechnicalDocumentation']
    this.codeBase = this.data['CodeBase']
    this.ipHoldings = this.data['IPHoldings']
    this.licensing = this.data['Licensing']
    this.teamComposition = this.data['TeamComposition']
    this.contribution = this.data['Contribution']
  }
}
</script>
