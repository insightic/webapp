<template>
    <div style="max-width: 960px">
      <SectionLayout title="Overview">
        <LabelRadioComponent
            label="Program selection"
            hint="
            Select the program to apply
            "
            :options="['Sandbox', 'Direct / Full License']"
            class="mb-4 mt-3"
         />

        <LabelTextareaComponent
            label="Project Name"
            hint="
            Please enter the name of your project
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelRadioComponent
            label="Project Stage"
            hint="
            Please select the current stage of your project
            "
            :options="['Ideation', 'Proof of Concept (PoC)', 'Minimum Viable Product (MVP)', 'Launch', 'Grow', 'Mature']"
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Project Summary"
            hint="
            Please provide a one-sentence introduction to your project
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Pitch Deck Link"
            hint="
            Please provide a link to your Pitch Deck (DocSend/G-Doc)
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Pitch Deck (Together with above, lark doesnt allow combined so it is separated for now)"
            hint="
            upload your pitch deck
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelTextareaComponent
            label="Official Website"
            hint="
            Please enter the URL of your official website]
            "
            type="text" 
            class="mb-4 mt-3"
         />

         <LabelRadioComponent
            label="Token Launch"
            hint="
            Please select the current stage of your project
            "
            :options="['Yes', 'No', 'Not Sure']"
            class="mb-4 mt-3"
         />

         <LabelRadioComponent
            label="Token Circulation"
            hint="
            Has the token been circulated?
            "
            :options="['Yes', 'No']"
            class="mb-4 mt-3"
         />
         

         <LabelRadioComponent
            label="Prior Application"
            hint="
            Have you applied before?
            "
            :options="['Have you applied before?', 'No']"
            class="mb-4 mt-3"
         />

      </SectionLayout>
    </div>
  
  </template>
  
  <script lang="ts">
  import SectionLayout from '@/layouts/SectionLayout.vue'
  import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
  import LabelRadioComponent from '@/components/LabelRadioComponent.vue';

  export default {
    components: {
      SectionLayout,
      LabelTextareaComponent,
      LabelRadioComponent
    }
  }
  </script>
  