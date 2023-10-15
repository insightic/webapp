<template>
  <div id="app">
    <apexchart
      class="chart rounded p-3"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val: string) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.chart {
  background-color: #fff;
}
</style>
