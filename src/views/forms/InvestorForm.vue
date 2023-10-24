<template>
  <div style="max-width: 960px">
    <SectionLayout title="Investors">
      <LabelTextFileURLComponent
        label="Key Incubators, Advisors, and Major Investors/Partner"
        description="Please share a list of your key incubators, advisors, and major investors or partners, specifying involvement in tokens and equity."
      />

      <LabelTextFileURLComponent
        label="Valuation of Each Funding Round"
        description="
            Please share the valuation (Fully Diluted Valuation if possible) of each round of funding your project has undergone
            (Please provide detailed information)."
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    SaveNextButtonComponent
  },
  methods: {
    data() {
      return {}
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
