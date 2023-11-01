<template>
  <div class="row">
    <DashboardSectionLayout bg-color="white">
      <ItemDetails></ItemDetails>
    </DashboardSectionLayout>
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
        <SparklineChart />
      </DashboardSectionLayout>
    </div>
  </div>

  <DashboardSectionLayout bg-color="white">
    <TableChart />
  </DashboardSectionLayout>
</template>

<script lang="ts">
import DashboardSectionLayout from '@/layouts/DashboardSectionLayout.vue'
import RadarChart from '@/components/graphs/RadarChart.vue'
import RadialBarChart from '@/components/graphs/RadialBarChart.vue'
import SparklineChart from '@/components/graphs/SparklineChart.vue'
import TableChart from '@/components/graphs/TableChart.vue'
import ItemDetails from '@/components/dashboard/ItemDetailsComponent.vue'

export default {
  components: {
    DashboardSectionLayout,
    RadarChart,
    RadialBarChart,
    SparklineChart,
    TableChart,
    ItemDetails
  },
  async created() {},
  data() {
    return {}
  },
  methods: {}
}
</script>
