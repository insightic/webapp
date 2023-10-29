<template>
  <div style="max-width: 960px">
    <SectionLayout title="Risk Management">
      <LabelTextFileURLComponent
        label="Security Assessment"
        description="Please upload Auditing report."
        v-model:field="securityAssessment"
      />

      <LabelTextFileURLComponent
        label="Bug Bounties"
        description="Please upload bug bounties."
        v-model:field="bugBounties"
      />

      <LabelSwitchComponent
        label="Superuser Privileges"
        description="Are there any roles in the asset that allow the holder “superuser” privileges, enabling an individual user, often with a single key, to affect the state of the entire asset (e.g. token upgrade roles, seize/destroy roles, mint roles)?"
        v-model:field="superuserPrivileges"
      />

      <LabelTextFileURLComponent
        v-if="superuserPrivileges"
        label="Superuser Privileges Details"
        description="Request: <br/><br/>(1) Enumerate all superuser privileges, accounts, and roles.<br/>(2) Decentralization
            of privileges management.<br/>(3) Execution Thresholds for Superuser Keys.<br/>(4) Management and
            Control of Superuser Keys.<br/>(5) Generation of Superuser Keys."
        v-model:field="superuserPrivilegesDetails"
      />

      <SaveNextButtonComponent @save="save" @next="next" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import SaveNextButtonComponent from '@/components/SaveNextButtonComponent.vue'
import type { TextFilesObject } from '@/api'

export default {
  props: ['data'],
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    LabelSwitchComponent,
    SaveNextButtonComponent
  },
  data() {
    return {
      securityAssessment: null as TextFilesObject | null,
      bugBounties: null as TextFilesObject | null,
      superuserPrivileges: false,
      superuserPrivilegesDetails: null as TextFilesObject | null
    }
  },
  methods: {
    payload() {
      return {
        SecurityAssessment: this.securityAssessment,
        BugBounties: this.bugBounties,
        SuperuserPrivileges: this.superuserPrivileges,
        SuperuserPrivilegesDetails: this.superuserPrivilegesDetails
      }
    },
    save() {
      this.$emit('save', this.payload())
    },
    next() {
      this.$emit('next', this.payload())
    }
  },
  activated() {
    if (!this.data) return
    this.securityAssessment = this.data['SecurityAssessment']
    this.bugBounties = this.data['BugBounties']
    this.superuserPrivileges = this.data['SuperuserPrivileges']
    this.superuserPrivilegesDetails = this.data['SuperuserPrivilegesDetails']
  }
}
</script>
