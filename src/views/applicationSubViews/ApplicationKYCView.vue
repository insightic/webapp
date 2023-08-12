<template>
  <div class="text-secondary mb-4">Know Your Customer Verification</div>

  <div style="max-width: 960px">
    <SectionLayout title="Corporate Documents">
      <div class="row">
        <div class="col-md-6">
          <LabelInputComponent label="Certificate of incorporation" type="file" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Constitution or Memorandum of association" type="file" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Directors" type="text" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Members" type="text" />
        </div>
      </div>
    </SectionLayout>
    <SectionLayout title="UOB (Ultimate Beneficial Owner) Information">
      <div class="row">
        <div class="col-md-6">
          <LabelInputComponent label="Name" type="text" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Nationality" type="text" />
        </div>
      </div>
      <LabelInputComponent label="Address 1" type="text" />
      <LabelInputComponent label="Address 2" type="text" />
      <div class="row">
        <div class="col-md-6">
          <LabelInputComponent label="Passport" type="file" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Proof of Residency" type="file" />
        </div>
      </div>
    </SectionLayout>
    <SectionLayout title="Organization Chart">
      <LabelInputComponent
        label="Please follow the screenshot below to clearly illustrate the share distribution"
        type="file"
      />
      <img src="/org-chart.png" class="my-2" style="max-width: 320px" />
    </SectionLayout>

    <button type="button" class="btn btn-primary" @click="submit()">Save and Submit</button>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'

import ApplicationViewMixin from './ApplicationViewMixin'

import { createProjectJob } from '@/api'

export default {
  components: {
    SectionLayout,
    LabelInputComponent
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    }
  }
}
</script>
