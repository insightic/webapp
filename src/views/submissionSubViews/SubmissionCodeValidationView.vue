<template>
  <div id="app" class="container p-3">
    <div>
      <div class="w-100 text-center my-3">
        <img src="/logo.png" alt="Insightic Logo" style="width: 60px; height: 60px" />
        <h2>Contract Diff - Results</h2>
      </div>

      <div class="w-100 my-3 mx-auto">
        <div v-if="loading" class="text-center my-5">
          <div class="spinner-border"></div>
        </div>
        <div v-else class="row">
          <div
            class="col-md-6 col-lg-4 my-2"
            v-for="item in codeValidation"
            :key="item.description"
          >
            <result-component
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              :title="item.description"
              :whitepaper="item.whitepaper"
              :code="item.code"
              :variant="getVariant(item.whitepaper, item.code)"
            >
            </result-component>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button class="btn btn-primary" @click="showCodeValidationModal = true">Launch demo modal</button>
  <CodeValidationModal
    title="test"
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
    const projectInfo = await getApplication(this.$route.params.projectID as string).then(
      (res) =>
        res!.Submissions.filter((item) => item.SubmissionID == this.$route.params.submissionID)[0]
    )

    this.codeValidation = projectInfo.Results.CodeValidation
  },
  data() {
    return {
      codeValidation: [] as CodeValidationResult[],
      showCodeValidationModal: false,
      loading: false
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    },
    getVariant(whitepaper: string, code: string) {
      if (whitepaper == code) {
        return 'success'
      } else {
        return 'danger'
      }
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>

<style scoped></style>
