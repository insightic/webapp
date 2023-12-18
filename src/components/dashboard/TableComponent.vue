<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="ms-auto text-secondary small" v-if="updateAt">Last Update: {{ updateAt }}</div>
    </div>
    <div class="table-responsive" style="max-height: 500px">
      <table class="table card-table">
        <thead class="sticky-top">
          <tr>
            <th v-for="(col, idx) in columns" :key="idx">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIdx) in data" :key="rowIdx">
            <td v-for="(col, colIdx) in row" :key="colIdx" v-html="col"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  updateAt: {
    type: String,
    default: ''
  }
})
</script>
