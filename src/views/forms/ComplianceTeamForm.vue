<template>
  <div style="max-width: 960px">
    <SectionLayout title="Compliance & Team">
      <LabelInputComponent label="Company Name" type="text" />
      <LabelInputComponent label="Company Address" type="text" />
      <PeopleGroupComponent label="Executives" add-button-name="Add Executive" />
      <PeopleGroupComponent label="Core Team Members" add-button-name="Add Core Team Member" />
      <PeopleGroupComponent
        label="Non-executive Beneficial Owners"
        add-button-name="Add Non-executive Beneficial Owner"
      />
      <LabelTextareaComponent
        label="Government Connections"
        footnote="Please state all connections you have with the government."
        type="text"
        class="mb-4"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import PeopleGroupComponent from '@/components/PeopleGroupComponent.vue'

export default {
  components: {
    SectionLayout,

    LabelTextareaComponent,
    PeopleGroupComponent,
    LabelInputComponent
  }
}
</script>
