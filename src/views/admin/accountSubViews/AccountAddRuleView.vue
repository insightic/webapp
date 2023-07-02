<template>
  <div class="text-secondary mb-4">Add new rule to rule set</div>

  <div class="h4 my-3">Rule</div>
  <LabelSelectComponent
    label="Method"
    :options="methodNames"
    placeholder="Select a method"
    @update:field="onChange"
  />

  <div v-if="ruleDescription">
    <div class="h4 my-3">Parameters</div>
    <div v-for="(param, idx) in ruleDescription.Params" :key="idx">
      <LabelInputComponent
        :label="param.Name"
        :placeholder="param.Description"
        :required="param.Required"
        type="text"
      />
    </div>
  </div>

  <button v-if="ruleDescription" type="button" class="btn btn-primary my-3">Add Rule</button>
</template>

<script lang="ts">
import { getRuleTemplates, type RuleDescription } from '@/api'
import LabelSelectComponent from '@/components/LabelSelectComponent.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'

export default {
  components: {
    LabelSelectComponent,
    LabelInputComponent
  },
  async created() {
    this.ruleDescriptions = await getRuleTemplates()
  },
  data() {
    return {
      ruleDescriptions: [] as RuleDescription[],
      ruleDescription: null as RuleDescription | null
    }
  },
  computed: {
    methodNames(): string[] {
      return this.ruleDescriptions.map(
        (ruleDescription) => `${ruleDescription.Name} - ${ruleDescription.Description}`
      )
    }
  },
  methods: {
    onChange(value: string) {
      const ruleDescription = this.ruleDescriptions.find(
        (ruleDescription) => `${ruleDescription.Name} - ${ruleDescription.Description}` === value
      )
      if (ruleDescription) {
        this.ruleDescription = ruleDescription
      }
    }
  }
}
</script>
