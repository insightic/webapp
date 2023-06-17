<template>
  <div>
    <NavBarComponent />

    <div class="d-flex flex-md-row flex-column-reverse flex-grow-1">
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

        <button
          v-if="backButtonPath"
          type="button"
          class="mt-3 w-100 btn btn-outline-primary"
          @click="back()"
        >
          {{ backButtonName }}
        </button>
        <button type="button" class="mt-3 w-100 btn btn-outline-danger">Logout</button>
      </div>
      <div class="flex-grow-1 p-3">
        <h1>{{ selectSubView.name }}</h1>
        <component :is="{ ...selectSubView.component }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue'
import SideBarButtonComponent from '@/components/SideBarButtonComponent.vue'

export interface SubView {
  name: string
  icon: string
  hidden?: boolean
  component: any
}

export default {
  components: {
    NavBarComponent,
    SideBarButtonComponent
  },
  props: {
    name: { type: String, required: true },
    subViews: { type: Array<SubView>, required: true },
    defaultSubView: { type: String, required: true },
    backButtonName: { type: String },
    backButtonPath: { type: String }
  },
  computed: {
    subViewName(): string {
      const tab = this.$route.query.tab || this.defaultSubView
      return tab.toString()
    },
    selectSubView(): SubView {
      return this.subViews.filter((v) => v.name == this.subViewName)[0]
    }
  },
  methods: {
    clickSideBar(view: string) {
      this.$router.push({ query: { tab: view } })
    },
    back() {
      this.$router.push(this.backButtonPath!)
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 100%;
  border-right: 1px solid #e0e0e0;
  background-color: #e9f2f8;
}

@media (min-width: 768px) {
  .sidebar {
    width: 300px;
  }
}
</style>
