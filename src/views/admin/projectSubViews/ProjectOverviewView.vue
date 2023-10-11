<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div class="d-flex w-100">
    <div
      style="max-width: 960px"
      class="pe-2 me-2"
      :class="commentPanel ? 'w-75 screen-height' : 'w-100'"
    >
      <SectionLayout title="Part A: DLT Foundation Details">
        <LabelInputComponent
          label="DLT Foundation Name"
          type="text"
          v-model:field="name"
          :disabled="true"
        />

        <LabelInputComponent
          label="Official Twitter Account (URL)"
          type="text"
          v-model:field="twitter"
          :disabled="true"
        />
        <LabelInputComponent
          label="Official Website (URL)"
          type="text"
          v-model:field="website"
          :disabled="true"
        />
        <LabelInputComponent
          label="Whitepaper (URL)"
          type="text"
          v-model:field="whitepaper"
          :disabled="true"
        />
        <div class="">
          <label for="document" class="">Whitepaper (File)</label>
          <input type="file" class="form-controls w-100" id="document" />
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
          <LabelInputComponent
            label="Number of Founders"
            type="text"
            v-model:field="numFounders"
            :disabled="true"
          />

          <div class="">
            <div class="mb-4" v-for="(founder, counter) in founders" v-bind:key="counter">
              <div class="d-flex">
                <div class="fw-bold">Founder {{ counter + 1 }}</div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Name"
                    type="text"
                    v-model:field="founder.name"
                    :disabled="true"
                  />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Position within DLT Foundation"
                    type="text"
                    v-model:field="founder.position"
                    :disabled="true"
                  />
                </div>
              </div>

              <LabelInputComponent
                label="KYC Verification"
                type="text"
                v-model:field="founder.kyc"
                :disabled="true"
              />

              <div class="row">
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Twitter Account (URL)"
                    type="text"
                    v-model:field="founder.twitter"
                    :disabled="true"
                  />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent
                    label="LinkedIn Profile (URL)"
                    type="text"
                    v-model:field="founder.linkedin"
                    :disabled="true"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Email Address"
                    type="text"
                    v-model:field="founder.email"
                    :disabled="true"
                  />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Ethereum Address"
                    type="text"
                    v-model:field="founder.ethereum"
                    :disabled="true"
                  />
                </div>
              </div>

              <div class="">
                <label for="document" class="">CV</label>
                <input type="file" class="form-controls w-100" id="document" />
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
            <LabelInputComponent
              label="Number of Team Members"
              type="text"
              v-model:field="numTeamMembers"
              :disabled="true"
            />

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
        <LabelTextareaComponent
          label="Objectives of your DLT Foundation"
          footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)"
          type="text"
          v-model:field="objective"
          :disabled="true"
        />
      </SectionLayout>

      <SectionLayout title="Part D: Specific Purpose">
        <LabelTextareaComponent
          label="Motivation of your DLT Foundation"
          footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)"
          type="text"
          v-model:field="motivation"
          :disabled="true"
        />
      </SectionLayout>

      <SectionLayout title="Part E: Initial Assets">
        <LabelTextareaComponent
          label="Initial Assets of your DLT Foundation"
          footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):"
          type="text"
          v-model:field="assets"
          :disabled="true"
        />
      </SectionLayout>

      <button type="button" class="btn btn-primary" @click="commentPanel = !commentPanel">
        Comment
      </button>
    </div>
    <div
      v-if="commentPanel"
      id="draggable-container"
      class="rounded mx-3 screen-height"
      :class="commentPanel ? 'comments' : ''"
    >
      <!-- <div id="draggable-header" @mousedown="dragMouseDown"> -->
      <ProjectCommentView />
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'

import LabelInputComponent from '@/components/admin/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

import ProjectCommentView from '@/views/admin/projectSubViews/ProjectCommentView.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
    ProjectCommentView
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
      numTeamMembers: '',
      commentPanel: false,
      positions: {
        clientX: undefined || 0,
        clientY: undefined || 0,
        movementX: 0,
        movementY: 0
      }
    }
  },
  methods: {
    dragMouseDown: function (event: MouseEvent) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event: MouseEvent) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      console.log((this.$refs.draggableContainer as HTMLDivElement).offsetLeft)
      ;(this.$refs.draggableContainer as HTMLDivElement).style.left = event.clientX + 'px'
      ;(this.$refs.draggableContainer as HTMLDivElement).style.top =
        (this.$refs.draggableContainer as HTMLDivElement).offsetTop -
        this.positions.movementY +
        'px'
    },
    closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
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

<style scoped>
.screen-height {
  height: 75vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
#draggable-header {
  z-index: 10;
}
</style>
