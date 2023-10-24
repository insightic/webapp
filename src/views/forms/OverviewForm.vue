<template>
  <div style="max-width: 960px">
    <SectionLayout title="Overview">
      <LabelInputComponent
        label="Project Name"
        description="Please enter the name of your project."
        :required="true"
        v-model:field="projectName"
      />

      <LabelInputComponent
        label="Project One-liner"
        description="Please provide a one-sentence introduction to your project."
        :required="true"
        v-model:field="projectOneLiner"
      />

      <LabelInputComponent
        label="Official Website"
        description="Please enter the URL of your official website."
        :required="true"
        v-model:field="officialWebsite"
      />

      <LabelTextFileURLComponent label="Pitch Deck" v-model:field="pitchDeck" />

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
        :required="true"
        v-model:field="projectStage"
      />

      <LabelSelectComponent
        label="Token Launch"
        description="Please select the current stage of your project."
        :options="['Yes', 'No', 'Not Sure']"
        v-model:field="tokenLaunch"
      />

      <LabelSwitchComponent
        v-if="tokenLaunch == 'Yes'"
        label="Token Circulation"
        description="Has the token been circulated?"
        :options="['Yes', 'No']"
        v-model:field="tokenCirculation"
      />

      <LabelSwitchComponent
        label="Prior Application"
        description="Have you applied before?"
        v-model:field="priorApplication"
      />

      <SaveNextButtonComponent
        :disabled="!projectName || !projectOneLiner || !officialWebsite || !projectStage"
        @save="save"
        @next="next"
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
import type { TextFilesObject } from '@/api'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelSelectComponent,
    LabelSwitchComponent,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      projectName: '',
      projectOneLiner: '',
      officialWebsite: '',
      pitchDeck: null as TextFilesObject | null,
      projectStage: '',
      tokenLaunch: '',
      tokenCirculation: false,
      priorApplication: false
    }
  },
  methods: {
    data() {
      return {
        ProjectName: this.projectName,
        ProjectOneLiner: this.projectOneLiner,
        OfficialWebsite: this.officialWebsite,
        PitchDeck: this.pitchDeck,
        ProjectStage: this.projectStage,
        TokenLaunch: this.tokenLaunch,
        TokenCirculation: this.tokenCirculation,
        PriorApplication: this.priorApplication
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
