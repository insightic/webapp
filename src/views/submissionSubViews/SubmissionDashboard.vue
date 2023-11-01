<template>
  <div class="mb-5">
    <h3 class="my-3">Scores</h3>
    <div class="my-3 row">
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

  <div class="mb-5">
    <h3 class="my-3">Security Assurance</h3>
    <div class="row my-3">
      <div class="col-3">
        <ScoreBoard />
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black;">Security Audit Status</th>
              <th>KYT Service Providers</th>
              <th>Security Auditors</th>
              <th style="border-right: 1px solid black;">Incident Response Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black;">Pass</td>
              <td>Internal Chainalysis Elliptic</td>
              <td>Certik Hacken</td>
              <td style="border-right: 1px solid black;">Ready</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-12">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black;">Security Audits</th>
              <th>Number of Incidents</th>
              <th>Total Loss</th>
              <th>Critical Issues</th>
              <th style="border-right: 1px solid black;">Non-Critical Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black;">
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
              <td style="border-right: 1px solid black;">
                <div>1</div>
                <div>in 6 months</div>
              </td>
            </tr>
            <tr>
              <td style="border-left: 1px solid black;">
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
              <td style="border-right: 1px solid black;">
                <div>17</div>
                <div>in 2 years</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h3 class="my-3">Regulatory Compliance</h3>
    <div class="row my-3">
      <div class="col-3">
        <ScoreBoard />
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black;">Registration Status</th>
              <th>Age</th>
              <th>Auditor</th>
              <th style="border-right: 1px solid black;">Audit Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black;">Active</td>
              <td>3 Years<br />32 days</td>
              <td>Ernst & Young - Middle East</td>
              <td style="border-right: 1px solid black;">Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-12">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black;">Charter Score</th>
              <th>Issues</th>
              <th>Licensed Vendors</th>
              <th style="border-right: 1px solid black;">Unlicensed Vendors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black;">95</td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div>in 6 months</div>
              </td>
              <td style="border-right: 1px solid black;">
                <div>1</div>
                <div>in 6 months</div>
              </td>
            </tr>
            <tr>
              <td style="border-left: 1px solid black;">Last update 1 June 2023</td>
              <td>
                <div>4</div>
                <div>in 2 years</div>
              </td>
              <td>
                <div>0</div>
                <div>in 2 years</div>
              </td>
              <td style="border-right: 1px solid black;">
                <div>3</div>
                <div>in 2 years</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LineChart from '@/components/graphs/LineChart.vue'
import ScoreBoard from '@/components/dashboard/ScoreBoardComponent.vue'

export default {
  components: {
    ScoreBoard,
    LineChart
  },
  async created() {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
table {
  vertical-align: middle;
}
td, th {
  border-left: unset;
  border-right: unset;
}
</style>
