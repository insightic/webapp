<template>
  <div class="card overflow-hidden">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="ms-auto text-secondary small" v-if="updateAt">
        Last Update: {{ formatDate(updateAt) }}
      </div>
    </div>
    <div class="flex-grow-1">
      <div class="table-responsive"></div>
    </div>
    <div>
      <apexchart type="pie" max-height="300px" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { formatDate } from '@/helpers'

export default {
  components: {
    apexchart: VueApexCharts
  },
  props: {
    title: { type: String, required: true },
    labels: { type: Array as PropType<string[]>, required: true },
    data: { type: Array as PropType<(string | number)[]>, required: true },
    updateAt: { type: Date, default: null }
  },
  data() {
    return {
      chartOptions: {
        labels: this.labels,
        tooltip: {
          theme: 'dark'
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
                height: 100
              }
            }
          }
        ]
      },
      series: this.data
    }
  },
  methods: {
    formatDate
  }
}
</script>
