<template>
  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="row align-items-center w-100 h-100">
            <div class="col-3">
              <img :src="submission?.Content?.LogoURL" class="rounded-circle" style="width: 60%" />
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

  <h2>General Information</h2>

  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Whitepaper</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table">
            <thead>
              <tr>
                <th style="width: 168px">Name</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Title</td>
                <td>Insightic - Web3 Compliance Made Easy</td>
              </tr>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Summary</td>
                <td>
                  Preliminary assessment of virtual asset service providers, drastically reducing
                  manual due diligence efforts. Leveraging on-chain background checks and a unique
                  de-anonymization technique, it offers deep insights and thorough screening
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <TableComponent
        title="test"
        :columns="['Name', 'Information']"
        :data="[['Title', 'Insightic - Web3 Compliance Made Easy']]"
      />
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Website</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table">
            <thead>
              <tr>
                <th style="width: 168px">Name</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-secondary" style="vertical-align: top">URL</td>
                <td>
                  <a :href="submission?.Content?.Website">{{ submission?.Content?.Website }}</a>
                </td>
              </tr>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Title</td>
                <td>Insightic - Web3 Compliance Made Easy</td>
              </tr>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Summary</td>
                <td>
                  Preliminary assessment of virtual asset service providers, drastically reducing
                  manual due diligence efforts. Leveraging on-chain background checks and a unique
                  de-anonymization technique, it offers deep insights and thorough screening
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">On-Chain Stats</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table">
            <thead>
              <tr>
                <th style="width: 168px">Name</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Contract Address</td>
                <td><a href="https://insightic.io">https://insightic.io</a></td>
              </tr>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Title</td>
                <td>Insightic - Web3 Compliance Made Easy</td>
              </tr>
              <tr>
                <td class="text-secondary" style="vertical-align: top">Summary</td>
                <td>
                  Preliminary assessment of virtual asset service providers, drastically reducing
                  manual due diligence efforts. Leveraging on-chain background checks and a unique
                  de-anonymization technique, it offers deep insights and thorough screening
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <h2>Transactions</h2>

  <div class="row row-deck row-cards mb-3">
    <div class="col-lg-6">
      <TableComponent title="Average Rate" :columns="avgRate.columns" :data="avgRate.data" />
    </div>
    <div class="col-lg-6"></div>
    <div class="col-lg-6">
      <LineChartComponent
        title="Daily Frequency"
        :labels="dailyFrequency.data.map((d) => d[0])"
        :data="dailyFrequency.data.map((d) => Number(d[1]))"
      />
    </div>
    <div class="col-lg-6">
      <LineChartComponent
        title="Hourly Frequency"
        :labels="hourlyFrequency.data.map((d) => `${d[0]}:00`)"
        :data="hourlyFrequency.data.map((d) => Number(d[1]))"
      />
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
                    0
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
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
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    6
                    <span>
                      <IconTrendingUp stroke-width="1" class="text-danger" />
                    </span>
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
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
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
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    29
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
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
                    <span>
                      <IconTrendingUp stroke-width="1" class="text-danger" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    2
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-danger" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 6 months</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    4
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-green" />
                    </span>
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
                    <span>
                      <IconTrendingUp stroke-width="1" class="text-danger" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    3
                    <span>
                      <IconTrendingDown stroke-width="1" class="text-danger" />
                    </span>
                  </div>
                  <div class="small text-secondary">in 2 years</div>
                </td>
                <td>
                  <div class="h1 mb-0">
                    6
                    <span>
                      <IconTrendingUp stroke-width="1" class="text-danger" />
                    </span>
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
import TableComponent from '@/components/dashboard/TableComponent.vue'
import LineChartComponent from '@/components/dashboard/LineChartComponent.vue'
import { getJobResults } from '@/api'
import sampleData from './sample_data.json'

export default {
  components: {
    IconTrendingUp,
    IconTrendingDown,
    ScoreBoard,
    TableComponent,
    LineChartComponent
  },
  props: ['application', 'submission'],
  async created() {
    const resp = await getJobResults(this.submission.ApplicationID, this.submission.SubmissionID)
    console.log(resp)
    console.log(this.submission)
  },
  data() {
    return {
      avgRate: sampleData.avg_rate,
      dailyFrequency: sampleData.daily_frequency,
      hourlyFrequency: sampleData.hourly_frequency
    }
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
