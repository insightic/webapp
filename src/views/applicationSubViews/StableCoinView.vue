<template>
  <div>
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
</template>

<script setup lang="ts">
import { formatDateTime } from '@/helpers'
import { ref, onMounted } from 'vue'
import { getJobResults } from '@/api'
import ChartComponent from '@/components/dashboard/ChartComponent.vue'
import PieChartComponent from '@/components/dashboard/PieChartComponent.vue'

const props = defineProps({
  submission: {
    type: Object,
    required: true
  }
})

let updateAt = ref()
let transcations = ref()
let totalSupply = ref()
let topKHolder = ref()
let tokenPrice = ref()
let mintBurn = ref()
let holdAgeFreqPortfilio = ref()

onMounted(async () => {
  const resp = await getJobResults(props.submission.ApplicationID, props.submission.SubmissionID)
  if (!resp) {
    return
  }
  const results = resp.filter((r: any) => r['job_name'] == 'stablecoin')[0]
  if (!results) {
    return
  }
  updateAt.value = new Date(results['UpdatedAt'])
  transcations.value = results['job_results']['transaction']
  totalSupply.value = results['job_results']['supply']
  topKHolder.value = results['job_results']['topKHolder']
  tokenPrice.value = results['job_results']['price']
  mintBurn.value = results['job_results']['mintBurn']
  holdAgeFreqPortfilio.value = results['job_results']['holderAgeFreqPortfolio']
})
</script>
