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

  <h2
    v-if="
      transcations || totalSupply || topKHolder || tokenPrice || mintBurn || holdAgeFreqPortfilio
    "
  >
    Stable Coin
  </h2>

  <div class="row row-deck row-cards mb-3">
    <div v-if="transcations" class="col-lg-12">
      <TableComponent
        title="Average Rate"
        :columns="transcations.avg_rate.columns"
        :data="transcations.avg_rate.data"
        :update-at="updateAt"
      />
    </div>
    <div v-if="transcations" class="col-lg-6">
      <ChartComponent
        type="bar"
        title="Daily Frequency"
        :labels="[transcations.daily_frequency.data.map((d: any) => `${d[0]}`)]"
        :data="[
          {
            name: 'Daily Frequency',
            data: transcations.daily_frequency.data.map((d: any) => Number(d[1]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="transcations" class="col-lg-6">
      <ChartComponent
        type="bar"
        title="Hourly Frequency"
        :labels="[transcations.hourly_frequency.data.map((d: any) => `${d[0]}:00`)]"
        :data="[
          {
            name: 'Hourly Frequency',
            data: transcations.hourly_frequency.data.map((d: any) => Number(d[1]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="transcations" class="col-lg-6">
      <ChartComponent
        title="Daily Bought/Sold Volume"
        :labels="[
          transcations.daily_bought_vol.data.map((d: any) => `${d[0]}`),
          transcations.daily_sold_vol.data.map((d: any) => `${d[0]}`)
        ]"
        :data="[
          {
            name: 'Daily Bought Volume',
            data: transcations.daily_bought_vol.data.map((d: any) => Number(d[1]))
          },
          {
            name: 'Daily Sold Volume',
            data: transcations.daily_sold_vol.data.map((d: any) => Number(d[1]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="transcations" class="col-lg-6">
      <ChartComponent
        title="Hourly Bought/Sold Volume"
        :labels="[
          transcations.hourly_bought_vol.data.map((d: any) => `${d[0]}:00`),
          transcations.hourly_sold_vol.data.map((d: any) => `${d[0]}:00`)
        ]"
        :data="[
          {
            name: 'Hourly Bought Volume',
            data: transcations.hourly_bought_vol.data.map((d: any) => Number(d[1]))
          },
          {
            name: 'Hourly Sold Volume',
            data: transcations.hourly_sold_vol.data.map((d: any) => Number(d[1]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
  </div>

  <div class="row row-deck row-cards mb-3">
    <div v-if="totalSupply" class="col-lg-12">
      <ChartComponent
        title="Token Supply Over Time"
        :labels="[totalSupply.data.map((d: any) => String(d[0]))]"
        :data="[
          { name: 'Token Supply Over Time', data: totalSupply.data.map((d: any) => Number(d[1])) }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="tokenPrice" class="col-lg-6">
      <ChartComponent
        title="Token Price in USD over time"
        :labels="[tokenPrice.data.map((d: any) => String(d[0]))]"
        :data="[
          {
            name: 'Token Price in USD over time',
            data: tokenPrice.data.map((d: any) => Number(d[1]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="tokenPrice" class="col-lg-6">
      <ChartComponent
        title="Token Price in ETH over time"
        :labels="[tokenPrice.data.map((d: any) => String(d[0]))]"
        :data="[
          {
            name: 'Token Price in ETH over time',
            data: tokenPrice.data.map((d: any) => Number(d[3]))
          }
        ]"
        :update-at="updateAt"
      />
    </div>
    <div v-if="mintBurn" class="col-lg-6">
      <TableComponent title="Mint/Burn" :columns="mintBurn.columns" :data="mintBurn.data" />
    </div>
    <div v-if="topKHolder" class="col-lg-6">
      <PieChartComponent
        title="Top 10 holders"
        :labels="topKHolder.data.map((d: any) => String(d[0]).substring(0, 10))"
        :data="topKHolder.data.map((d: any) => d[3])"
        :update-at="updateAt"
      />
    </div>
    <div v-if="holdAgeFreqPortfilio" class="col-lg-6">
      <PieChartComponent
        title="Age Stats"
        :labels="holdAgeFreqPortfilio['age'].data.map((d: any) => String(d[1]))"
        :data="holdAgeFreqPortfilio['age'].data.map((d: any) => Number(d[2]))"
        :update-at="updateAt"
      />
    </div>
    <div v-if="holdAgeFreqPortfilio" class="col-lg-6">
      <PieChartComponent
        title="Freq Stats"
        :labels="holdAgeFreqPortfilio['freq'].data.map((d: any) => String(d[1]))"
        :data="holdAgeFreqPortfilio['freq'].data.map((d: any) => Number(d[2]))"
        :update-at="updateAt"
      />
    </div>
    <div v-if="holdAgeFreqPortfilio" class="col-lg-6">
      <PieChartComponent
        title="Portfolio Stats"
        :labels="holdAgeFreqPortfilio['portfolio'].data.map((d: any) => String(d[1]))"
        :data="holdAgeFreqPortfilio['portfolio'].data.map((d: any) => Number(d[2]))"
        :update-at="updateAt"
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
                <div class="datagrid-content">
                  {{ submission.Content['Risk Management']['SecurityAuditor'] }}
                </div>
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
                <div class="datagrid-content">-</div>
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
import ChartComponent from '@/components/dashboard/ChartComponent.vue'
import PieChartComponent from '@/components/dashboard/PieChartComponent.vue'
import { getJobResults } from '@/api'

export default {
  components: {
    IconTrendingUp,
    IconTrendingDown,
    ScoreBoard,
    TableComponent,
    ChartComponent,
    PieChartComponent
  },
  props: ['application', 'submission'],
  async created() {
    const resp = await getJobResults(this.submission.ApplicationID, this.submission.SubmissionID)
    if (!resp) {
      return
    }
    const results = resp.filter((r: any) => r['job_name'] == 'stablecoin')[0]
    if (!results) {
      return
    }
    this.updateAt = new Date(results['UpdatedAt'])
    this.transcations = results['job_results']['transaction']
    this.totalSupply = results['job_results']['supply']
    this.topKHolder = results['job_results']['topKHolder']
    this.tokenPrice = results['job_results']['price']
    this.mintBurn = results['job_results']['mintBurn']
    this.holdAgeFreqPortfilio = results['job_results']['holderAgeFreqPortfolio']
  },
  data() {
    return {
      updateAt: null as any,
      transcations: null as any,
      totalSupply: null as any,
      topKHolder: null as any,
      tokenPrice: null as any,
      mintBurn: null as any,
      holdAgeFreqPortfilio: null as any
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
