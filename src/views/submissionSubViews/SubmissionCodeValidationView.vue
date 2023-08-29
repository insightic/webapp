<template>
  <div id="app" class="container p-3">
    <div>
        <div class="w-100 text-center my-3">
            <img src="/logo.png" alt="Insightic Logo" style="width: 60px; height: 60px;">
            <h2>Contract Diff - Results</h2>
        </div>

        <div class="w-100 my-3 mx-auto">
            <div v-if="loading" class="text-center my-5">
                <div class="spinner-border">
                </div>
            </div>
            <div v-else class="row">
                <div class="col-md-6 col-lg-4 my-2" v-for="item in codeValidation" :key="item.description">
                    <result-component :title="item.description" :whitepaper="item.whitepaper" :code="item.code"
                        :variant="getVariant(item.whitepaper, item.code)">
                    </result-component>
                </div>
            </div>
        </div>

        <div class="w-100 text-center my-3">
            <a class="btn btn-lg btn-primary text-center" style="width: 200px;" type="button" href="/contract-diff">
                Try again
            </a>
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

tbody:last-child tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

tbody:last-child tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
</style>
