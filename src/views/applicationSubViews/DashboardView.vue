<template>
  <!-- Dashboard Header -->
  <div>
    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body d-flex align-items-center">
            <div class="row w-100 h-100">
              <div class="col-3 d-flex align-items-center">
                <img :src="submission?.Content?.LogoURL" class="mx-auto" style="width: 60%" />
              </div>
              <div class="col-4">
                <div class="card-title mb-0">
                  {{ submission?.Content?.Name }}
                </div>
                <div class="text-secondary mb-0">
                  {{ submission?.Content?.OneLiner }}
                </div>
                <div class="mb-3">
                  <a :href="submission?.Content?.Website">
                    {{ submission?.Content?.Website }}
                  </a>
                </div>
                <div class="text-secondary mb-2" style="font-size: 0.6rem">OFFICIAL LINKS</div>
                <div class="d-flex mb-2">
                  <div class="me-2 badge bg-secondary">
                    <a :href="submission?.Content?.Website"
                      style="color: white; text-decoration: none; font-size: 0.6rem">
                      Whitepaper
                    </a>
                  </div>
                  <div class="me-2 badge bg-secondary">
                    <a :href="submission?.Content?.Website"
                      style="color: white; text-decoration: none; font-size: 0.6rem">
                      Contract
                    </a>
                  </div>
                </div>
                <div class="text-secondary mb-2" style="font-size: 0.6rem">SOCIAL MEDIAS</div>
                <div class="d-flex mb-2">
                  <IconBrandX class="me-2" :size="24" />
                  <IconBrandGithub class="me-2" :size="24" />
                  <IconBrandLinkedin :size="24" />
                </div>
              </div>
              <div class="col-5">
                <div class="text-secondary" style="font-size: 0.6rem">OVERVIEW</div>
                <div class="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <ScoreBoard title="score" grade="B+" />
      </div>
    </div>
  </div>

  <!-- General Information
  <div>
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>General Information</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

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
  </div> -->

  <!-- Security Assurance -->
  <div>
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Security Assurance</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-4">
        <ScoreBoard title="Security Assurance" grade="B+" :NowData="securityReportInfo.final_score" :PreviousData="'70'"
          :ChangeData="'+1'" :details="securityReportInfo.report_summary" />
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
                  <div class="datagrid-content d-flex align-items-center">
                    <div>
                      {{ submission.Content['Risk Management']['SecurityAuditor'] }}
                    </div>

                    <div v-if="submission.Content['Risk Management']['SecurityAuditor'] &&
                      securityAuditorInfo
                      " class="ms-2">
                      <VDropdown>
                        <button class="btn btn-sm btn-outline-primary rounded">?</button>

                        <template #popper>
                          <div class="p-2" style="width: 480px">
                            <table class="w-100 auditor-info-table">
                              <tr>
                                <td class="text-secondary" style="width: 160px">Tier:</td>
                                <td>
                                  <span class="badge rounded-pill bg-success me-2 text-white">Tier {{
                                    securityAuditorInfo['Tier'] }}</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Status:</td>
                                <td>
                                  <span class="badge rounded-pill bg-success me-2 text-white">active</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Founded Year:</td>
                                <td>{{ securityAuditorInfo['Founded Year'] }}</td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Number of Employees:</td>
                                <td>{{ securityAuditorInfo['Number of Employees'] }}</td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Short Description:</td>
                                <td>{{ securityAuditorInfo['Short Description'] }}</td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Contracts:</td>
                                <td>
                                  <a class="me-2" :href="securityAuditorInfo['Contact Email']">
                                    {{ securityAuditorInfo['Contact Email'] }}
                                  </a>
                                  <a class="me-2" :href="securityAuditorInfo['Twitter']">
                                    <i class="bi bi-twitter"></i>
                                  </a>
                                  <a class="me-2" :href="securityAuditorInfo['LinkedIn']">
                                    <i class="bi bi-linkedin"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Website:</td>
                                <td>
                                  <a :href="securityAuditorInfo['Website']">{{
                                    securityAuditorInfo['Website']
                                  }}</a>
                                </td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Locations:</td>
                                <td>{{ securityAuditorInfo['Locations'] }}</td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Monthly Visit:</td>
                                <td>{{ securityAuditorInfo['Monthly Visit'] }}</td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Audits Completed:</td>
                                <td>{{ securityAuditorInfo['Audits Completed'] }}</td>
                              </tr>
                            </table>
                          </div>
                        </template>
                      </VDropdown>
                    </div>
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
  </div>

  <!-- Regulatory Compliance -->
  <div>
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Regulatory Compliance</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-4">
        <ScoreBoard title="Regulatory Compliance" grade="C+" :NowData="'71'" :PreviousData="'70'" :ChangeData="'+1'" />
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
  </div>
</template>

<script lang="ts">
import {
  IconTrendingUp,
  IconTrendingDown,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub
} from '@tabler/icons-vue'
import ScoreBoard from '@/components/dashboard/ScoreBoardComponent.vue'
import Papa from 'papaparse'
import auditors from '@/assets/auditors.csv?raw'
import { formatDateTime } from '@/helpers'
import SampleReportJSON from '@/views/applicationSubViews/sample_report.json'

export default {
  components: {
    IconTrendingUp,
    IconTrendingDown,
    IconBrandX,
    IconBrandGithub,
    IconBrandLinkedin,
    ScoreBoard
  },
  props: ['application', 'submission'],
  async created() {
    this.verifiedAuditors = Papa.parse(auditors, {
      header: true
    }).data
  },
  data() {
    return {
      verifiedAuditors: null as any,
      securityReportInfo: SampleReportJSON
    }
  },
  methods: {
    formatDateTime
  },
  computed: {
    securityAuditorInfo() {
      const auditors = this.verifiedAuditors.filter(
        (v: any) =>
          v['Auditor Name'] == this.submission.Content['Risk Management']['SecurityAuditor']
      )
      return auditors[0]
    }
  }
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

.auditor-info-table>tr>td {
  vertical-align: top;
}
</style>
