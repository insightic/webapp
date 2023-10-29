<template>
  <div style="max-width: 960px">
    <SectionLayout title="Investors">
      <LabelTextFileURLComponent
        label="Key Incubators, Advisors, and Major Investors/Partner"
        description="Please share a list of your key incubators, advisors, and major investors or partners, specifying involvement in tokens and equity."
        v-model:field="keyIncubators"
      />

      <LabelTextFileURLComponent
        label="Valuation of Each Funding Round"
        description="
            Please share the valuation (Fully Diluted Valuation if possible) of each round of funding your project has undergone
            (Please provide detailed information)."
        v-model:field="valuation"
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
  props: ['data'],
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      keyIncubators: null as TextFilesObject | null,
      valuation: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        KeyIncubators: this.keyIncubators,
        Valuation: this.valuation
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
    this.keyIncubators = this.data['KeyIncubators']
    this.valuation = this.data['Valuation']
  }
}
</script>
