<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <SectionLayout title="Part A: DLT Foundation Details">
      <LabelInputComponent label="DLT Foundation Name" type="text" v-model:field="name" :required="true"/>

      <LabelInputComponent label="Official Twitter Account (URL)" type="text" v-model:field="twitter" :required="true"/>
            <LabelInputComponent label="Official Website (URL)" type="text" v-model:field="website" :required="true"/>
            <LabelInputComponent label="Whitepaper (URL)" type="text" v-model:field="whitepaper" :required="true"/>
            <div class="">
              <label for="document" class=""
                >Whitepaper (File)</label
              >
              <input
                type="file"
                class="form-controls w-100"
                id="document"
              />
              <div class="text-secondary small">
                Please attach a quality version of the whitepaper document.
              </div>
            </div>
    </SectionLayout>

    <SectionLayout title="Part B: Founder(s) Detail">
      <div class="">
        <label class="form-label" for="teamMembers">
          Founders
          <span class="text-danger">*</span>
        </label>
        <LabelInputComponent label="Number of Founders" type="text" v-model:field="numFounders" :required="true"/>
        
        <div class="">
          <div class="mb-4" v-for="(founder, counter) in founders" v-bind:key="counter">
            <div class="d-flex">
              <div class="fw-bold">Founder {{ counter + 1 }}</div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <LabelInputComponent label="Name" type="text" v-model:field="founder.name" :required="true"/>
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Position within DLT Foundation" type="text" v-model:field="founder.position" :required="true"/>
              </div>
            </div>

            <LabelInputComponent label="KYC Verification" type="text" v-model:field="founder.kyc" :required="true"/>

            <div class="row">
              <div class="col-md-6">
                <LabelInputComponent label="Twitter Account (URL)" type="text" v-model:field="founder.twitter" :required="true"/>
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="LinkedIn Profile (URL)" type="text" v-model:field="founder.linkedin" :required="true"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <LabelInputComponent label="Email Address" type="text" v-model:field="founder.email" :required="true"/>
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Ethereum Address" type="text" v-model:field="founder.ethereum" :required="true"/>
              </div>
            </div>

            <div class="">
              <label for="document" class=""
                >CV</label
              >
              <input
                type="file"
                class="form-controls w-100"
                id="document"
              />
              <div class="text-secondary small">
                Brief CV or Biography (Please attach separate sheets if necessary)
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-5">
          <label class="form-label" for="teamMembers">
            Team Members
            <span class="text-danger">*</span>
          </label>
          <LabelInputComponent label="Number of Team Members" type="text" v-model:field="numTeamMembers" :required="true"/>

          <div class="">
            <div class="mb-2" v-for="(member, counter) in teamMembers" v-bind:key="counter">
              <label for="duration" class="me-2">{{ counter + 1 }}. Member - Name:</label>
              <input type="text" class="me-5 rounded" v-model.lazy="member.name" required />
              <label for="duration" class="me-2">Role:</label>
              <input type="text" class="me-2 rounded" v-model.lazy="member.role" required />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>

    <SectionLayout title="Part C: Objectives of the DLT Foundation">
      <LabelTextareaComponent label="Objectives of your DLT Foundation" 
              footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)" 
              type="text" v-model:field="objective" :required="true"/>
    </SectionLayout>

    
    <SectionLayout title="Part D: Specific Purpose">
      <LabelTextareaComponent label="Motivation of your DLT Foundation" 
              footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)" 
              type="text" v-model:field="motivation" :required="true"/>
    </SectionLayout>

    
    <SectionLayout title="Part E: Initial Assets">
      <LabelTextareaComponent label="Initial Assets of your DLT Foundation" 
              footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):" 
              type="text" v-model:field="assets" :required="true"/>
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
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'



export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
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
    console.log(project?.description)

  },
  data() {
    return {
      name: '',
      twitter: '',
      website: '',
      whitepaper: '',
      teamMembers: [
        {
          name: '',
          role: ''
        }
      ],
      founders: [
        {
          name: '',
          position: '',
          kyc: '',
          twitter: '',
          linkedin: '',
          ethereum: '',
          email: '',
          cv: ''
        }
      ],
      objective: '',
      motivation: '',
      assets: '',
      numFounders: '',
      numTeamMembers: ''
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
    ...mapStores(organizationsStore)
  },
  watch: {
    numFounders: function (val: string) {
      this.founders = []
      for (let i = 0; i < parseInt(val); i++) {
        this.founders.push({
          name: '',
          position: '',
          kyc: '',
          twitter: '',
          linkedin: '',
          ethereum: '',
          email: '',
          cv: ''
        })
      }
    },
    numTeamMembers: function (val: string) {
      this.teamMembers = []
      for (let i = 0; i < parseInt(val); i++) {
        this.teamMembers.push({
          name: '',
          role: ''
        })
      }
    }
  }

}
</script>
