<template>
  <div style="max-width: 960px">
    <SectionLayout title="Risk Management">
      <LabelTextFileURLComponent
        label="Security Assessment"
        description="Please upload Auditing report."
      />

      <LabelTextFileURLComponent label="Bug Bounties" description="Please upload bug bounties." />

      <LabelSwitchComponent
        label="Superuser Privileges"
        description="Are there any roles in the asset that allow the holder “superuser” privileges, enabling an individual user, often with a single key, to affect the state of the entire asset (e.g. token upgrade roles, seize/destroy roles, mint roles)?"
      />

      <LabelTextFileURLComponent
        label="Superuser Privileges Details"
        description="Request: <br/><br/>(1) Enumerate all superuser privileges, accounts, and roles.<br/>(2) Decentralization
            of privileges management.<br/>(3) Execution Thresholds for Superuser Keys.<br/>(4) Management and
            Control of Superuser Keys.<br/>(5) Generation of Superuser Keys."
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

export default {
  components: {
    SectionLayout,
    LabelTextFileURLComponent,
    LabelSwitchComponent,
    SaveNextButtonComponent
  },
  methods: {
    data() {
      return {}
    },
    save() {
      this.$emit('save', this.data())
    },
    next() {
      this.$emit('next', this.data())
    }
  }
}
</script>
