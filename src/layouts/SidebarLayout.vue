<template>
  <BasicLayout>
    <div class="d-flex flex-md-row flex-column-reverse" style="height: 100%">
      <div class="sidebar p-3">
        <h5 class="mb-4">{{ name }}</h5>

        <SideBarButtonComponent
          v-for="(subView, idx) in subViews.filter((v) => !v.hidden)"
          :key="idx"
          :name="subView.name"
          :icon="subView.icon"
          :selected="subView.name == subViewName"
          @click="clickSideBar(subView.name)"
        />

        <hr style="color: rgba(0, 0, 0, 0.2)" />

        <h5 class="mb-4">Support</h5>

        <SideBarButtonComponent
          name="Help Center"
          icon="bi-info-circle"
          right-icon="bi-box-arrow-up-right"
        />

        <SideBarButtonComponent
          name="Terms & Conditions"
          icon="bi-card-heading"
          right-icon="bi-box-arrow-up-right"
        />

        <SideBarButtonComponent
          name="Privacy Policy"
          icon="bi-shield-lock"
          right-icon="bi-box-arrow-up-right"
        />

        <button
          v-if="backButtonPath"
          type="button"
          class="mt-3 w-100 btn btn-outline-primary"
          @click="back()"
        >
          {{ backButtonName }}
        </button>
        <button type="button" class="mt-3 w-100 btn btn-outline-danger" @click="logout()">
          Logout
        </button>
      </div>

      <div class="main flex-grow-1 p-3">
        <h1>{{ selectedSubView?.name }}</h1>
        <component :is="selectedComponent" />
        <div style="height: 120px"></div>
      </div>
    </div>
  </BasicLayout>
</template>

<script lang="ts">
import { toRaw, type Component } from 'vue'
import BasicLayout from './BasicLayout.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'
import httpclient from '@/httpclient'

export interface SubView {
  name: string
  icon: string
  hidden?: boolean
  component: Component
}

export default {
  components: {
    BasicLayout,
    SideBarButtonComponent
  },
  props: {
    name: { type: String, required: true },
    subViews: { type: Array<SubView>, required: true },
    defaultSubView: { type: String, required: true },
    backButtonName: { type: String },
    backButtonPath: { type: String }
  },
  created() {
    if (!this.selectedSubView) {
      this.$router.push({ query: { view: this.defaultSubView } })
    }
  },
  computed: {
    subViewName(): string {
      const tab = this.$route.query.view || this.defaultSubView
      return tab.toString()
    },
    selectedSubView(): SubView | null {
      const views = this.subViews.filter((v) => v.name == this.subViewName)
      return views[0]
    },
    selectedComponent(): Component | null {
      const component = this.selectedSubView?.component
      return component ? toRaw(component) : null
    }
  },
  methods: {
    clickSideBar(view: string) {
      this.$router.push({ query: { view: view } })
    },
    back() {
      this.$router.push(this.backButtonPath!)
    },
    async logout() {
      await httpclient.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 100%;
  border-right: 1px solid #e0e0e0;
  background-color: #e9f2f8;
  min-width: 300px;
}

.main {
  min-height: 50vh;
}

@media (min-width: 768px) {
  .sidebar {
    overflow: auto;
    width: 300px;
  }

  .main {
    overflow: auto;
  }
}
</style>
