<template>
  <div style="max-width: 960px">
    <SectionLayout title="Competitiveness">
      <LabelTextFileURLComponent
        label="Major Competitors"
        description="Please share a list of major competitors for the business that you are aware of."
      />

      <LabelTextFileURLComponent
        label="Main innovation / differentiation over the competitors?"
        description="Please share the difference in the business logic between your company and the competitors and what is your innovation / advantages over the competitors."
      />
    </SectionLayout>

    <SaveNextButtonComponent @save="save" @next="next" />
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
