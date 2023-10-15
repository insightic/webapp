<template>
  <div style="max-width: 960px">
    <SectionLayout title="Legal">
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class=""
            >Regulatory Status <span class="text-danger">*</span></label
          >
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">
            Provide any third-party or internal legal opinion, memorandum or analysis (if available)
            on the regulatory status of the token/network, including under U.S. federal, state or
            foreign securities laws and other financial product-related laws relating to the token.
          </div>
        </div>
      </div>
      <LabelRadioComponent
        label="Legal Action"
        hint="Has the asset, network, organization, or any individuals associated ever been the subject of an investigation or action by a law enforcement or regulatory body?"
        :options="['Yes', 'no']"
        class="mb-4 mt-3"
      />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelRadioComponent from '@/components/LabelRadioComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelRadioComponent
  }
}
</script>
