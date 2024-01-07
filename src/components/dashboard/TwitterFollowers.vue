<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>

      <VueApexCharts height="196px" type="area" :series="data" :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type PropType } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  labels: {
    type: Array as PropType<string[]>,
    required: true
  },
  data: {
    type: Array as PropType<Array<{ name: string; data: Array<number> }>>,
    required: true
  }
})

const chartOptions = ref({
  chart: {
    toolbar: {
      show: false
    },
    animations: {
      enabled: false
    },
    stacked: true
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  stroke: {
    width: 2,
    lineCap: 'round',
    curve: 'smooth'
  },
  xaxis: {
    labels: {
      padding: 0
    },
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false
    },
    type: 'datetime'
  },
  yaxis: {
    labels: {
      padding: 4
    }
  },
  labels: props.labels,
  colors: ['#206bc4', '#206bc4aa', '#2fb344aa'],
  legend: {
    show: false
  }
})
</script>
