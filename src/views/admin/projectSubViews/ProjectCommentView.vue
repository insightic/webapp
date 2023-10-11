<template>
  <div style="max-width: 960px" class="comment px-3">
    <h4 class="mb-2">Comments</h4>
    <SectionLayout title="Basic Information">
      <LabelTextareaComponent
        label="Comments on Project Name"
        :rows="2"
        type="text"
        v-model:field="name"
      />
      <LabelTextareaComponent
        label="Comments on Project Type"
        :rows="2"
        type="text"
        v-model:field="projectType"
      />
      <LabelTextareaComponent
        label="Comments on Project Description"
        :rows="2"
        v-model:field="desc"
      />
      <LabelTextareaComponent label="Comments on Project On Chain Address" :rows="2" type="text" />
    </SectionLayout>

    <SectionLayout title="Company Information">
      <LabelTextareaComponent label="Comments on Founder" :rows="2" type="text" />

      <LabelTextareaComponent label="Comments on Team Name" :rows="2" type="text" />

      <LabelInputComponent label="Comments on Email Address" :rows="2" type="email" />
      <LabelTextareaComponent label="Comments on Company Address" :rows="2" />
    </SectionLayout>

    <button type="button" class="btn btn-primary" @click="commentPanel = true">
      Save Comments
    </button>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'

import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent
  },
  created() {
    const mapping = {
      '1': 'e262d5c2-16f8-47a0-8c70-4019514d137b',
      '2': 'e262d5c2-16f8-47a0-8c70-4019514d137a',
      '3': 'e262d5c2-16f8-47a0-8c70-4019514d137c',
      '4': 'e262d5c2-16f8-47a0-8c70-4019514d137d',
      '5': 'e262d5c2-16f8-47a0-8c70-4019514d137e',
      '6': 'e262d5c2-16f8-47a0-8d10-4019514d137a'
    }
    var projectGuid = mapping[this.$route.params.projectID as keyof typeof mapping]
    console.log(this.$route.params.projectID)
    var project = this.organizationsStore.findProject(
      'e262d5c2-16f8-47a0-8c70-4019514b137c',
      projectGuid
    )
    this.name = project!.name
    this.desc = project!.description
    console.log(project?.description)
  },
  data() {
    return {
      name: 'Wolf',
      projectType: '',
      desc: '',
      projectOnChainAddress: '',
      founder: '',
      teamName: '',
      officeAddress: '',
      companyEmail: '',
      onChainAddress: '',
      github: '',
      telegram: '',
      discord: '',
      twitter: '',
      repo: '',
      whitepaper: '',
      codeFiles: '',
      teamMembers: [
        {
          name: '',
          role: ''
        }
      ],
      commentPanel: false
    }
  },
  methods: {},
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>

<style scoped>
.comment {
  background-color: #fff;
  border: 1px solid #000;
}
</style>
