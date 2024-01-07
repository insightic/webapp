<template>
  <!-- Dashboard Header -->
  <div>
    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body d-flex align-items-center">
            <div class="row align-items-center w-100 h-100">
              <div class="col-3">
                <img
                  :src="submission?.Content?.LogoURL"
                  class="rounded-circle"
                  style="width: 60%"
                />
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
  </div>

  <!-- General Information -->
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
  </div>

  <!-- Stable Coin -->
  <div
    v-if="
      transcations || totalSupply || topKHolder || tokenPrice || mintBurn || holdAgeFreqPortfilio
    "
  >
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Stable Coin</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

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
  </div>

  <!-- Social Media -->
  <div>
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Social Media</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-6">
        <TwitterFollowers
          title="Twitter Followers"
          :labels="followers('Twitter Followers').label"
          :data="followers('Twitter Followers').data"
        />
      </div>
      <div class="col-lg-6">
        <TwitterFollowers
          title="Reddit Subscribers"
          :labels="followers('Reddit Subscribers').label"
          :data="followers('Reddit Subscribers').data"
        />
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Twitter</h3>
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
                  <td class="text-secondary" style="vertical-align: top">Profile</td>
                  <td>
                    <a :href="twitterInfo.profile_website"
                      >{{ twitterInfo.profile_name }} - {{ twitterInfo.profile_handle }},
                      {{ twitterInfo.profile_website }}</a
                    >
                  </td>
                </tr>
                <tr>
                  <td class="text-secondary" style="vertical-align: top">Bio</td>
                  <td>{{ twitterInfo.profile_bio }}</td>
                </tr>
                <tr>
                  <td class="text-secondary" style="vertical-align: top">Joining Date</td>
                  <td>{{ twitterInfo.profile_joining_date }}</td>
                </tr>
                <tr>
                  <td class="text-secondary" style="vertical-align: top">Following / Followers</td>
                  <td>
                    {{ twitterInfo.profile_following }} Followings /
                    {{ twitterInfo.profile_followers }} Followers
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
            <h3 class="card-title">Most Recent Tweets</h3>
          </div>
          <div class="table-responsive">
            <table class="table card-table">
              <thead>
                <tr>
                  <th style="width: 168px">Tweets</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(tweet, idx) in twitterInfo.tweet_texts" :key="idx">
                  <td class="text-secondary" style="vertical-align: top">{{ tweet }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Security Assurance -->
  <div>
    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Security Assurance</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

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
                  <div class="datagrid-content d-flex align-items-center">
                    <div>
                      {{ submission.Content['Risk Management']['SecurityAuditor'] }}
                    </div>

                    <div
                      v-if="
                        submission.Content['Risk Management']['SecurityAuditor'] &&
                        securityAuditorInfo
                      "
                      class="ms-2"
                    >
                      <VDropdown>
                        <button class="btn btn-sm btn-outline-primary rounded">?</button>

                        <template #popper>
                          <div class="p-2" style="width: 480px">
                            <table class="w-100 auditor-info-table">
                              <tr>
                                <td class="text-secondary" style="width: 160px">Tier:</td>
                                <td>
                                  <span class="badge rounded-pill bg-success me-2 text-white"
                                    >Tier {{ securityAuditorInfo['Tier'] }}</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td class="text-secondary">Status:</td>
                                <td>
                                  <span class="badge rounded-pill bg-success me-2 text-white"
                                    >active</span
                                  >
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
  </div>
</template>

<script lang="ts">
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue'
import ScoreBoard from '@/components/dashboard/ScoreBoardComponent.vue'
import TableComponent from '@/components/dashboard/TableComponent.vue'
import ChartComponent from '@/components/dashboard/ChartComponent.vue'
import PieChartComponent from '@/components/dashboard/PieChartComponent.vue'
import TwitterFollowers from '@/components/dashboard/TwitterFollowers.vue'
import { getJobResults } from '@/api'
import Papa from 'papaparse'
import auditors from '@/assets/auditors.csv?raw'
import { formatDateTime } from '@/helpers'
import SampleJSON from '@/views/applicationSubViews/sample_twitter.json'
import moment from 'moment'

export default {
  components: {
    IconTrendingUp,
    IconTrendingDown,
    ScoreBoard,
    TableComponent,
    ChartComponent,
    PieChartComponent,
    TwitterFollowers
  },
  props: ['application', 'submission'],
  async created() {
    this.verifiedAuditors = Papa.parse(auditors, {
      header: true
    }).data

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
      verifiedAuditors: null as any,
      updateAt: null as any,
      transcations: null as any,
      totalSupply: null as any,
      topKHolder: null as any,
      tokenPrice: null as any,
      mintBurn: null as any,
      holdAgeFreqPortfilio: null as any,
      twitterInfo: SampleJSON.twitter_data
    }
  },
  methods: {
    formatDateTime,
    followers(name: string) {
      const sample = SampleJSON.followers_data.filter((f) => f.name == name)[0].data
      return {
        label: sample.map((s) => moment(s[0]).format('YYYY-MM-DD')),
        data: [
          {
            name: 'Twitter Followers',
            data: sample.map((s) => s[1])
          }
        ]
      }
    }
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

.auditor-info-table > tr > td {
  vertical-align: top;
}
</style>
