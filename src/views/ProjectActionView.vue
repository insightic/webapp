<template>
  <div>
    <div class="row my-3">
      <div class="col-md-4"><ActionCard title="Total Suggestion" status="17" /></div>
      <div class="col-md-4"><ActionCard title="Completed" status="5" /></div>
      <div class="col-md-4"><ActionCard title="Action Needed" status="8" /></div>
    </div>
    <h4>Action</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in statuses" :key="idx">
        <ActionStatusCard :title="status.title" :text="status.text" />
      </div>
    </div>
    <h4>Task</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in statuses" :key="idx">
        <ActionStatusCard :title="status.title" :text="status.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ActionStatusCard from '@/components/ActionStatusCard.vue'
import ActionCard from '@/components/ActionCard.vue'

export default {
  props: ['project'],
  components: {
    ActionStatusCard,
    ActionCard
  },
  data() {
    return {
      statuses: [
        {
          title: 'Require 1 or more security audit report',
          text: 'Suggest the VASP to submit at least another security audit report within 45 days...'
        },
        {
          title: 'Code has not been updates for long time',
          text: 'Suggest the VASP to link Github account or submit a new code base.'
        },
        {
          title: 'Risky wallets interaction',
          text: 'The deployed contract has attracted many newly wallets. Require VASP to validate...'
        },
        {
          title: 'Code has high similarity to Uniswap',
          text: 'Suggest the VASP to further clarify the differences for not violating Business S...'
        },
        {
          title: 'High botting rate',
          text: "Suggest to review the VASP's solution on bot detection and IP restriction."
        },
        {
          title: 'Core contract has been modified recently',
          text: 'Dangerous to update the core smart contract code. The audit reports may not be s...'
        },
        {
          title: 'Orderbook Spoofing',
          text: 'There is a high chance that the order book design has no restriction on spoofing...'
        }
      ]
    }
  }
}
</script>
