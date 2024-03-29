<template>
  <div class="container p-0 mb-5 d-flex justify-content-center">
    <div class="container p-0 mb-5">
      <div class="d-flex justify-content-between mb-3" style="max-width: 960px">
        <div class="text-secondary align-self-center">Submission Details</div>
      </div>

      <div class="w-100 my-3 mx-auto">
        <div v-if="loading" class="text-center my-5">
          <div class="spinner-border"></div>
        </div>
        <div v-else-if="codeValidation && codeValidation.length > 0" class="row">
          <div class="w-100 my-3 mx-auto">
            <div v-if="loading" class="text-center my-5">
              <div class="spinner-border"></div>
            </div>

            <div v-else>
              <div class="w-100 my-2">
                <div class="row mx-auto" style="max-width: 320px">
                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="showPassed" />
                      <label class="form-check-label"> Passed </label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="showRisks" />
                      <label class="form-check-label"> Risks </label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="showWarnings" />
                      <label class="form-check-label"> Warnings </label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="showIgnored" />
                      <label class="form-check-label"> Ignored </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4>Passed</h4>
                <div class="row" v-if="showPassed">
                  <div class="col-md-6 col-lg-4 my-2" v-for="result in passed" :key="result.id">
                    <result-component
                      :result="result"
                      :variant="getVariant(result)"
                      style="cursor: pointer"
                      @click="showResultModal(result)"
                    >
                    </result-component>
                  </div>
                </div>
                <div v-else>
                  <div class="text-secondary small">Hide {{ passed.length }} items</div>
                  <div>
                    <button class="btn btn-sm btn-outline-primary mt-2" @click="showPassed = true">
                      Show
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-3">
                <h4>Risks</h4>
                <div class="row" v-if="showRisks">
                  <div class="col-md-6 col-lg-4 my-2" v-for="result in risks" :key="result.id">
                    <result-component
                      :result="result"
                      :variant="getVariant(result)"
                      style="cursor: pointer"
                      @click="showResultModal(result)"
                    >
                    </result-component>
                  </div>
                </div>
                <div v-else>
                  <div class="text-secondary small">Hide {{ risks.length }} items</div>
                  <div>
                    <button class="btn btn-sm btn-outline-primary mt-2" @click="showRisks = true">
                      Show
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-3">
                <h4>Warnings</h4>
                <div class="row" v-if="showWarnings">
                  <div class="col-md-6 col-lg-4 my-2" v-for="result in warnings" :key="result.id">
                    <result-component
                      :result="result"
                      :variant="getVariant(result)"
                      style="cursor: pointer"
                      @click="showResultModal(result)"
                    >
                    </result-component>
                  </div>
                </div>
                <div v-else>
                  <div class="text-secondary small">Hide {{ warnings.length }} items</div>
                  <div>
                    <button
                      class="btn btn-sm btn-outline-primary mt-2"
                      @click="showWarnings = true"
                    >
                      Show
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-3">
                <h4>Ignored</h4>
                <div class="row" v-if="showIgnored">
                  <div class="col-md-6 col-lg-4 my-2" v-for="result in ignored" :key="result.id">
                    <result-component
                      :result="result"
                      :variant="getVariant(result)"
                      style="cursor: pointer"
                      @click="showResultModal(result)"
                    >
                    </result-component>
                  </div>
                </div>
                <div v-else>
                  <div class="text-secondary small">Hide {{ ignored.length }} items</div>
                  <div>
                    <button class="btn btn-sm btn-outline-primary mt-2" @click="showIgnored = true">
                      Show
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="small text-secondary text-center">Results Not Found.</div>
        </div>
      </div>
    </div>
  </div>

  <CodeValidationModal
    :result="selectedCodeValidationResult"
    :visible="showCodeValidationModal"
    @close="showCodeValidationModal = false"
  />
</template>

<script lang="ts">
import ApplicationViewMixin from '@/views/applicationSubViews/ApplicationViewMixin'

import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import { createProjectJob, getApplication } from '@/api'
import type { CodeValidationResult } from '@/api'
import ResultComponent from '@/components/ResultComponent.vue'
import CodeValidationModal from '@/components/CodeValidationModal.vue'

export default {
  components: {
    ResultComponent,
    CodeValidationModal
  },
  async created() {
    this.loading = true
    const projectInfo = await getApplication(this.$route.params.projectID as string).then(
      (res) =>
        res!.Submissions.filter((item) => item.SubmissionID == this.$route.params.submissionID)[0]
    )

    this.codeValidation = projectInfo?.Results?.CodeValidation || []
    this.loading = false
  },
  data() {
    return {
      codeValidation: [] as CodeValidationResult[],
      showCodeValidationModal: false,
      selectedCodeValidationResult: null as CodeValidationResult | null,
      loading: true,
      showRisks: true,
      showWarnings: true,
      showPassed: false,
      showIgnored: false
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      this.$router.push({ query: { view: 'Validations' } })
    },
    getVariant(result: CodeValidationResult) {
      if (result.pass == 'YES') return 'success'
      if (result.pass == 'NOT SURE') return 'warning'
      if (result.pass == 'NO') return 'danger'
      else return 'secondary'
    },
    showResultModal(result: CodeValidationResult) {
      this.selectedCodeValidationResult = result
      this.showCodeValidationModal = true
    },
    toTitleCase(str: string) {
      if (!str) return ''
      return str.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    shouldShow(result: { pass: string }) {
      if (result.pass == 'NO' && this.showRisks) return true
      if (result.pass == 'NOT SURE' && this.showWarnings) return true
      if (result.pass == 'YES' && this.showPassed) return true
      if (this.showIgnored) return true
      return false
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    jobId() {
      return new URL(window.location.href).searchParams.get('jobId')
    },
    filteredResults() {
      return this.codeValidation.filter((result: any) => this.shouldShow(result))
    },
    passed() {
      return this.codeValidation.filter((result: { pass: string }) => result.pass == 'YES')
    },
    risks() {
      return this.codeValidation.filter((result: { pass: string }) => result.pass == 'NO')
    },
    warnings() {
      return this.codeValidation.filter((result: { pass: string }) => result.pass == 'NOT SURE')
    },
    ignored() {
      return this.codeValidation.filter((result: { pass: string }) => result.pass == 'IGNORED')
    }
  }
}
</script>
