<template>
  <div style="max-width: 960px">
    <SectionLayout title="Registration Agreement">
      <PDFComponent src="../../../insightic.pdf" style="height: 480px" />

      <LabelInputComponent
        label="Name"
        type="text"
        v-model:field="name"
        :required="true"
        :disabled="disabled"
      />

      <LabelInputComponent
        label="Title"
        type="text"
        v-model:field="title"
        :required="true"
        :disabled="disabled"
      />
      
      <LabelSwitchComponent
        label="Accept the NDA agreement"
        description="You must accept the NDA agreement to continue."
        width="100"
        height="40"
        v-model:field="acceptNDA"
        :required="true"
        :disabled="disabled"
      />

      <SaveNextButtonComponent
        :disabled="!title || !name || !acceptNDA"
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
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import PDFComponent from '@/components/PDFComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'

export default {
  props: ['data', 'disabled'],
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelSwitchComponent,
    PDFComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      title: '',
      name: '',
      acceptNDA: false
    }
  },
  methods: {
    payload() {
      return {
        Title: this.title,
        Name: this.name,
        AcceptNDA: this.acceptNDA
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
    this.title = this.data['Title']
    this.name = this.data['Name']
    this.acceptNDA = this.data['AcceptNDA']
  }
}
</script>
