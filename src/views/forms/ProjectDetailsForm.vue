<template>
  <div style="max-width: 960px">
    <SectionLayout title="Project Details">
      <LabelTextFileURLComponent
        label="Project Summary"
        description="Please provide a detailed summary of your project."
        :required="true"
      />

      <LabelSelectComponent
        label="Category and Classification"
        description="Please select all the categories that your project."
        :options="[
          'Non-Fungible Token (NFT)',
          'Decentralized Exchange (DEX)',
          'DeFi',
          'Lending Protocols',
          'Yield Farming',
          'Stablecoins',
          'DAOs',
          'Smart Contracts',
          'Wallets',
          'GameFi',
          'Art Collection',
          'Interoperability',
          'Oracles',
          'Layer 2 Solutions',
          'Cross-Chain Solutions',
          'Governance Tokens',
          'Staking',
          'SocialFi',
          'Decentralized Marketplaces',
          'Liquidity Pools',
          'Tokenization',
          'Infrastructure',
          'Web3 Development Tools',
          'Web3 Analytics',
          'Identity',
          'Metaverses',
          'Decentralized Storage',
          'Security Tokens',
          'On-chain Governance',
          'Insurance Protocols',
          'Peer-to-Peer Networks',
          'Sidechains',
          'Privacy Coins',
          'Quantum-Resistant Cryptography',
          'Investment Advisory',
          'Carbon-Neutral Blockchain',
          'Zero-Knowledge',
          'Credentials',
          'Hardware',
          'Account Abstraction',
          'Security',
          'Community',
          'Education',
          'Supply Chain',
          'Mining',
          'E-commerce',
          'Blockchain-as-a-Service (BaaS)',
          'Compliance',
          'Digital Rights Management (DRM)',
          'Sustainability'
        ]"
        v-model:field="projectCategory"
      />

      <LabelTextFileURLComponent
        label="Challenges and Roadblocks"
        description="Please describe the challenges and difficulties while developing the project."
        v-model:field="projectChallenges"
      />

      <LabelTextFileURLComponent
        label="Solutions and Innovation"
        description="Please describe the solutions that solves the business problem."
        v-model:field="projectInnovation"
      />

      <LabelTextFileURLComponent
        label="Target Audience"
        description="Please list down the target audience of your products."
        v-model:field="projectTargetAudience"
      />

      <LabelTextFileURLComponent
        label="Impacts / Benefits"
        description="Please provide a detailed summary on the impacts and benefits brought to the target audience listed down in question 5."
        v-model:field="projectImpacts"
      />

      <LabelTextFileURLComponent
        label="Business Model"
        description="Please provide a detailed summary on the following: a. Current and planned revenue streams and usage. b. Is the team working on multiple projects at the same time?"
        v-model:field="projectBusinessModel"
      />

      <LabelTextFileURLComponent
        label="Product Stage"
        description="Please list out the roadmap of your product."
        v-model:field="productStage"
      />

      <LabelTextFileURLComponent
        label="Roadmap"
        description="Please list out the roadmap of your company."
        v-model:field="projectRoadmap"
      />

      <LabelTextFileURLComponent
        label="Other Supporting Documents"
        v-model:field="otherSupportingDocuments"
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  props: ['data'],
  components: {
    SectionLayout,
    LabelSelectComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      projectSummary: null as TextFilesObject | null,
      projectCategory: '',
      projectChallenges: null as TextFilesObject | null,
      projectInnovation: null as TextFilesObject | null,
      projectTargetAudience: null as TextFilesObject | null,
      projectImpacts: null as TextFilesObject | null,
      projectBusinessModel: null as TextFilesObject | null,
      productStage: null as TextFilesObject | null,
      projectRoadmap: null as TextFilesObject | null,
      otherSupportingDocuments: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        ProjectSummary: this.projectSummary,
        ProjectCategory: this.projectCategory,
        ProjectChallenges: this.projectChallenges,
        ProjectInnovation: this.projectInnovation,
        ProjectTargetAudience: this.projectTargetAudience,
        ProjectImpacts: this.projectImpacts,
        ProjectBusinessModel: this.projectBusinessModel,
        ProductStage: this.productStage,
        ProjectRoadmap: this.projectRoadmap,
        OtherSupportingDocuments: this.otherSupportingDocuments
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
    this.projectSummary = this.data['ProjectSummary']
    this.projectCategory = this.data['ProjectCategory']
    this.projectChallenges = this.data['ProjectChallenges']
    this.projectInnovation = this.data['ProjectInnovation']
    this.projectTargetAudience = this.data['ProjectTargetAudience']
    this.projectImpacts = this.data['ProjectImpacts']
    this.projectBusinessModel = this.data['ProjectBusinessModel']
    this.productStage = this.data['ProductStage']
    this.projectRoadmap = this.data['ProjectRoadmap']
    this.otherSupportingDocuments = this.data['OtherSupportingDocuments']
  }
}
</script>
