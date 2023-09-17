<template>
  <div class="row">
    <div class="col-7">
      <DashboardSectionLayout bg-color="white">
        <div class="row">
          <div class="col-5 d-flex align-items-center">
            <RadialBarChart />
          </div>
          <div class="col-7">
            <RadarChart />
          </div>
        </div>
      </DashboardSectionLayout>
    </div>

    <div class="col-5">
      <DashboardSectionLayout bg-color="white">
        <Sparkline />
      </DashboardSectionLayout>
    </div>
  </div>

  <DashboardSectionLayout bg-color="white">
    <TableChart />
  </DashboardSectionLayout>

</template>

<script lang="ts">
import DashboardSectionLayout from '@/layouts/DashboardSectionLayout.vue'
import PieChart from '@/components/graphs/PieChart.vue'
import BarChart from '@/components/graphs/BarChart.vue'
import LineChart from '@/components/graphs/LineChart.vue'
import RadarChart from '@/components/graphs/RadarChart.vue'
import RadialBarChart from '@/components/graphs/RadialBarChart.vue'
import Sparkline from '@/components/graphs/Sparkline.vue'
import TableChart from '@/components/graphs/TableChart.vue'

export default {
  components: {
    DashboardSectionLayout,
    RadarChart,
    RadialBarChart,
    Sparkline,
    TableChart
  },
  async created() {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
