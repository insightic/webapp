<template>
  <div class="container-fluid row mb-2" style="height: 720px">
    <div class="h-100 col-md-2" style="overflow-y: auto">
      <h5>White Paper</h5>
      <StatusCard text="✅ [dex011]" footer="Tokens symbol is BSW" />
      <StatusCard text="✅ [dex012]" footer="BEP-20 standard" />
      <StatusCard text="✅ [dex013]" footer="700000000" />
      <StatusCard text="❌ [dex014]" footer="Is ERC20 Token Standard Implemented?" />
      <StatusCard
        text="✅ [dex015]"
        footer="How many types of Swap Fee Tiers are mentioned in code?"
      />
      <StatusCard
        text="✅ [dex016]"
        footer="What is the swap fee for a single token swap?"
      />
      <StatusCard
        text="✅ [dex017]"
        footer="How much of the swap fee will be taken by developers by _mintFee()?"
      />
      <StatusCard
        text="✅ [dex018]"
        footer="Is the code Applicable to AMM?"
      />
      <StatusCard
        text="✅ [dex019]"
        footer="Is trading pairs other than those with WBNB allowed?"
      />
      <StatusCard
        text="✅ [dex0110]"
        footer="Is the smart contracts capable to prevent frontrunning attacks?"
      />
      <StatusCard
        text="✅ [dex0111]"
        footer="Is on-chain or off-chain price feeds used for the token prices?"
      />
      <StatusCard
        text="✅ [dex0112]"
        footer="Does the smart contract implement a decentralized governance mechanism?"
      />
      <StatusCard
        text="✅ [dex0113]"
        footer="Is there a restriction on the maximum transaction amount or frequency for a given address?"
      />
    </div>
    <div class="col-md-7">
      <div class="h-100" style="background-color: red"></div>
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

        BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens
        on the Binance Smart Chain network. The platform features a three-level referral system and
        low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in
        the DeFi space by offering fast, secure, and easy-to-use services.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StatusCard from '@/components/StatusCard.vue'
import TextCard from '@/components/TextCard.vue'

export default {
  props: ['project'],
  components: {
    StatusCard,
    TextCard
  }
}
</script>
