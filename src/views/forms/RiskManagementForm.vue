<template>
  <div style="max-width: 960px">
    <SectionLayout title="Risk Management">
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class=""
            >Security Assessment <span class="text-danger">*</span></label
          >
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">Please upload Auditing report</div>
        </div>
      </div>
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class="">Security risks <span class="text-danger">*</span></label>
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">Please upload Bug bounties</div>
        </div>
      </div>
      <LabelRadioComponent
        label="Are there any roles in the asset that allow the holder “superuser” privileges, enabling an individual user, often with a single key, to affect the state of the entire asset (e.g. token upgrade roles, seize/destroy roles, mint roles)?"
        hint=""
        :options="['Yes', 'no']"
        class="mb-4 mt-3"
      />
      <LabelTextareaComponent
        label="Others"
        hint="Based on the identified risks and security issues, illustrate the strategies and measures that have been instituted to mitigate these risks. Submit structured mitigation results or related documentation that outlines the adopted strategies, their effectiveness, and any additional steps planned or underway to address the remaining risks. If available, incorporate any third-party validations or attestations regarding the enacted mitigation strategies."
        type="text"
        class="mb-4"
      />
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class=""
            >Enumeration of Superuser Privileges <span class="text-danger">*</span></label
          >
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">
            Request: (1)Enumerate all superuser privileges, accounts, and roles. (2)Decentralization
            of privileges management. (3)Execution Thresholds for Superuser Keys. (4)Management and
            Control of Superuser Keys. (5)Generation of Superuser Keys.
          </div>
        </div>
      </div>
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent,
    LabelRadioComponent
  }
}
</script>
