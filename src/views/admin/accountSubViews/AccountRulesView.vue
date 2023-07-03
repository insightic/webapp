<template>
  <div class="text-secondary mb-4">Rules that being executed</div>

  <button type="button" class="btn btn-primary my-3" @click="createRule()">Add New Rule</button>

  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col" width="20%">Name</th>
        <th scope="col" width="25%">Description</th>
        <th scope="col" width="20%">Method</th>
        <th scope="col" width="40%">Parameters</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rule, idx) in rules" :key="idx">
        <td>{{ rule.Name }}</td>
        <td>{{ rule.Description }}</td>
        <td>{{ rule.Method }}</td>
        <td>{{ rule.Params }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { getRules, type Rule } from '@/api'

export default {
  async created() {
    this.rules = await getRules()
  },
  data() {
    return {
      rules: [] as Rule[]
    }
  },
  methods: {
    createRule() {
      this.$router.push({ query: { view: 'Add Rule' } })
    }
  }
}
</script>
