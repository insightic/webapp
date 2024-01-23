<template>
  <!-- Social Media -->
  <div>
    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="row w-100 h-100">
              <div class="col-6 d-flex flex-column text-center">
                <a class="my-auto" :href="twitterInfo.profile_website">
                  <img
                    src="https://pbs.twimg.com/profile_images/1267400480734490624/uq3Cten-_400x400.jpg"
                    class="rounded-circle"
                    style="width: 60%"
                  />
                </a>
              </div>
              <div class="col-6">
                <div class="mb-2 d-flex align-items-center">
                  <span class="me-2">
                    <IconBrandX />
                  </span>
                  <span>
                    <a :href="twitterInfo.profile_website">
                      {{ twitterInfo.profile_name }} - {{ twitterInfo.profile_handle }}
                    </a>
                  </span>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">BIO</div>
                  <div class="text-5">{{ twitterInfo.profile_bio }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">JOINING DATE</div>
                  <div>{{ twitterInfo.profile_joining_date }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">FOLLOWING / FOLLOWERS</div>
                  <div>
                    {{ twitterInfo.profile_following }} / {{ twitterInfo.profile_followers }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="row w-100 h-100">
              <div class="col-6">
                <div class="mb-2 d-flex align-items-center">
                  <span class="me-2">
                    <IconBrandLinkedin />
                  </span>
                  <span>
                    <a :href="linkedinInfo.website">
                      {{ linkedinInfo.profile_title }}
                    </a>
                  </span>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">OVERVIEW</div>
                  <div>{{ linkedinInfo.profile_overview }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">LOCATION</div>
                  <div>{{ linkedinInfo.profile_location }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">INDUSTRY</div>
                  <div>
                    {{ linkedinInfo.industry }}
                  </div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">COMPANY SIZE</div>
                  <div>
                    {{ linkedinInfo.company_size }}
                  </div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">FOUNDED YEAR</div>
                  <div>
                    {{ linkedinInfo.founded_year }}
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">BIO</div>
                  <div class="text-5">{{ linkedinInfo.profile_bio }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">ORGANIZATION TYPE</div>
                  <div>{{ linkedinInfo.organization_type }}</div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">COMPANY SIZE</div>
                  <div>
                    {{ linkedinInfo.company_size }}
                  </div>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">FOLLOWERS</div>
                  <div>
                    {{ linkedinInfo.profile_followers }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Posts / Articles Analysis</h2>
      <div class="ms-auto">Last Update {{ formatDateTime(new Date()) }}</div>
    </div>

    <div class="row row-deck row-cards mb-3">
      <div class="col-lg-6">
        <PieChartComponent
          title="Sentiment Analysis"
          :labels="['Positive', 'Neutral', 'Negative']"
          :data="[
            linkedinInfo.overall_sentiment_analysis.positive,
            linkedinInfo.overall_sentiment_analysis.neutral,
            linkedinInfo.overall_sentiment_analysis.negative
          ]"
        />
      </div>
      <div class="col-lg-6">
        <div class="card" style="overflow: hidden">
          <div class="card-header">
            <h3 class="card-title">Keywords</h3>
          </div>
          <div ref="wordcloud" style="width: 100%; height: 100%; min-height: 400px"></div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center" style="cursor: pointer">
      <h2>Sentiment Analysis</h2>
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
                  <td class="text-secondary" style="vertical-align: top">
                    <div class="text">
                      {{ tweet }}
                    </div>
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
            <h3 class="card-title">Most Recent LinkedIn Posts</h3>
          </div>
          <div class="table-responsive">
            <table class="table card-table">
              <thead>
                <tr>
                  <th style="width: 168px">Posts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, idx) in linkedin_posts" :key="idx">
                  <td class="text-secondary" style="vertical-align: top">
                    <div class="text">
                      {{ post }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconBrandX, IconBrandLinkedin } from '@tabler/icons-vue'
import TwitterFollowers from '@/components/dashboard/TwitterFollowers.vue'
import { formatDateTime } from '@/helpers'
import WordCloud, { type ListEntry } from 'wordcloud'
import SampleJSON from '@/views/applicationSubViews/sample_twitter.json'
import PieChartComponent from '@/components/dashboard/PieChartComponent.vue'
import moment from 'moment'
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  application: {
    type: Object,
    required: true
  },
  submission: {
    type: Object,
    required: true
  }
})

console.log(props.submission)

const wordcloud = ref(null)
onMounted(() => {
  const wf: { [key: string]: number } = SampleJSON.linkedin_data.word_frequencies
  let wlist: ListEntry[] = Object.keys(wf).map((k) => [k, wf[k]])
  wlist.sort((a: any, b: any) => b[1] - a[1])
  wlist = wlist.slice(0, Math.min(100, wlist.length))
  WordCloud(wordcloud.value!, { list: wlist, backgroundColor: '' })
})

let twitterInfo = ref(SampleJSON.twitter_data)
let linkedinInfo = ref(SampleJSON.linkedin_data)
let followers = function (name: string) {
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

let linkedin_posts = computed(() => {
  return SampleJSON.linkedin_data.extracted_posts.map((p) => p.post_content).slice(0, 6)
})
</script>

<style scoped>
.text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.text-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
