<template>
  <div class="container-fluid row mb-5" style="height: 720px">
    <div class="h-100 col-md-3" style="overflow-y: auto;">
      <h5>White Paper</h5>
    </div>
    <div class="col-md-6">
      <div class="h-100" style="background-color: red"></div>
    </div>
    <div class="h-100 col-md-3" style="overflow-y: auto;">
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
import TextCard from '@/components/TextCard.vue'

export default {
  props: ['project'],
  components: {
    TextCard
  }
}
</script>
