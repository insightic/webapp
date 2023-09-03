<template>
  <div id="app" class="container p-3">
    <div>
      <div class="w-100 my-3 mx-auto">
        <div v-if="loading" class="text-center my-5">
          <div class="spinner-border"></div>
        </div>
        <div v-else class="row">
          <div class="col-md-6 col-lg-4 my-2" v-for="(item, idx) in codeValidation" :key="idx">
            <result-component
              :title="item.description"
              :whitepaper="item.whitepaper"
              :code="item.code"
              :variant="getVariant(item)"
              style="cursor: pointer"
              @click="showResultModal(item)"
            >
            </result-component>
          </div>
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

    this.codeValidation = projectInfo.Results.CodeValidation
    this.loading = false
  },
  data() {
    return {
      codeValidation: [] as CodeValidationResult[],
      showCodeValidationModal: false,
      selectedCodeValidationResult: null as CodeValidationResult | null,
      loading: true
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    },
    getVariant(result: CodeValidationResult) {
      if (result.pass == 'YES') return 'success'
      if (result.pass == 'NO') return 'danger'
      else return 'warning'
    },
    showResultModal(result: CodeValidationResult) {
      this.selectedCodeValidationResult = result
      this.showCodeValidationModal = true
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>
