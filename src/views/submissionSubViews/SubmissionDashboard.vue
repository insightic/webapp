<template>
  <div class="mb-4">
    <h3>Scores</h3>
    <div class="row">
      <div class="col-3">
        <ScoreBoard />
      </div>
      <div class="col-7">
        <LineChart />
      </div>
      <div class="col-2">
        <div class="h-100">
          <div style="background-color: var(--bs-success); height: 50%" class="w-100">
            <div>Highest</div>
            <div>71</div>
          </div>
          <div style="background-color: var(--bs-success); height: 50%" class="w-100">
            <div>Lowest</div>
            <div>40</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4">
    <h3>Security Assurance</h3>
    <div class="row mb-3">
      <div class="col-3">
        <ScoreBoard />
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table text-center" style="border-color: black">
          <thead>
            <tr>
              <th>Security Audit Status</th>
              <th>KYT Service Providers</th>
              <th>Security Auditors</th>
              <th>Incident Response Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pass</td>
              <td>Internal Chainalysis Elliptic</td>
              <td>Certik Hacken</td>
              <td>Ready</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="w-100 h-100 table text-center" style="border-color: black">
          <thead>
            <tr>
              <th>Security Audits</th>
              <th>Number of Incidents</th>
              <th>Total Loss</th>
              <th>Critical Issues</th>
              <th>Non-Critical Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>1</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>1</div>
                <div>in 6 months</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>5</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>0</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>0</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>1</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>17</div>
                <div>in 2 years</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="mb-4">
    <h3>Regulatory Compliance</h3>
    <div class="row mb-4">
      <div class="col-3">
        <ScoreBoard />
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table text-center" style="border-color: black">
          <thead>
            <tr>
              <th>Registration Status</th>
              <th>Age</th>
              <th>Auditor</th>
              <th>Audit Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active</td>
              <td>3 Years<br />32 days</td>
              <td>Ernst & Young - Middle East</td>
              <td>Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="w-100 h-100 table text-center" style="border-color: black">
          <thead>
            <tr>
              <th>Charter Score</th>
              <th>Issues</th>
              <th>Licensed Vendors</th>
              <th>Unlicensed Vendors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                95
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>1</div>
                <div>in 6 months</div>
              </td>
            </tr>
            <tr>
              <td>
                Last update 1 June 2023
              </td>
              <td>
                <div>4</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>0</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>3</div>
                <div>in 2 years</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- <div class="row">
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
  </DashboardSectionLayout> -->
</template>

<script lang="ts">
import DashboardSectionLayout from '@/layouts/DashboardSectionLayout.vue'
import LineChart from '@/components/graphs/LineChart.vue'
import RadarChart from '@/components/graphs/RadarChart.vue'
import RadialBarChart from '@/components/graphs/RadialBarChart.vue'
import SparklineChart from '@/components/graphs/SparklineChart.vue'
import TableChart from '@/components/graphs/TableChart.vue'
import ItemDetails from '@/components/dashboard/ItemDetailsComponent.vue'
import ScoreBoard from '@/components/dashboard/ScoreBoardComponent.vue'

export default {
  components: {
    ScoreBoard,
    LineChart
    // DashboardSectionLayout,
    // RadarChart,
    // RadialBarChart,
    // SparklineChart,
    // TableChart,
    // ItemDetails
  },
  async created() {},
  data() {
    return {}
  },
  methods: {}
}
</script>
