<template>
  <div style="max-width: 960px">
    <SectionLayout title="Project Details">
      <LabelTextFileURLComponent
        label="Project Summary"
        footnote="Please provide a detailed summary of your project."
      />

      <LabelSelectComponent
        label="Category and Classification"
        footnote="Please select all the categories that your project."
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

      <LabelTextFileURLComponent
        label="Business Model"
        footnote="Please provide a detailed summary on the following: a. Current and planned revenue streams and usage. b. Is the team working on multiple projects at the same time?"
      />

      <LabelTextareaComponent
        label="Product Stage"
        footnote="Please list out the roadmap of your product."
        type="text"
      />

      <LabelTextFileURLComponent
        label="Roadmap"
        footnote="Please list out the roadmap of your company."
      />

      <LabelTextFileURLComponent label="Other Supporting Documents" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelSelectComponent,
    LabelTextFileURLComponent
  }
}
</script>
