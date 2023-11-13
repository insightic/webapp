<template>
  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="row align-items-center w-100 h-100">
            <div class="col-3">
              <img :src="submission?.Content?.Overview?.LogoUrl" class="rounded-circle" style="width: 60%" />
            </div>
            <div class="col">
              <div class="card-title mb-0">
                {{ submission?.Content?.Name }}
              </div>
              <div class="text-secondary mb-2">
                {{ submission?.Content?.OneLiner }}
              </div>
              <div class="text-secondary">
                <a :href="submission?.Content?.Website">{{ submission?.Content?.Website }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <ScoreBoard title="score" grade="B+" />
    </div>
  </div>

  <h2>Security Assurance</h2>

  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-4">
      <ScoreBoard
        title="Security Assurance"
        grade="A-"
        :NowData="'71'"
        :PreviousData="'70'"
        :ChangeData="'+1'"
      />
    </div>
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="d-table h-100 w-100">
            <div class="d-table-row">
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">SECURITY AUDIT STATUS</div>
                <div class="datagrid-content"><span class="text-green">Pass</span></div>
              </div>
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">KYT SERVICE PROVIDERS</div>
                <div class="datagrid-content">Internal <br />Chainalysis <br />Elliptic</div>
              </div>
            </div>

            <div class="d-table-row">
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">SECURITY AUDITORS</div>
                <div class="datagrid-content">Certik <br />Hacken</div>
              </div>
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">INCIDENT RESPONSE PLAN</div>
                <div class="datagrid-content"><span class="text-green">Ready</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="card overflow-hidden">
        <div class="table-responsive">
          <table class="table table-vcenter card-table text-center">
            <thead>
              <tr>
                <th>SECURITY AUDITS</th>
                <th>NUMBER OF INCIDENTS</th>
                <th>TOTAL LOSS</th>
                <th>CRITICAL ISSUES</th>
                <th>NON-CRITICAL ISSUES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="h1 mb-0">1</div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    0 <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    0
                    <!-- 0 <span><IconTrendingDown stroke-width="1" class="text-green" /></span> -->
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    1
                    <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    6
                    <span><IconTrendingUp stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="h1 mb-0">1</div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    5
                    <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    0
                    <!-- 192 <span><IconTrendingUp stroke-width="1" class="text-danger" /></span> -->
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    4
                    <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    29
                    <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <h2>Regulatory Compliance</h2>

  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-4">
      <ScoreBoard
        title="Regulatory Compliance"
        grade="C+"
        :NowData="'71'"
        :PreviousData="'70'"
        :ChangeData="'+1'"
      />
    </div>
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="d-table h-100 w-100">
            <div class="d-table-row">
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">Registration Status</div>
                <div class="datagrid-content"><span class="text-green">Active</span></div>
              </div>
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">AGE</div>
                <div class="datagrid-content">3 Years<br />32 days</div>
              </div>
            </div>

            <div class="d-table-row">
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">AUDITOR</div>
                <div class="datagrid-content">Ernst & Young - Middle East</div>
              </div>
              <div class="d-table-cell datagrid-item" style="vertical-align: middle">
                <div class="datagrid-title">AUDIT STATUS</div>
                <div class="datagrid-content"><span class="text-green">Pass</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="card overflow-hidden">
        <div class="table-responsive">
          <table class="table table-vcenter card-table text-center">
            <thead>
              <tr>
                <th>Charter Score</th>
                <th>Issues</th>
                <th>LICENSED VENDORS</th>
                <th>UNLICENSED VENDORS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="h1 mb-0">85</div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    23
                    <span><IconTrendingUp stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    2
                    <span><IconTrendingDown stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    4
                    <span><IconTrendingDown stroke-width="1" class="text-green" /></span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="h1 mb-0">85</div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    78
                    <span><IconTrendingUp stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    3
                    <span><IconTrendingDown stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    6
                    <span><IconTrendingUp stroke-width="1" class="text-danger" /></span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue'
import ScoreBoard from '@/components/dashboard/ScoreBoardComponent.vue'

export default {
  components: {
    IconTrendingUp,
    IconTrendingDown,
    ScoreBoard
  },
  props: ['application', 'submission'],
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
