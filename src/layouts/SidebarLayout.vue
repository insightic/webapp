<template>
  <BasicLayout>
    <div class="content d-flex flex-md-row flex-column-reverse">
      <div class="sidebar p-3">
        <h3>{{ name }}</h3>

        <SideBarButtonComponent
          v-for="(subView, idx) in subViews.filter((v) => !v.hidden)"
          :key="idx"
          :name="subView.name"
          :icon="subView.icon"
          :selected="subView.name == subViewName"
          @click="clickSideBar(subView.name)"
        />

        <hr class="my-4" />

        <h3>Links</h3>

        <SideBarButtonComponent
          name="Blog"
          icon="bi-info-circle"
          right-icon="bi-box-arrow-up-right"
          @click="() => openUrl('https://insightic.io/blog')"
        />

        <SideBarButtonComponent
          name="About"
          icon="bi-card-heading"
          right-icon="bi-box-arrow-up-right"
          @click="() => openUrl('https://insightic.io/about')"
        />

        <SideBarButtonComponent
          name="Contact Us"
          icon="bi-shield-lock"
          right-icon="bi-box-arrow-up-right"
          @click="() => openUrl('https://insightic.io/contact-us')"
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
        <div style="height: 60px"></div>
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
    openUrl(url: string) {
      window.open(url)
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
  background-color: var(--tblr-gray-800);
  border-top: 1px solid var(--tblr-border-color);
  width: 100%;
  min-width: 280px;
}

.main {
  min-height: 50vh;
}

@media (min-width: 768px) {
  .content {
    height: 100%;
  }

  .sidebar {
    background-color: var(--tblr-gray-800);
    border-right: 1px solid var(--tblr-border-color);
    overflow: auto;
    width: 280px;
  }

  .main {
    overflow: auto;
  }
}
</style>
