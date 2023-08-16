<template>
  <BasicLayout>
    <div class="container p-3 mb-5">
      <h1>Submission</h1>
      <div class="text-secondary">Submission Details</div>

      <ul class="nav nav-pills my-3">
        <li class="nav-item">
          <btn class="nav-link" :class="{ active: subViewIdx == 0 }" @click="subViewIdx = 0"
            >Details</btn
          >
        </li>
        <li class="nav-item">
          <btn class="nav-link" :class="{ active: subViewIdx == 1 }" @click="subViewIdx = 1"
            >Assessment</btn
          >
        </li>
        <li class="nav-item">
          <btn class="nav-link" :class="{ active: subViewIdx == 2 }" @click="subViewIdx = 2"
            >Code Validation</btn
          >
        </li>
      </ul>
      <hr />
      <div>
        <component :is="activeSubView"></component>
      </div>
    </div>
  </BasicLayout>
</template>

<script lang="ts">
import { toRaw, type Component } from 'vue'
import BasicLayout from '@/layouts/BasicLayout.vue'
import ApplicationSourceCodeView from '@/views/applicationSubViews/ApplicationSourceCodeView.vue'
import SubmissionDetailsView from '@/views/submissionSubViews/SubmissionDetailsView.vue'

export default {
  components: {
    BasicLayout
  },
  data() {
    return {
      subViewIdx: 0,
      subViews: [SubmissionDetailsView, ApplicationSourceCodeView, ApplicationSourceCodeView]
    }
  },
  computed: {
    activeSubView(): Component {
      return toRaw(this.subViews[this.subViewIdx])
    }
  }
}
</script>

<style scoped>
btn {
  cursor: pointer;
}
</style>
