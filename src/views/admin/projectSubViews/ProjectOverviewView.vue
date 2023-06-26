<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div class="d-flex w-100">
    <div style="max-width: 960px" class="pe-2 me-2" :class="commentPanel ? 'w-75 screen-height' : 'w-100'">
      <SectionLayout title="Basic Information">
        <LabelInputComponent label="Project Name" type="text" v-model:field="name" :disabled="true"/>
        <LabelInputComponent
          label="Project Type"
          type="text"
          v-model:field="projectType"
          footnote="Please choose correct type of your project."
          :disabled="true"
        />
        <LabelTextareaComponent label="Project Description" v-model:field="desc" :disabled="true"/>
        <LabelInputComponent label="Project On Chain Address" type="text" :disabled="true"/>
      </SectionLayout>

      <SectionLayout title="Company Information">
        <div class="row">
          <div class="col-md-6">
            <LabelInputComponent label="Founder" type="text" :disabled="true"/>
          </div>
          <div class="col-md-6">
            <LabelInputComponent label="Team Name" type="text" :disabled="true" />
          </div>
        </div>
        <LabelInputComponent label="Email Address" type="email" :disabled="true"/>
        <LabelTextareaComponent label="Company Address" :disabled="true"/>
      </SectionLayout>

      <SectionLayout title="Community">
        <div class="row">
          <div class="col-6">
            <LabelInputComponent label="GitHub" type="text" :disabled="true"/>
          </div>
          <div class="col-6">
            <LabelInputComponent label="Telegram" type="text" :disabled="true"/>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <LabelInputComponent label="Discord" type="text" :disabled="true"/>
          </div>
          <div class="col-6">
            <LabelInputComponent label="Twitter" type="text" :disabled="true"/>
          </div>
        </div>
      </SectionLayout>

      <button type="button" class="btn btn-primary" @click="commentPanel = !commentPanel">Comment</button>
    </div>
    <div v-if="commentPanel" id="draggable-container" class="rounded mx-3 screen-height" :class="commentPanel ? 'comments' : ''">
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
      ],
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
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      console.log((this.$refs.draggableContainer as HTMLDivElement).offsetLeft);
      (this.$refs.draggableContainer as HTMLDivElement).style.left = event.clientX + 'px';
      (this.$refs.draggableContainer as HTMLDivElement).style.top = ((this.$refs.draggableContainer as HTMLDivElement).offsetTop - this.positions.movementY) + 'px';
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    }
  },
  computed: {
    ...mapStores(organizationsStore),
  }
}
</script>

<style scoped>
.screen-height {
  height: 75vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
#draggable-container {
  /* position: absolute;
  z-index: 9;
  right:0;
  top:0; */
}
#draggable-header {
  z-index: 10;
}
</style>

