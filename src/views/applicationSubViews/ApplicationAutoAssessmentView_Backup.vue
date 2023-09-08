<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <div class="mb-4 fw-bold">DLT Foundation Details Registration Auto-Check Report</div>
    <div v-for="(res, idx) in result" :key="idx">
      <div v-if="'founder' in res.item[0]">
        <div class="mb-2 display-7 fw-bold">{{ (res as AssessmentResultsFounder).name }}</div>
        <div class="row">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="item in (res as AssessmentResultsFounder).item"
          >
            <div>Founder: {{ item.founder }}</div>
            <div v-for="info in item.data" style="margin-top: 30px">
              <information-component
                :title="info.title"
                :dataReceived="info.dataReceived"
                :information="info.information"
                :variant="info.status"
              >
              </information-component>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="mb-2 display-7 fw-bold">{{ (res as AssessmentResults).name }}</div>
        <div class="row">
          <div class="col-md-6 col-lg-4 my-2" v-for="item in (res as AssessmentResults).item">
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

import {
  createProjectJob,
  getAssessmentResults,
  type AssessmentResults,
  type AssessmentResultsFounder
} from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import InformationComponent from '@/components/InformationComponent.vue'

export default {
  components: {
    InformationComponent
  },
  async created() {
    this.result = await getAssessmentResults(this.projectID)
    console.log(this.result)
  },
  data() {
    return {
      result: [] as Array<AssessmentResults> | Array<AssessmentResultsFounder>
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

<style scoped></style>
