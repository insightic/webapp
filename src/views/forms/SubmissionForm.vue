<template>
    <div style="max-width: 960px">
      <SectionLayout title="Submission">
        <LabelTextareaComponent
            label="Notification email"
            hint="
            Please provide the emails that we can contact you regarding the outcome.
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Disclaimer"
            hint="
            Please include any legal disclaimers, terms, and conditions, or other relevant information here.
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
  