<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 1900px">
    <h3 class="mb-4 fw-bold">DLT Foundation Details Registration Auto-Check Report</h3>
    <div v-for="(res, idx) in result" :key="idx">
      <div v-if="'founder' in res.item[0]">
        <div class="mb-2 display-7 fw-bold">{{ (res as AssessmentResultsFounder).name }}</div>

        <div v-for="(item, idx) in (res as AssessmentResultsFounder).item" :key="idx">
          <div>Founder: {{ item.founder }}</div>
          <div class="row">
            <div
              class="col-md-6 col-lg-4 my-2"
              v-for="(info, infoIdx) in item.data"
              :key="infoIdx"
              style="margin-top: 30px"
            >
              <information-component
                :title="info.title"
                :dataReceived="info.dataReceived"
                :information="info.information"
                :variant="info.status"
                @click="showResultModal(info)"
              >
              </information-component>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="mb-2 display-7 fw-bold">{{ (res as AssessmentResults).name }}</div>
        <div class="row">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="(item, itemIdx) in (res as AssessmentResults).item"
            :key="itemIdx"
          >
            <information-component
              :title="item.title"
              :dataReceived="item.dataReceived"
              :information="item.information"
              :variant="item.status"
              @click="showResultModal(item)"
            >
            </information-component>
          </div>
        </div>
      </div>
      <AutoAssessmentModal
        :result="selectedAssessmentResult"
        :visible="showAssessmentModal"
        @close="showAssessmentModal = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationViewMixin from './ApplicationViewMixin'

import {
  createProjectJob,
  getAssessmentResults,
  type AssessmentResults,
  type AssessmentResultsFounder,
  type AssessmentResultsItem
} from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import InformationComponent from '@/components/InformationComponent.vue'
import AutoAssessmentModal from '@/components/AutoAssessmentModal.vue'

export default {
  components: {
    InformationComponent,
    AutoAssessmentModal
  },
  async created() {
    this.result = await getAssessmentResults(this.projectID)
    console.log(this.result)
  },
  data() {
    return {
      result: [] as Array<AssessmentResults> | Array<AssessmentResultsFounder>,
      showAssessmentModal: false,
      selectedAssessmentResult: null as AssessmentResultsItem | null
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    },
    showResultModal(result: AssessmentResultsItem) {
      this.selectedAssessmentResult = result
      this.showAssessmentModal = true
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>

<style scoped></style>
