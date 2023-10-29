<template>
  <div style="max-width: 960px">
    <SectionLayout title="Competitiveness">
      <LabelTextFileURLComponent
        label="Major Competitors"
        description="Please share a list of major competitors for the business that you are aware of."
        v-model:field="majorCompetitors"
      />

      <LabelTextFileURLComponent
        label="Main innovation / differentiation over the competitors?"
        description="Please share the difference in the business logic between your company and the competitors and what is your innovation / advantages over the competitors."
        v-model:field="mainInnovation"
      />
    </SectionLayout>

    <SaveNextButtonComponent @save="save" @next="next" />
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
      majorCompetitors: null as TextFilesObject | null,
      mainInnovation: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        MajorCompetitors: this.majorCompetitors,
        MainInnovation: this.mainInnovation
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
    this.majorCompetitors = this.data['MajorCompetitors']
    this.mainInnovation = this.data['MainInnovation']
  }
}
</script>
