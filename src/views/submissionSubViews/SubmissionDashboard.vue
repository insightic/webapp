<template>
  <div class="mb-5">
    <h3 class="my-3">Scores</h3>
    <div class="my-3 row">
      <div class="col-3">
        <ScoreBoard :Grade="'A-'" :NowData="'95'" :PreviousData="'96'" :ChangeData="'-1'" />
      </div>
      <div class="col-7">
        <LineChart />
      </div>
      <div class="col-2">
        <div class="h-100">
          <div style="position: relative; background-color: rgb(158, 248, 3); height: 50%" class="w-100 p-2">
            <div class="small">Highest</div>
            <div style="position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-20%);">
              <h4>71</h4>
            </div>
          </div>
          <div style="position: relative; background-color:chocolate; height: 50%" class="w-100 p-2">
            <div class="small">Lowest</div>
            <div style="position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-20%);">
              <h4>40</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h3 class="my-3">Security Assurance</h3>
    <div class="row my-3">
      <div class="col-3">
        <ScoreBoard :Grade="'B-'" :NowData="'71'" :PreviousData="'70'" :ChangeData="'+1'" />
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black">Security Audit Status</th>
              <th>KYT Service Providers</th>
              <th>Security Auditors</th>
              <th style="border-right: 1px solid black">Incident Response Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black">
                <h5>Pass</h5>
              </td>
              <td>
                <h5>Internal Chainalysis Elliptic</h5>
              </td>
              <td>
                <h5>Certik Hacken</h5>
              </td>
              <td style="border-right: 1px solid black">
                <h5>Ready</h5>
              </td>
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
              <th style="border-left: 1px solid black">Security Audits</th>
              <th>Number of Incidents</th>
              <th>Total Loss</th>
              <th>Critical Issues</th>
              <th style="border-right: 1px solid black">Non-Critical Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black">
                <div class="fs-4">1</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td>
                <div class="fs-4">0</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td>
                <div class="fs-4">0</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td>
                <div class="fs-4">0</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td style="border-right: 1px solid black">
                <div class="fs-4">1</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
            </tr>
            <tr>
              <td style="border-left: 1px solid black">
                <div class="fs-4">5</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td>
                <div class="fs-4">0</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td>
                <div class="fs-4">0</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td>
                <div class="fs-4">1</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td style="border-right: 1px solid black">
                <div class="fs-4">17</div>
                <div class="small text-secondary">in 2 years</div>
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
        <ScoreBoard :Grade="'B+'" :NowData="'82'" :PreviousData="'80'" :ChangeData="'+2'"/>
      </div>
      <div class="col-9">
        <table class="w-100 h-100 table table-bordered text-center" style="border-color: black">
          <thead>
            <tr>
              <th style="border-left: 1px solid black">Registration Status</th>
              <th>Age</th>
              <th>Auditor</th>
              <th style="border-right: 1px solid black">Audit Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black">
                <h5>Active</h5>
              </td>
              <td>
                <h5>3 Years<br />32 days</h5>
              </td>
              <td><h5>Ernst & Young - Middle East</h5></td>
              <td style="border-right: 1px solid black">
                <h5>Pass</h5>
              </td>
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
              <th style="border-left: 1px solid black">Charter Score</th>
              <th>Issues</th>
              <th>Licensed Vendors</th>
              <th style="border-right: 1px solid black">Unlicensed Vendors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border-left: 1px solid black">
                <h5>95</h5>
              </td>
              <td>
                <div>0</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td>
                <div>0</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
              <td style="border-right: 1px solid black">
                <div>1</div>
                <div class="small text-secondary">in 6 months</div>
              </td>
            </tr>
            <tr>
              <td style="border-left: 1px solid black">
                <h5>Last update 1 June 2023</h5>
              </td>
              <td>
                <div>4</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td>
                <div>0</div>
                <div class="small text-secondary">in 2 years</div>
              </td>
              <td style="border-right: 1px solid black">
                <div>3</div>
                <div class="small text-secondary">in 2 years</div>
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
td,
th {
  border-left: unset;
  border-right: unset;
}
</style>
