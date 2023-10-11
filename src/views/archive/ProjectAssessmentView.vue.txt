<template>
  <div class="assessment container-fluid row mb-2" style="height: 720px">

    <!-- for sm screen -->
    <div class="sm-stat col-md-12 col-lg-3" style="overflow-y: auto">
      <div class="my-2" v-if="codeQuality.length > 0">
        <h5>Code Quality</h5>
        <div class="row">
          <div class="col-md-6 p-1" v-for="(chunk, idx) in codeQuality" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="securityAnalysis.length > 0">
        <h5>Security Analysis</h5>
        <div class="row">
          <div class="col-md-6 p-1" v-for="(chunk, idx) in securityAnalysis" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="explanation">
        <h5>Code Similarity</h5>

        <div class="row">
          <div class="col-md-12 p-1" v-for="(chunk, idx) in codeSimilarity" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="explanation">
        <h5>Explanation</h5>

        <div style="font-size: 0.85rem">
          {{ explanation }}
        </div>
      </div>
    </div>
    <!--  -->

    <div class="col-md-12 col-lg-3" style="overflow-y: auto">
      <StatusCardGroup
        title="Whitepaper (10/50 passed)"
        :statuses="whitepaper"
        backgroundColor="rgb(249,227,227)"
      />
      <StatusCardGroup
        title="Regulations (5/5 passed)"
        :statuses="regulations"
        backgroundColor="rgba(221,234,252)"
      />
      <StatusCardGroup
        title="Industry Standard"
        :statuses="industryStandard"
        backgroundColor="rgba(227,251,233)"
      />
    </div>
    <div class="col-md-12 col-lg-6">
      <div class="h-100">
        <form>
          <select class="form-select" @change="onContractChange(contract)" v-model="contract">
            <option v-for="(file, idx) in contracts" :key="idx">
              {{ file }}
            </option>
          </select>
        </form>

        <CodeView class="h-100" style="overflow-y: auto" :code="code" />
      </div>
    </div>
    <div class="stat col-md-12 col-lg-3" style="overflow-y: auto">
      <div class="my-2" v-if="codeQuality.length > 0">
        <h5>Code Quality</h5>
        <div class="row">
          <div class="col-md-6 p-1" v-for="(chunk, idx) in codeQuality" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="securityAnalysis.length > 0">
        <h5>Security Analysis</h5>
        <div class="row">
          <div class="col-md-6 p-1" v-for="(chunk, idx) in securityAnalysis" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="explanation">
        <h5>Code Similarity</h5>

        <div class="row">
          <div class="col-md-12 p-1" v-for="(chunk, idx) in codeSimilarity" :key="idx">
            <TextCard :label="chunk.label" :text="chunk.text" :footer="chunk.footer" />
          </div>
        </div>
      </div>

      <div class="my-2" v-if="explanation">
        <h5>Explanation</h5>

        <div style="font-size: 0.85rem">
          {{ explanation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StatusCardGroup from '@/components/StatusCardGroup.vue'
import TextCard from '@/components/TextCard.vue'
import CodeView from '@/components/CodeView.vue'

export default {
  props: ['project'],
  components: {
    StatusCardGroup,
    TextCard,
    CodeView
  },
  data() {
    return {
      contract: ''
    }
  },
  created() {
    this.contract = this.contracts[0] || ''
  },
  computed: {
    whitepaper() {
      return this.project?.assessmentView?.whitepaper || []
    },
    regulations() {
      return this.project?.assessmentView?.regulations || []
    },
    industryStandard() {
      return this.project?.assessmentView?.industryStandard || []
    },
    contracts() {
      let contracts = this.project?.assessmentView?.contracts || {}
      return Object.keys(contracts)
    },
    code() {
      let contracts = this.project?.assessmentView?.contracts || {}
      return contracts[this.contract] || ''
    },
    codeQuality() {
      return this.project?.assessmentView?.codeQuality || []
    },
    securityAnalysis() {
      return this.project?.assessmentView?.securityAnalysis || []
    },
    codeSimilarity() {
      return this.project?.assessmentView?.codeSimilarity || []
    },
    explanation() {
      return this.project?.assessmentView?.explanation || ''
    }
  },
  methods: {
    onContractChange(contract: string | null) {
      console.log('onContractChange', contract)
    }
  }
}
</script>

<style scoped>
  .sm-stat {
    display: block;
  }

  .stat {
    display: none;
  }

  .assessment > div {
    height: unset;
  }

@media (min-width: 768px) { 
  .sm-stat {
    display: none;
  }

  .stat {
    display: block;
  }

}

@media (min-width: 992px) {
  .assessment > div {
    height: 100%;
  }
}

</style>

