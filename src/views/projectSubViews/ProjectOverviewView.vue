<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <SectionLayout title="Basic Information">
      <LabelInputComponent label="Project Name" type="text" v-model:field="name"/>

      <LabelSelectComponent label="Project Type" :options="['DEX', 'NFT', 'Stable Coin']" v-model:field="projectType" :required="true" footnote="Please choose correct type of your project."/>

      <LabelTextareaComponent label="Project Description" v-model:field="desc"/>
      <LabelInputComponent label="Project On Chain Address" type="text"/>
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
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'

import ProjectViewMixin from './ProjectViewMixin'

import { createProjectJob } from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'



export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
    LabelSelectComponent
  },
  created() {
    const mapping = {
      '1': 'e262d5c2-16f8-47a0-8c70-4019514d137b',
      '2': 'e262d5c2-16f8-47a0-8c70-4019514d137a',
      '3': 'e262d5c2-16f8-47a0-8c70-4019514d137c',
      '4': 'e262d5c2-16f8-47a0-8c70-4019514d137d',
      '5': 'e262d5c2-16f8-47a0-8c70-4019514d137e',
      '6': 'e262d5c2-16f8-47a0-8d10-4019514d137a',
    }
    var projectGuid = mapping[this.$route.params.projectID as keyof typeof mapping]
    console.log(this.$route.params.projectID)
    var project = this.organizationsStore.findProject('e262d5c2-16f8-47a0-8c70-4019514b137c', projectGuid)
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
      ]
    }
  },
  mixins: [ProjectViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    }
  },
  computed: {
    ...mapStores(organizationsStore),
  }

}
</script>
