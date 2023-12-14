<template>
  <div class="card overflow-hidden">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
    </div>
    <div class="flex-grow-1">
      <div class="table-responsive"></div>
    </div>
    <div style="height: 500px">
      <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  props: {
    title: { type: String, required: true },
    labels: { type: Array as PropType<string[]>, required: true },
    data: { type: Array as PropType<(string | number)[]>, required: true }
  },
  data() {
    return {
      chartOptions: {
        labels: this.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
                height: 100
              },
              legend: {
                position: 'middle'
              }
            }
          }
        ]
      },
      series: this.data
    }
  }
}
</script>
