<template>
  <div style="max-width: 960px">
    <SectionLayout title="RegistrationAgreement">
      <LabelTextareaComponent
        label="Name"
        hint="Name of the project owner"
        type="text"
        class="mb-4"
      />
      <LabelRadioComponent
        label="Accept the NDA agreement"
        hint="Only if the user agrees the agreement, then it can continue."
        :options="['Yes', 'no']"
        class="mb-4 mt-3"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelRadioComponent
  }
}
</script>
