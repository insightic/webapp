<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Create New Application</h1>

      <div class="d-flex align-items-center align-items-start mb-3">
        <div
          class="me-2 nav-item"
          @click="current = 1"
          :class="current == 1 ? '' : 'text-secondary'"
        >
          <i v-if="current == 1" class="bi bi-1-square-fill"></i>
          <i v-else class="bi bi-1-square"></i>
          <span class="ms-2">Basic Information</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 2"
          :class="current == 2 ? '' : 'text-secondary'"
        >
          <i v-if="current == 2" class="bi bi-3-square-fill"></i>
          <i v-else class="bi bi-2-square"></i>
          <span class="ms-2">Objective</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 3"
          :class="current == 3 ? '' : 'text-secondary'"
        >
          <i v-if="current == 3" class="bi bi-4-square-fill"></i>
          <i v-else class="bi bi-3-square"></i>
          <span class="ms-2">Purpose</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="ms-2 nav-item"
          @click="current = 4"
          :class="current == 4 ? '' : 'text-secondary'"
        >
          <i v-if="current == 4" class="bi bi-5-square-fill"></i>
          <i v-else class="bi bi-4-square"></i>
          <span class="ms-2">Assets</span>
        </div>
      </div>

      <div>
        <div v-if="current == 1">
          <SectionCardLayout title="Overview">
            <div class="row">
              <div class="col-md-12">
                <LabelInputComponent
                  label="DLT Foundation Name"
                  type="text"
                  v-model:field="name"
                  :required="true"
                />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Twitter (URL)" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Website (URL)" type="text" :required="true" />
              </div>
              <div class="col-md-12">
                <LabelInputComponent label="Whitepaper (URL)" type="text" :required="true" />
              </div>
            </div>
          </SectionCardLayout>

          <SectionCardLayout title="Founders">
            <h6>Founder 1</h6>
            <div class="row">
              <div class="col-md-6">
                <LabelInputComponent label="Name" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent
                  label="Position within DLT Foundation"
                  type="text"
                  :required="true"
                />
              </div>
              <div class="col-md-12">
                <LabelInputComponent label="KYC Verification" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Twitter (URL)" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="LinkedIn (URL)" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Email" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Whitepaper (URL)" type="text" :required="true" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-sm btn-outline-primary">Add Another Founder</button>
              </div>
            </div>
          </SectionCardLayout>

          <SectionCardLayout title="Team Members">
            <div class="row">
              <div class="col-md-6">
                <LabelInputComponent label="Name" type="text" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Role" type="text" :required="true" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-sm btn-outline-primary">Add Another Team Member</button>
              </div>
            </div>
          </SectionCardLayout>

          <hr />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary me-2">Save Draft</button>
              <button class="btn btn-success ms-2">Save and Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import SectionCardLayout from '@/layouts/SectionCardLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'

export default {
  components: {
    NavFooterLayout,
    SectionCardLayout,
    LabelInputComponent
  },
  data() {
    return {
      current: 1,
      name: ''
    }
  }
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>
