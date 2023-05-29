<template>
  <div class="container-fluid row mb-2" style="height: 720px">
    <div class="h-100 col-md-3" style="overflow-y: auto">
      <StatusCardGroup
        title="Whitepaper (10/50 passed)"
        :statuses="statuses"
        backgroundColor="rgb(249,227,227)"
      />
      <StatusCardGroup
        title="Regulations (5/5 passed)"
        :statuses="statuses"
        backgroundColor="rgba(221,234,252)"
      />
      <StatusCardGroup
        title="Industry Standard"
        :statuses="statuses"
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
      contract: '',
      statuses: [
        {
          text: '✅ [dex011]',
          footer: 'Tokens symbol is BSW',
          desciptionTitle: 'Ticker Symbol: BSW',
          desciptionText: "contract BSWToken is BEP20('Biswap', 'BSW')"
        },
        {
          text: '✅ [dex012]',
          footer: 'BEP-20 standard',
          desciptionTitle: 'Chain: BNB Chain (BEP-20)',
          desciptionText: "Contract BSWToken is BEP20('Biswap', 'BSW')"
        },
        {
          text: '✅ [dex013]',
          footer: '700000000',
          desciptionTitle: 'Max Supply: 700 000 000 BSW tokens',
          desciptionText: 'The total token supply is 700,000,000'
        },
        {
          text: '❌ [dex014]',
          footer: 'Is ERC20 Token Standard Implemented?',
          desciptionTitle:
            'No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem',
          desciptionText:
            'Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface.'
        },
        {
          text: '✅ [dex015]',
          footer: 'How many types of Swap Fee Tiers are mentioned in code?',
          desciptionTitle: 'N.A.',
          desciptionText:
            'There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1.'
        },
        {
          text: '✅ [dex016]',
          footer: 'What is the swap fee for a single token swap?',
          desciptionTitle:
            'The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.',
          desciptionText: 'The default swap fee is 1 basis point (0.01%).'
        },
        {
          text: '✅ [dex017]',
          footer: 'How much of the swap fee will be taken by developers by _mintFee()?',
          desciptionTitle:
            'Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.',
          desciptionText:
            'The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract.'
        },
        {
          text: '✅ [dex018]',
          footer: 'Is the code Applicable to AMM?',
          desciptionTitle:
            'The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.',
          desciptionText:
            'Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection.'
        },
        {
          text: '✅ [dex019]',
          footer: 'Is trading pairs other than those with WBNB allowed?',
          desciptionTitle:
            'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
          desciptionText:
            'The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB.'
        },
        {
          text: '✅ [dex0110]',
          footer: 'Is the smart contracts capable to prevent frontrunning attacks?',
          desciptionTitle: 'N.A.',
          desciptionText:
            'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'
        },
        {
          text: '✅ [dex0111]',
          footer: 'Is on-chain or off-chain price feeds used for the token prices?',
          desciptionTitle: 'N.A.',
          desciptionText:
            'The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool.'
        },
        {
          text: '✅ [dex0112]',
          footer: 'Does the smart contract implement a decentralized governance mechanism?',
          desciptionTitle:
            'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
          desciptionText:
            'No, the Biswap smart contract does not implement a decentralized governance mechanism.'
        },
        {
          text: '✅ [dex0113]',
          footer:
            'Is there a restriction on the maximum transaction amount or frequency for a given address?',
          desciptionTitle:
            'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
          desciptionText:
            'The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address.'
        }
      ]
    }
  },
  created() {
    this.contract = this.contracts[0] || ''
  },
  computed: {
    contracts() {
      let contracts = this.project?.assessment?.contracts || {}
      return Object.keys(contracts)
    },
    code() {
      let contracts = this.project?.assessment?.contracts || {}
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
