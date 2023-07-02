<template>
  <div class="text-secondary mb-4">Add new rule to rule set</div>

  <LabelSelectComponent label="Method Name" :options="methodNames" placeholder="Select a method" />
</template>

<script lang="ts">
import { getRuleTemplates, type RuleDescription } from '@/api'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'

export default {
  components: {
    LabelSelectComponent
  },
  async created() {
    this.ruleDescriptions = await getRuleTemplates()
    console.log(this.ruleDescriptions)
  },
  data() {
    return {
      ruleDescriptions: [] as RuleDescription[]
    }
  },
  computed: {
    methodNames(): string[] {
      return this.ruleDescriptions.map((ruleDescription) => ruleDescription.Name)
    }
  }
}
</script>
