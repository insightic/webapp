<template>
  <div style="max-width: 960px">
    <SectionLayout title="Registration Agreement">
      <PDFComponent
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        style="height: 480px"
      />
      <LabelInputComponent label="Title" type="text" />
      <LabelInputComponent label="Name" type="text" />
      <LabelSwitchComponent
        label="Accept the NDA agreement"
        footnote="Only if the user agrees the agreement, then it can continue."
        width="100"
        height="40"
        :options="['Yes', 'No']"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import PDFComponent from '@/components/PDFComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelSwitchComponent,
    PDFComponent
  }
}
</script>
