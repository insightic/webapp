<template>
  <div class="card overflow-hidden">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="ms-auto text-secondary small" v-if="updateAt">
        Last Update: {{ formatDate(updateAt) }}
      </div>
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
        v-if="data.length > 0 && data[0].data.length > 0"
        style="height: 196px"
        height="196px"
        :type="type"
        :series="data"
        :options="{
          chart: {
            sparkline: { enabled: true },
            animations: { enabled: false }
          },
          tooltip: {
            theme: 'dark'
          },
          legend: {
            show: false
          },
          dataLabels: { enabled: false },
          fill: { opacity: 0.16, type: 'solid' },
          stroke: {
            width: 2,
            lineCap: 'round',
            curve: 'smooth'
          },
          labels: labels,
          colors: ['#0054a6', '#43ff64']
        }"
      ></apexchart>
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
    type: { type: String, default: 'area' },
    title: { type: String, required: true },
    labels: { type: Array as PropType<string[][]>, required: true },
    data: { type: Array as PropType<{ name: string; data: number[] }[]>, required: true },
    updateAt: { type: Date, default: null }
  },
  computed: {
    highest: function () {
      const values = this.data
        .map((d) => d.data)
        .map((d) => (d.length > 0 ? Math.max(...d) : 0))
        .map((d) => d.toFixed(2))
      return values.join('/')
    },
    lowest: function () {
      const values = this.data
        .map((d) => d.data)
        .map((d) => (d.length > 0 ? Math.min(...d) : 0))
        .map((d) => d.toFixed(2))
      return values.join('/')
    },
    mean: function () {
      const values = this.data
        .map((d) => d.data)
        .map((d) => (d.length > 0 ? d.reduce((a, b) => a + b) / d.length : 0))
        .map((d) => d.toFixed(2))
      return values.join('/')
    },
    median: function () {
      const findMedian = function (array: Array<number>) {
        const sorted = Array.from(array).sort((a, b) => a - b)
        const middle = Math.floor(sorted.length / 2)

        if (sorted.length % 2 === 0) {
          return (sorted[middle - 1] + sorted[middle]) / 2
        }
        return sorted[middle]
      }

      const values = this.data
        .map((d) => d.data)
        .map((d) => (d.length > 0 ? findMedian(d) : 0))
        .map((d) => d.toFixed(2))
      return values.join('/')
    }
  },
  methods: {
    formatDate
  }
}
</script>
