<template>
  <div class="container-fluid row mb-2" style="height: 720px">
    <div class="h-100 col-md-3" style="overflow-y: auto">
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
    <div class="col-md-6">
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
    <div class="h-100 col-md-3" style="overflow-y: auto">
      <div class="my-2">
        <h5>Code Quality</h5>
        <div class="row">
          <div class="col-md-6 p-1">
            <TextCard label="Maintainability" text="A" footer="Created by SonarCube" />
          </div>
          <div class="col-md-6 p-1">
            <TextCard label="Test Coverage" text="80%" footer="Created by Jest" />
          </div>
          <div class="col-md-6 p-1">
            <TextCard label="Performance" text="B" footer="Created by GPT" />
          </div>
        </div>
      </div>

      <div class="my-2">
        <h5>Security Analysis</h5>
        <div class="row">
          <div class="col-md-6 p-1">
            <TextCard label="Score" text="80/100" footer="Created by Hacken" />
          </div>
          <div class="col-md-6 p-1">
            <TextCard label="Audits" text="85/100" footer="Created by Verazt" />
          </div>
        </div>
      </div>

      <div class="my-2">
        <h5>Explanation</h5>

        <div style="font-size: 0.85rem">
          BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens
          on the Binance Smart Chain network. The platform features a three-level referral system
          and low transaction fees (0.1%). Our mission is to become a leading platform for token
          swaps in the DeFi space by offering fast, secure, and easy-to-use services.
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
    }
  },
  methods: {
    onContractChange(contract: string | null) {
      console.log('onContractChange', contract)
    }
  }
}
</script>
