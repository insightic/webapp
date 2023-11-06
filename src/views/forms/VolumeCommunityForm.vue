<template>
  <div style="max-width: 960px">
    <SectionLayout title="Volume & Community">
      <LabelTextareaComponent
        label="Please describe the size and activeness of your community on platforms such as Twitter, Telegram, Discord, etc."
        description="
        Please provide detailed information <br/>
        Restrict format to <br/>
        1. [ platform1 ] [ URL ] [ size of community] <br/>
        2. [ platform2 ] [ URL ] [ size of community] <br/>
        "
        v-model:field="communitySize"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="Please provide rough statistics on the number of users, and include on-chain proof/reference sites if applicable."
        description="Please provide detailed information and links to reference sites"
        v-model:field="detailedInformation"
        :disabled="disabled"
      />

      <LabelInputComponent label="Total Value Locked (TVL)" v-model:field="totalValueLocked" :disabled="disabled"/>

      <LabelInputComponent
        label="Total Trading/Transaction Volume"
        v-model:field="totalTradingVolume"
        :disabled="disabled"
      />

      <LabelTextareaComponent
        label="Geographical Demographic"
        description="Please describe the geographical demographic of your community"
        v-model:field="geographicalDemographic"
        :disabled="disabled"
      />

      <LabelTextFileURLComponent
        label="User Acquisition Strategy"
        description="How do you plan to attract new users to your project?"
        v-model:field="userAcquisitionStrategy"
        :disabled="disabled"
      />

      <SaveNextButtonComponent @save="save" @next="next" v-if="!disabled" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  props: ['data', 'disabled'],
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      communitySize: '',
      detailedInformation: null as TextFilesObject | null,
      totalValueLocked: '',
      totalTradingVolume: '',
      geographicalDemographic: '',
      userAcquisitionStrategy: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        CommunitySize: this.communitySize,
        DetailedInformation: this.detailedInformation,
        TotalValueLocked: this.totalValueLocked,
        TotalTradingVolume: this.totalTradingVolume,
        GeographicalDemographic: this.geographicalDemographic,
        UserAcquisitionStrategy: this.userAcquisitionStrategy
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
    this.communitySize = this.data['CommunitySize']
    this.detailedInformation = this.data['DetailedInformation']
    this.totalValueLocked = this.data['TotalValueLocked']
    this.totalTradingVolume = this.data['TotalTradingVolume']
    this.geographicalDemographic = this.data['GeographicalDemographic']
    this.userAcquisitionStrategy = this.data['UserAcquisitionStrategy']
  }
}
</script>
