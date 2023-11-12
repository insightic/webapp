<template>
  <div class="card overflow-hidden">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="subheader">{{ title }}</div>
        <div class="ms-auto lh-1">
          <div class="dropdown">
            <a
              class="dropdown-toggle text-secondary"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Last 7 days</a
            >
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item active" href="#">Last 7 days</a>
              <a class="dropdown-item" href="#">Last 30 days</a>
              <a class="dropdown-item" href="#">Last 3 months</a>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-baseline">
        <div class="h1 mt-2 mb-0 me-2">
          <span class="me-4" style="font-size: 2.5rem" :class="{
            'text-green': grade[0] === 'A',
            'text-warning': grade[0] === 'B',
            'text-danger': grade[0] === 'C'
          }">{{ grade }}</span> 85
        </div>
        <div class="me-auto">
          <span class="text-green d-inline-flex align-items-center">
            +5
            <IconTrendingUp stroke-width="1" class="me-2" />
          </span>
        </div>
      </div>
      <div class="d-flex align-items-baseline">
        <div class="small mb-0 me-2">Highest</div>
        <div class="me-2">
          <span class="text-green d-inline-flex align-items-center"> 85 </span>
        </div>
        <div class="small mb-0 me-2">Lowest</div>
        <div class="me-auto">
          <span class="text-red d-inline-flex align-items-center"> 40 </span>
        </div>
      </div>
    </div>
    <div style="height: 58px">
      <apexchart
        style="height: 60px"
        type="area"
        height="60px"
        :series="[
          {
            name: 'Score',
            data: [
              37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54,
              43, 19, 46, 39, 62, 51, 35, 41, 67
            ]
          }
        ]"
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
          xaxis: {
            labels: { padding: 0 },
            tooltip: { enabled: false },
            axisBorder: { show: false },
            type: 'datetime'
          },
          yaxis: {
            labels: { padding: 4 }
          },
          labels: [
            '2020-06-20',
            '2020-06-21',
            '2020-06-22',
            '2020-06-23',
            '2020-06-24',
            '2020-06-25',
            '2020-06-26',
            '2020-06-27',
            '2020-06-28',
            '2020-06-29',
            '2020-06-30',
            '2020-07-01',
            '2020-07-02',
            '2020-07-03',
            '2020-07-04',
            '2020-07-05',
            '2020-07-06',
            '2020-07-07',
            '2020-07-08',
            '2020-07-09',
            '2020-07-10',
            '2020-07-11',
            '2020-07-12',
            '2020-07-13',
            '2020-07-14',
            '2020-07-15',
            '2020-07-16',
            '2020-07-17',
            '2020-07-18',
            '2020-07-19'
          ],
          colors: ['#0054a6'],
          legend: {
            show: true
          }
        }"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { IconTrendingUp } from '@tabler/icons-vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    IconTrendingUp,
    apexchart: VueApexCharts
  },
  props: {
    title: { type: String, required: true },
    grade: { type: String, required: true },
    PreviousData: { type: String },
    NowData: { type: String },
    ChangeData: { type: String }
  }
}
</script>
