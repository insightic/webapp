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
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Woohoo, you're reading this text in a modal!</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApplicationViewMixin from '@/views/applicationSubViews/ApplicationViewMixin'

import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import { createProjectJob, getApplication } from '@/api'
import type { CodeValidationResult } from '@/api'
import ResultComponent from '@/components/ResultComponent.vue'

export default {
  components: {
    ResultComponent
  },
  async created() {
    const projectInfo = await getApplication(this.$route.params.projectID as string).then(
      (res) =>
        res!.Submissions.filter((item) => item.SubmissionID == this.$route.params.submissionID)[0]
    )
    // console.log('projectInfo', projectInfo)
    this.codeValidation = projectInfo.CodeValidationResults
    console.log('codeValid', this.codeValidation)
  },
  data() {
    return {
      codeValidation: [] as CodeValidationResult[],
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
