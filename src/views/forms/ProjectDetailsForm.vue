<template>
    <div style="max-width: 960px">
      <SectionLayout title="Project Details">
        <LabelTextareaComponent
            label="Project summary"
            hint="
            Please provide a detailed summary of your project.
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Category and Classification"
            hint="
            Please select all the categories that your project.
            "
            type="text"
            class="mb-4" 
         />

         <LabelTextareaComponent
            label="Challenges and Roadblocks"
            hint="
            Please describe the challenges and difficulties while developing the project.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Solutions and Innovation"
            hint="
            Please describe the solutions that solves the business problem.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Target Audience"
            hint="
            Please list down the target audience of your products.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Impacts / Benefits"
            hint="
            Please provide a detailed summary on the impacts and benefits brought to the target audience listed down in question 5.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Business Model"
            hint="
            Please provide a detailed summary on the following: <br/>
            a. Current and planned revenue streams and usage. <br/>
            b. Is the team working on multiple projects at the same time?
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Product Stage"
            hint="
            Please list out the roadmap of your product.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Roadmap"
            hint="
            Please list out the roadmap of your company.
            "
            type="text" 
         />

         <LabelTextareaComponent
            label="Other Details"
            type="text" 
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
  