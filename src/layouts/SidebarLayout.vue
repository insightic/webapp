<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-3">
      <h5 class="mb-4">{{ name }}</h5>

      <SideBarButtonComponent
        v-for="(subView, idx) in subViews"
        :key="idx"
        :name="subView.name"
        :icon="subView.icon"
        :selected="subView.name == tabName"
        @click="clickSideBar(subView.name)"
      />

      <hr style="color: rgba(0, 0, 0, 0.2)" />

      <button type="button" class="mt-3 w-100 btn btn-outline-danger">Logout</button>
    </div>
    <div class="flex-grow-1 p-3">
      <h1>{{ selectedTab.name }}</h1>
      <component :is="{...selectedTab.component}" />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'

export interface SubView {
  name: string
  icon: string
  component: any
}

export default {
  components: {
    NavBar,
    SideBarButtonComponent
  },
  props: {
    name: { type: String, required: true },
    subViews: { type: Array<SubView>, required: true },
    defaultSubView: { type: String, required: true }
  },
  computed: {
    tabName(): string {
      const tab = this.$route.query.tab || this.defaultSubView
      return tab.toString()
    },
    selectedTab(): SubView {
      return this.subViews.filter((v) => v.name == this.tabName)[0]
    }
  },
  methods: {
    clickSideBar(view: string) {
      this.$router.push({ query: { tab: view } })
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  border-right: 1px solid #e0e0e0;
  transition: width 0.5s;
  background-color: #e9f2f8;
}
</style>
