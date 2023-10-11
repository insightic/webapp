<template>
    <div style="max-width: 960px">
      <SectionLayout title="Investors">
        <LabelTextareaComponent
            label="Key Incubators, Advisors, and Major Investors/Partner"
            hint="
            Please share a list of your key incubators, advisors, and major investors or partners, specifying involvement in tokens and equity.
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Valuation of Each Funding Round"
            hint="
            Please share the valuation (Fully Diluted Valuation if possible) of each round of funding your project has undergone.
            [Please provide detailed information]
            "
            type="text"
            class="mb-4" 
         />

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
  