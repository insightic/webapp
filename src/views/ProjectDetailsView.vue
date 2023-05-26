<template>
  <div class="container mt-5">
    <div class="d-flex">
      <div style="margin-right: 18px">
        <img :src="project?.logo" class="logo" />
      </div>
      <div class="align-self-center">
        <div class="d-flex">
          <h1 style="margin-right: 18px">{{ project?.name }}</h1>
          <div class="rating align-self-center">
            {{ project?.rating }}
          </div>
        </div>
        <div>
          <a :href="project?.url">{{ project?.url }}</a>
        </div>
        <div>
          Created by
          <span style="color: rgba(39, 50, 131)"
            ><u>{{ project?.author }}</u></span
          >
          on
          <span style="color: rgba(39, 50, 131)"
            ><u>{{ formatDate(project?.dueAt) }}</u></span
          >
        </div>
        <div class="description">{{ project?.description }}</div>
      </div>
    </div>

    <div class="mt-4 d-flex">
        <Tag v-for="tag in project?.tags" :key="tag" :tag="tag" />
    </div>

    <div class="mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="overview-tab"
            data-bs-toggle="tab"
            href="#overview"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
            >Overview</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="assessment-tab"
            data-bs-toggle="tab"
            href="#assessment"
            role="tab"
            aria-controls="assessment"
            aria-selected="true"
            >Assessment</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="actions-tab"
            data-bs-toggle="tab"
            href="#actions"
            role="tab"
            aria-controls="actions"
            aria-selected="false"
            >Actions</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="overview"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <div class="mt-3 d-flex">
            <div style="width: 250px; border-right: 1px solid #e0e0e0; height: 300px">
              <div class="container-fluid">
                <SubSidebarItem text="Business Model Analysis" :active="true" />
                <SubSidebarItem text="Social Media Analysis" />
                <SubSidebarItem text="On-Chain Data Analysis" />
                <SubSidebarItem text="Team Background Analysis" />
              </div>
            </div>
            <div class="w-100">
              <div class="container-fluid">
                <div>
                  <div class="row">
                    <div class="col-md-7">
                      <h3>Business model & Value Proposition</h3>
                      <p>
                        Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type
                        Referral Program and low trade fee starting from 0.1%. Biswap is the
                        ecosystem that offers the best service and creates new standards in DeFi.
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
                        <TextCard
                          class="col-5 m-1"
                          label="Outstanding invoices"
                          text="$245,988.00"
                        />
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
        <div
          class="tab-pane fade show"
          id="assessment"
          role="tabpanel"
          aria-labelledby="assessment-tab"
        >
          <div class="mt-3"></div>
        </div>
        <div class="tab-pane fade" id="actions" role="tabpanel" aria-labelledby="actions-tab">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue'
import SubSidebarItem from '@/components/SubSidebarItem.vue'
import TextCard from '@/components/TextCard.vue'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

export default {
  props: {
    organizationGuid: String,
    projectGuid: String
  },
  components: {
    Tag,
    SubSidebarItem,
    TextCard
  },
  data() {
    return {
      author: 'Yiwei Gong',
      date: new Date()
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    organization() {
      return this.organizationsStore.findOrganization(this.organizationGuid)
    },
    project() {
      return this.organizationsStore.findProject(this.organizationGuid, this.projectGuid)
    }
  },
  methods: {
    formatDate(date: Date | string | undefined) {
      if (!date) {
        return ''
      }
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.logo {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 3px solid rgba(39, 50, 131);
  padding: 7px;
}

.rating {
  font-size: 1.5rem;
  border: 2px solid rgb(39, 50, 131);
  border-radius: 10px;
  padding: 1px 20px 1px 20px;
}

.description {
  max-width: 420px;
  color: rgb(135, 136, 141);
  font-style: italic;
}

.nav-link {
  color: rgb(135, 136, 141);
}

.nav-link.active {
  color: rgba(39, 50, 131) !important;
}
</style>
