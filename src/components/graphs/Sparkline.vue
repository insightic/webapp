<template>
  <div class="row">
    <div class="col-md-6">
      <div id="chart-spark1">
        <apexchart type="area" height="160" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
    <div class="col-md-6">
      <div id="chart-spark2">
        <apexchart type="area" height="160" :options="chartOptionsSpark2" :series="seriesSpark2"></apexchart>
      </div>
    </div>

  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
      }],
      chartOptions: {
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$424,652',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Sales',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      },
      
      seriesSpark2: [{
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
      }],
      chartOptionsSpark2: {
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$235,312',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Expenses',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      },
         
    }
  }
};

</script>

<style>
.chart {
    background-color: transparent;
}
</style>