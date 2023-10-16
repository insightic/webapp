<template>
  <div style="max-width: 960px">
    <SectionLayout title="Risk Management">
      <LabelTextFileURLComponent
        label="Security Assessment"
        footnote="Please upload Auditing report."
      />

      <LabelTextFileURLComponent label="Bug Bounties" footnote="Please upload bug bounties." />

      <LabelRadioComponent
        label="Are there any roles in the asset that allow the holder “superuser” privileges, enabling an individual user, often with a single key, to affect the state of the entire asset (e.g. token upgrade roles, seize/destroy roles, mint roles)?"
        :options="['Yes', 'No']"
      />

      <LabelTextFileURLComponent
        label="Superuser Privileges Details"
        footnote="Request: (1) Enumerate all superuser privileges, accounts, and roles. (2) Decentralization
            of privileges management. (3) Execution Thresholds for Superuser Keys. (4) Management and
            Control of Superuser Keys. (5) Generation of Superuser Keys."
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'
import LabelTextFileURLComponent from '@/components/LabelTextFileURLComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelRadioComponent,
    LabelTextFileURLComponent
  }
}
</script>
