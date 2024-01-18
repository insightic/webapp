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
                    src="https://avatars.githubusercontent.com/u/2292644?v=4"
                    class="rounded-circle"
                    style="width: 60%"
                  />
                </a>
              </div>
              <div class="col-6">
                <div class="mb-2 d-flex align-items-center">
                  <span>
                    <IconBrandX class="mr-2" />
                  </span>
                  <span>
                    <a :href="twitterInfo.profile_website">
                      {{ twitterInfo.profile_name }} - {{ twitterInfo.profile_handle }}
                    </a>
                  </span>
                </div>
                <div class="mb-2">
                  <div class="text-secondary" style="font-size: 0.6rem">BIO</div>
                  <div>{{ twitterInfo.profile_bio }}</div>
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
    </div>

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
      <div class="col-lg-6">
        <div class="card" style="overflow: hidden">
          <div class="card-header">
            <h3 class="card-title">LinkedIn Keywords</h3>
          </div>
          <div ref="wordcloud" style="width: 100%; height: 100%; min-height: 400px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconBrandX } from '@tabler/icons-vue'
import TwitterFollowers from '@/components/dashboard/TwitterFollowers.vue'
import { formatDateTime } from '@/helpers'
import WordCloud from 'wordcloud'
import SampleJSON from '@/views/applicationSubViews/sample_twitter.json'
import moment from 'moment'
import { ref, onMounted, computed } from 'vue'

const wordcloud = ref(null)
onMounted(() => {
  const wf: { [key: string]: number } = SampleJSON.linkedin_data.word_frequencies
  WordCloud(wordcloud.value!, { list: Object.keys(wf).map((k) => [k, wf[k]]) })
})

let twitterInfo = ref(SampleJSON.twitter_data)
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
</style>
