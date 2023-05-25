<template>
  <div class="container mt-5">
    <div>
      <h1>Wolf Game</h1>
      <div>
        Created by
        <span style="color: rgba(39, 50, 131)"
          ><u>{{ author }}</u></span
        >
        on
        <span style="color: rgba(39, 50, 131)"
          ><u>{{ formatDate(date) }}</u></span
        >
      </div>
    </div>

    <div class="mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="business-model-analysis-tab"
            data-bs-toggle="tab"
            href="#business-model-analysis"
            role="tab"
            aria-controls="business-model-analysis"
            aria-selected="true"
            >Business Model Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="social-media-analysis-tab"
            data-bs-toggle="tab"
            href="#social-media-analysis"
            role="tab"
            aria-controls="social-media-analysis"
            aria-selected="false"
            >Social Media Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="on-chain-data-analysis-tab"
            data-bs-toggle="tab"
            href="#on-chain-data-analysis"
            role="tab"
            aria-controls="on-chain-data-analysis"
            aria-selected="false"
            >On-Chain Data Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="team-background-analysis-tab"
            data-bs-toggle="tab"
            href="#team-background-analysis"
            role="tab"
            aria-controls="team-background-analysis"
            aria-selected="false"
            >Team Background Analysis</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="business-model-analysis"
          role="tabpanel"
          aria-labelledby="business-model-analysis-tab"
        >
          <div class="mt-3">
            <div class="row">
              <div class="col-md-7">
                <h3>Business model & Value Proposition</h3>
                <p>
                  Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type
                  Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem
                  that offers the best service and creates new standards in DeFi.
                </p>
                <h3>Customer Segments</h3>
                <p>
                  Retail investors who need to swap tokens Institutiona funds who conduct AMM
                  business VASPs who IDO.
                </p>
              </div>
              <div class="col-md-5">
                <div class="row">
                  <TextCard class="col-5 m-1" label="Revenue" text="$405,091.00" />
                  <TextCard class="col-5 m-1" label="Overdue invoices" text="$12,787.00" />
                  <TextCard class="col-5 m-1" label="Outstanding invoices" text="$245,988.00" />
                  <TextCard class="col-5 m-1" label="Expenses" text="$30,156.00" />
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <Tag tag="P2P Trading" />
                  <Tag tag="Deposits" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="social-media-analysis"
          role="tabpanel"
          aria-labelledby="social-media-analysis-tab"
        >
          <div class="mt-3">
            <div class="row">
              <div class="col-md-7">
                <h3>Twitter Analysis</h3>
                <p>
                  Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type
                  Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem
                  that offers the best service and creates new standards in DeFi.
                </p>
                <h3>Blog Analysis</h3>
                <p>
                  Retail investors who need to swap tokens Institutiona funds who conduct AMM
                  business VASPs who IDO.
                </p>
              </div>
              <div class="col-md-5">
                <div class="row">
                  <TextCard class="col-5 m-1" label="Revenue" text="$405,091.00" />
                  <TextCard class="col-5 m-1" label="Overdue invoices" text="$12,787.00" />
                  <TextCard class="col-5 m-1" label="Outstanding invoices" text="$245,988.00" />
                  <TextCard class="col-5 m-1" label="Expenses" text="$30,156.00" />
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <Tag tag="P2P Trading" />
                  <Tag tag="Deposits" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="on-chain-data-analysis"
          role="tabpanel"
          aria-labelledby="on-chain-data-analysis-tab"
        >
          <div class="mt-3">
            <div class="row">
              <div class="col-md-7">
                <h3>Business model & Value Proposition</h3>
                <p>
                  Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type
                  Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem
                  that offers the best service and creates new standards in DeFi.
                </p>
                <h3>Customer Segments</h3>
                <p>
                  Retail investors who need to swap tokens Institutiona funds who conduct AMM
                  business VASPs who IDO.
                </p>
              </div>
              <div class="col-md-5">
                <div class="row">
                  <TextCard class="col-5 m-1" label="Revenue" text="$405,091.00" />
                  <TextCard class="col-5 m-1" label="Overdue invoices" text="$12,787.00" />
                  <TextCard class="col-5 m-1" label="Outstanding invoices" text="$245,988.00" />
                  <TextCard class="col-5 m-1" label="Expenses" text="$30,156.00" />
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <Tag tag="P2P Trading" />
                  <Tag tag="Deposits" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="team-background-analysis"
          role="tabpanel"
          aria-labelledby="team-background-analysis-tab"
        >
          <div class="mt-3">
            <div class="row">
              <div class="col-md-7">
                <h3>On-Chain Analysis</h3>
                <p>
                  Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type
                  Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem
                  that offers the best service and creates new standards in DeFi.
                </p>
                <h3>Twitter Analysis</h3>
                <p>
                  Retail investors who need to swap tokens Institutiona funds who conduct AMM
                  business VASPs who IDO.
                </p>
                <h3>LinkedIn Analysis</h3>
                <p>
                  Retail investors who need to swap tokens Institutiona funds who conduct AMM
                  business VASPs who IDO.
                </p>
              </div>
              <div class="col-md-5">
                <div class="row">
                  <TextCard class="col-5 m-1" label="Revenue" text="$405,091.00" />
                  <TextCard class="col-5 m-1" label="Overdue invoices" text="$12,787.00" />
                  <TextCard class="col-5 m-1" label="Outstanding invoices" text="$245,988.00" />
                  <TextCard class="col-5 m-1" label="Expenses" text="$30,156.00" />
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <Tag tag="P2P Trading" />
                  <Tag tag="Deposits" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue'
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    Tag,
    TextCard
  },
  data() {
    return {
      author: 'Yiwei Gong',
      date: new Date()
    }
  },
  methods: {
    formatDate(date: Date) {
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: rgb(135, 136, 141);
}

.nav-link.active {
  color: rgba(39, 50, 131) !important;
}
</style>
