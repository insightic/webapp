<template>
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
</template>

<script lang="ts" setup>
import TwitterFollowers from '@/components/dashboard/TwitterFollowers.vue'
import { formatDateTime } from '@/helpers'
import SampleJSON from '@/views/applicationSubViews/sample_twitter.json'
import moment from 'moment'
import { ref } from 'vue'

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
</script>
