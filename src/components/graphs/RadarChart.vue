<template>
	<div id="app">
		<apexchart class="chart rounded" width="120%" type="radar" :options="options" :series="series"></apexchart>
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
      series: [
        {
          name: "series",
          data: [70, 98, 95.52, 96.04, 95.04, 80.12],
        },
      ],
      options: {
        xaxis: {
          categories:[
            "Health",
            "Resillience",
            "Strength",
            "Stability",
            "Trust",
            "Security"
          ],
          fontSize: '1rem',
        },
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          },
          toolbar: {
            show: false,
          },
        },
        title: {
          text: 'Security Score',
          align: 'center'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        }
      },
    };
  },
};

</script>

<style>
.chart {
    background-color: #fff;
}
</style>