<template>
  <div class="text-secondary mb-4">Add new rule to rule set</div>

  <div class="h4 my-3">Rule</div>
  <LabelInputComponent
    label="Name"
    placeholder="Name of the rule"
    :required="true"
    type="text"
    v-model:field="name"
  />
  <LabelInputComponent
    label="Description"
    placeholder="Description of the rule"
    :required="true"
    type="text"
    v-model:field="description"
  />
  <LabelSelectComponent
    label="Method"
    :options="methodNames"
    placeholder="Select a method"
    @update:field="onChange"
    v-model:field="method"
  />

  <div v-if="ruleDescription">
    {{ ruleDescription.Description }}
  </div>

  <div v-if="ruleDescription">
    <div class="h4 my-3">Parameters</div>
    <div v-for="(param, idx) in ruleDescription.Params" :key="idx">
      <LabelInputComponent
        :label="param.Name"
        :placeholder="param.Description"
        :required="param.Required"
        type="text"
        v-model:field="params[param.Name]"
      />
    </div>
  </div>

  <button v-if="ruleDescription" type="button" class="btn btn-primary my-3" @click="addRule()">
    Add Rule
  </button>
</template>

<script lang="ts">
import { toRaw } from 'vue'
import { getRuleTemplates, createRule, type RuleDescription } from '@/api'
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
      name: '',
      description: '',
      method: '',
      params: {} as { [key: string]: any },
      ruleDescriptions: [] as RuleDescription[],
      ruleDescription: null as RuleDescription | null
    }
  },
  computed: {
    methodNames(): string[] {
      return this.ruleDescriptions.map((ruleDescription) => `${ruleDescription.Name}`)
    }
  },
  methods: {
    onChange(value: string) {
      const ruleDescription = this.ruleDescriptions.find(
        (ruleDescription) => `${ruleDescription.Name}` === value
      )
      if (ruleDescription) {
        this.ruleDescription = ruleDescription
      }
    },
    async addRule() {
      const rule = {
        Name: this.name,
        Description: this.description,
        Method: this.method,
        Params: this.params
      }
      await createRule(rule)
      alert('Rule added!')
    }
  }
}
</script>
