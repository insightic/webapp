<template>
  <div style="max-width: 960px">
    <SectionLayout title="Registration Agreement">
      <PDFComponent src="../../../insightic.pdf" style="height: 480px" />

      <LabelInputComponent label="Title" type="text" v-model:field="title" :required="true" />

      <LabelInputComponent label="Name" type="text" v-model:field="name" :required="true" />

      <LabelSwitchComponent
        label="Accept the NDA agreement"
        description="You must accept the NDA agreement to continue."
        width="100"
        height="40"
        v-model:field="acceptNDA"
        :required="true"
      />

      <SaveNextButtonComponent
        :disabled="!title || !name || !acceptNDA"
        @save="save"
        @next="next"
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
    data() {
      return {
        title: this.title,
        name: this.name,
        acceptNDA: this.acceptNDA
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
