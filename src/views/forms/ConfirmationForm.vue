<template>
  <div style="max-width: 960px">
    <SectionLayout title="Confirmation">
      <LabelSwitchComponent
        label="Confirmation"
        description="I hereby affirm that the information provided is accurate and complete to the best of my knowledge. I understand the obligation to disclose any potential conflicts of interest and will promptly update this declaration if any relevant changes occur."
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelSwitchComponent,
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
