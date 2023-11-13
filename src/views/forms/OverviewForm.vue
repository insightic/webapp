<template>
  <div style="max-width: 960px">
    <SectionLayout title="Overview">
      <LabelImageComponent
        label="Project Logo"
        description="Please upload your project logo."
        :required="true"
        :disabled="disabled"
        v-model:field="logo"
      />

      <LabelInputComponent
        label="Project Name"
        description="Please enter the name of your project."
        :required="true"
        :disabled="disabled"
        v-model:field="name"
      />

      <LabelInputComponent
        label="Project One-liner"
        description="Please provide a one-sentence introduction to your project."
        :required="true"
        :disabled="disabled"
        v-model:field="oneLiner"
      />

      <LabelInputComponent
        label="Project Website"
        description="Please enter the URL of your official website."
        :required="true"
        :disabled="disabled"
        v-model:field="website"
      />

      <LabelTextFileURLComponent
        label="Pitch Deck"
        v-model:field="pitchDeck"
        :disabled="disabled"
      />

      <LabelSelectComponent
        label="Project Stage"
        description="Please select the current stage of your project."
        :options="[
          'Ideation',
          'Proof of Concept (PoC)',
          'Minimum Viable Product (MVP)',
          'Launch',
          'Grow',
          'Mature'
        ]"
        v-model:field="projectStage"
        :disabled="disabled"
      />

      <LabelSelectComponent
        label="Token Launch"
        description="Please select the current stage of your project."
        :options="['Yes', 'No', 'Not Sure']"
        v-model:field="tokenLaunch"
        :disabled="disabled"
      />

      <LabelSwitchComponent
        v-if="tokenLaunch == 'Yes'"
        label="Token Circulation"
        description="Has the token been circulated?"
        :options="['Yes', 'No']"
        v-model:field="tokenCirculation"
        :disabled="disabled"
      />

      <LabelSwitchComponent
        label="Prior Application"
        description="Have you applied before?"
        v-model:field="priorApplication"
        :disabled="disabled"
      />

      <SaveNextButtonComponent
        :disabled="!logo || !name || !oneLiner || !website"
        @save="save"
        @next="next"
        v-if="!disabled"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import LabelImageComponent from '@/components/LabelImageComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  props: ['data', 'disabled'],
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelSelectComponent,
    LabelSwitchComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent,
    LabelImageComponent
  },
  data() {
    return {
      logo: '',
      name: '',
      oneLiner: '',
      website: '',
      pitchDeck: null as TextFilesObject | null,
      projectStage: '',
      tokenLaunch: '',
      tokenCirculation: false,
      priorApplication: false
    }
  },
  methods: {
    payload() {
      return {
        Logo: this.logo,
        Name: this.name,
        OneLiner: this.oneLiner,
        Website: this.website,
        PitchDeck: this.pitchDeck,
        ProjectStage: this.projectStage,
        TokenLaunch: this.tokenLaunch,
        TokenCirculation: this.tokenCirculation,
        PriorApplication: this.priorApplication
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
    this.logo = this.data['Logo']
    this.name = this.data['Name']
    this.oneLiner = this.data['OneLiner']
    this.website = this.data['Website']
    this.pitchDeck = this.data['PitchDeck']
    this.projectStage = this.data['ProjectStage']
    this.tokenLaunch = this.data['TokenLaunch']
    this.tokenCirculation = this.data['TokenCirculation']
    this.priorApplication = this.data['PriorApplication']
  }
}
</script>
