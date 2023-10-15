<template>
  <div style="max-width: 960px">
    <SectionLayout title="Risk Management">
      <LabelFileUploadComponent
        label="Security Assessment"
        footnote="Please upload Auditing report."
      />
      <LabelFileUploadComponent label="Security risks" footnote="Please upload Bug bounties." />
      <LabelRadioComponent
        label="Are there any roles in the asset that allow the holder “superuser” privileges, enabling an individual user, often with a single key, to affect the state of the entire asset (e.g. token upgrade roles, seize/destroy roles, mint roles)?"
        :options="['Yes', 'No']"
      />
      <LabelTextareaComponent
        label="Others"
        hint="Based on the identified risks and security issues, illustrate the strategies and measures that have been instituted to mitigate these risks. Submit structured mitigation results or related documentation that outlines the adopted strategies, their effectiveness, and any additional steps planned or underway to address the remaining risks. If available, incorporate any third-party validations or attestations regarding the enacted mitigation strategies."
        type="text"
      />
      <LabelFileUploadComponent
        label="Enumeration of Superuser Privileges"
        footnote="Request: (1) Enumerate all superuser privileges, accounts, and roles. (2) Decentralization
            of privileges management. (3) Execution Thresholds for Superuser Keys. (4) Management and
            Control of Superuser Keys. (5) Generation of Superuser Keys."
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'
import LabelFileUploadComponent from '@/components/LabelFileUploadComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelRadioComponent,
    LabelFileUploadComponent
  }
}
</script>
