<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <div class="mb-4 fw-bold">DLT Foundation Details Registration Auto-Check Report</div>
    <div v-for="(res, idx) in result" :key="idx">
      <div class="mb-2 display-7 fw-bold">{{ res.name }}</div>
      <div class="row">
        <div class="col-md-6 col-lg-4 my-2" v-for="item in res.item">
          <div v-if="'founder' in item">
            <div>{{ item.founder }}</div>
            <div v-for="info in item.data">
              <information-component
                :title="info.title"
                :dataReceived="info.dataReceived"
                :information="info.information"
                :variant="info.status"
              >
              </information-component>
            </div>
          </div>
          <div v-else>
            <information-component
              :title="item.title"
              :dataReceived="item.dataReceived"
              :information="item.information"
              :variant="item.status"
            >
            </information-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationViewMixin from './ApplicationViewMixin'

import { createProjectJob } from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import InformationComponent from '@/components/InformationComponent.vue'

export default {
  components: {
    InformationComponent
  },
  created() {},
  data() {
    return {
      result: [
        {
          name: 'DLT Foundation Details',
          item: [
            {
              title: 'DLT Foundation Name',
              information: '123123',
              dataReceived: '1231234444',
              status: 'fail'
            },
            {
              title: 'Official Twitter Account (URL)',
              information: '123123',
              dataReceived: '123123',
              status: 'pass'
            },
            {
              title: 'Official Website (URL)',
              information: '123123',
              dataReceived: '123123',
              status: 'pass'
            },
            {
              title: 'Official Website (URL)',
              information: '123123',
              dataReceived: '12312344',
              status: 'fail'
            },
            {
              title: 'Whitepaper Document Quality',
              information: '123123',
              dataReceived: '?',
              status: 'not sure'
            }
          ]
        },
        {
          name: 'Founder(s) Details',
          item: [
            {
              founder: 1,
              data: [
                {
                  title: 'Name',
                  information: '123123',
                  dataReceived: '?',
                  status: 'not sure'
                },
                {
                  title: 'Position within DLT Foundation',
                  information: '123123',
                  dataReceived: '?',
                  status: 'not sure'
                },
                {
                  title: 'KYC Verification',
                  information: '123123',
                  dataReceived: '123123',
                  status: 'pass'
                },
                {
                  title: 'Twitter Account (URL)',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'LinkedIn Profile (URL)',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'Ethereum Address',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'Email Address',
                  information: '123123',
                  dataReceived: '123123',
                  status: 'pass'
                }
              ]
            },
            {
              founder: 2,
              data: [
                {
                  title: 'Name',
                  information: '123123',
                  dataReceived: '?',
                  status: 'not sure'
                },
                {
                  title: 'Position within DLT Foundation',
                  information: '123123',
                  dataReceived: '?',
                  status: 'not sure'
                },
                {
                  title: 'KYC Verification',
                  information: '123123',
                  dataReceived: '123123',
                  status: 'pass'
                },
                {
                  title: 'Twitter Account (URL)',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'LinkedIn Profile (URL)',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'Ethereum Address',
                  information: '123123',
                  dataReceived: '123',
                  status: 'fail'
                },
                {
                  title: 'Email Address',
                  information: '123123',
                  dataReceived: '123123',
                  status: 'pass'
                }
              ]
            }
          ]
        },
        {
          name: 'Objectives of DLT Foundation',
          item: [
            {
              title: 'Objectives Description',
              information: '123123',
              dataReceived: '?',
              status: 'not sure'
            }
          ]
        },
        {
          name: 'Specific Purpose',
          item: [
            {
              title: 'Specific Purpose Description',
              information: '123123',
              dataReceived: '123123',
              status: 'pass'
            }
          ]
        },
        {
          name: 'Initial Assets',
          item: [
            {
              title: 'Initial Assets Description',
              information: '123123',
              dataReceived: '123',
              status: 'fail'
            }
          ]
        }
      ]
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>

<style scoped>
th,
td {
  padding: 0.6rem;
  text-align: left;
}

thead {
  background-color: rgb(214, 246, 255);
  border: 1px solid #000;
}

table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
}

td,
th {
  border: 1px solid #000;
}

th:first-child {
  border-top-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
}

/* 
tr:first-child td:first-child{
  border-top-left-radius: 10px;
} */

tbody:last-child tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

/* tr:first-child td:last-child{
  border-top-right-radius: 10px;
} */

tbody:last-child tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
</style>
