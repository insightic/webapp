<template>
  <div style="max-width: 960px">
    <SectionLayout title="Compliance & Team">
      <LabelTextareaComponent
        label="Company Name"
        hint="Provide the full name of your company"
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Company Address"
        hint="Provide the company’s address of incorporation"
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Executives"
        hint="Number of Executives"
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent label="Executives (Name)" hint="" type="text" class="mb-4" />
      <LabelTextareaComponent label="Executives (Date of Birth)" hint="" type="text" class="mb-4" />
      <LabelTextareaComponent
        label="Executives (LinkedIn, GitHub, Twitter)"
        hint="User may add additional link if they have more."
        type="text"
        class="mb-4"
      />
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class="">Executives (CV) <span class="text-danger">*</span></label>
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">User may upload CV (in PDF format)</div>
        </div>
      </div>
      <LabelTextareaComponent
        label="Core Team Members"
        hint="Number of Core Team Members"
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent label="Core Team Members (Name)" hint="" type="text" class="mb-4" />
      <LabelTextareaComponent
        label="Core Team Members (Date of Birth)"
        hint=""
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Non-executive Beneficial Owners"
        hint="Number of Non-executive Beneficial Owners"
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Non-executive Beneficial Owners (Name)"
        hint=""
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Non-executive Beneficial Owners (Share Percentage)"
        hint=""
        type="text"
        class="mb-4"
      />
      <LabelTextareaComponent
        label="Non-executive Beneficial Owners (Linkedin, GitHub, Twitter)"
        hint=""
        type="text"
        class="mb-4"
      />
      <div class="col-md-12" style="margin-bottom: 40px">
        <div class="">
          <label for="document" class=""
            >Core Team Members (CV) <span class="text-danger">*</span></label
          >
          <input type="file" ref="whitepaper" class="form-controls w-100" id="document" />
          <div class="text-secondary small">User may upload CV (in PDF format)</div>
        </div>
      </div>
      <LabelTextareaComponent label="Government Connections" hint="" type="text" class="mb-4" />
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelTextareaComponent
  }
}
</script>
