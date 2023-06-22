<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <SectionLayout title="Basic Information">
      <LabelInputComponent label="Project Name" type="text" />
      <LabelInputComponent
        label="Project Type"
        type="text"
        footnote="Please choose correct type of your project."
      />
      <LabelTextareaComponent label="Project Description" />
      <LabelInputComponent label="Project On Chain Address" type="text" />
    </SectionLayout>

    <SectionLayout title="Company Information">
      <div class="row">
        <div class="col-md-6">
          <LabelInputComponent label="Founder" type="text" />
        </div>
        <div class="col-md-6">
          <LabelInputComponent label="Team Name" type="text" />
        </div>
      </div>
      <LabelInputComponent label="Email Address" type="email" />
      <LabelTextareaComponent label="Company Address" />
    </SectionLayout>

    <SectionLayout title="Community">
      <div class="row">
        <div class="col-6">
          <LabelInputComponent label="GitHub" type="text" />
        </div>
        <div class="col-6">
          <LabelInputComponent label="Telegram" type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <LabelInputComponent label="Discord" type="text" />
        </div>
        <div class="col-6">
          <LabelInputComponent label="Twitter" type="text" />
        </div>
      </div>
    </SectionLayout>

    <button type="button" class="btn btn-primary" @click="submit()">Save and Submit</button>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'

import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

import ProjectViewMixin from './ProjectViewMixin'

import { createProjectJob } from '@/api'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent
  },
  mixins: [ProjectViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
    }
  }
}
</script>
