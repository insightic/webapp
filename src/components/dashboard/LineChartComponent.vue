<template>
  <div class="card overflow-hidden">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
    </div>
    <div class="flex-grow-1">
      <div class="table-responsive">
        <table class="table card-table">
          <thead>
            <tr>
              <th>Highest</th>
              <th>Lowest</th>
              <th>Mean</th>
              <th>Median</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ highest }}</td>
              <td>{{ lowest }}</td>
              <td>{{ mean }}</td>
              <td>{{ median }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="height: 192px">
      <apexchart
        style="height: 196px"
        height="196px"
        type="area"
        :series="[{ name: title, data: data }]"
        :options="{
          chart: {
            sparkline: { enabled: true },
            animations: { enabled: false }
          },
          dataLabels: { enabled: false },
          fill: { opacity: 0.16, type: 'solid' },
          stroke: {
            width: 2,
            lineCap: 'round',
            curve: 'smooth'
          },
          labels: labels,
          colors: ['#0054a6']
        }"
      ></apexchart>
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
    labels: { type: Array, required: true },
    data: { type: Array as PropType<number[]>, required: true }
  },
  computed: {
    highest: function () {
      return Math.max(...this.data)
    },
    lowest: function () {
      return Math.max(...this.data)
    },
    mean: function () {
      return this.data.reduce((a, b) => a + b) / this.data.length
    },
    median: function () {
      const sorted = Array.from(this.data).sort((a, b) => a - b)
      const middle = Math.floor(sorted.length / 2)

      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2
      }
      return sorted[middle]
    }
  }
}
</script>
