<template>
  <div class="text-secondary mb-4">Account Profile</div>

  <div style="max-width: 960px">
    <SectionLayout title="Basic Information">
      <LabelInputComponent label="Account Name" type="text" />
      <div class="row">
        <div class="col-md-6">
          <LabelInputComponent
            label="Director First Name"
            type="text"
            footnote="Please choose correct type of your project."
          />
        </div>
        <div class="col-md-6">
          <LabelInputComponent
            label="Director Last Name"
            type="text"
            footnote="Please choose correct type of your project."
          />
        </div>
      </div>

      <LabelTextareaComponent
        label="Bio"
        footnote="Your bio will appear on your profile. You may edit it anytime."
        placeholder="Tell us about your company."
      />
      <LabelInputComponent label="Company" type="text" />
      <LabelInputComponent label="Industry" type="text" />
      <LabelInputComponent label="Country" type="text" footnote="Which country does your company base in?"/>
    </SectionLayout>
  </div>

  <button type="button" class="btn btn-primary">Update</button>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent
  }
}
</script>
