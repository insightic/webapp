<template>
  <div id="app">
    <apexchart
      class="chart rounded"
      width="120%"
      type="radialBar"
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
      series: [76],
      options: {
        labels: ['Security Score'],
        chart: {
          type: 'radialBar',
          offsetY: -15,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: '#e7e7e7',
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: '1rem'
              },
              value: {
                offsetY: -40,
                fontSize: '200%'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        }
      }
    }
  }
}
</script>

<style>
.chart {
  background-color: transparent;
}
</style>
