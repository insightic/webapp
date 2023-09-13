<template>
  <div
    class="modal modal-lg fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-opacity-50" :class="'bg-' + getVariant(result)">
          <div class="d-flex align-items-center">
            <div
              class="p-1 px-2 border rounded me-2 border-dark bg-opacity-75 small"
              :class="'bg-' + getVariant(result)"
            >
              {{ passText(result) }}
            </div>
            <h5 class="modal-title">{{ toTitleCase(result?.title) }}</h5>
          </div>

          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <h5>Information</h5>
            <div>{{ result?.information }}</div>
          </div>
          <div class="mb-2">
            <h5>DataReceived</h5>
            <div>{{ result?.dataReceived }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { AssessmentResultsItem } from '@/api'
import type { PropType } from 'vue'

export default {
  props: {
    result: {
      type: Object as PropType<AssessmentResultsItem | null>,
      required: false
    },
    visible: { type: Boolean, required: true }
  },
  methods: {
    toTitleCase(str: string | undefined) {
      if (!str) return ''
      return str.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    getVariant(result: AssessmentResultsItem | undefined | null) {
      if (result?.status == 'Pass') return 'success'
      if (result?.status == 'not sure') return 'warning'
      if (result?.status == 'Fail') return 'danger'
    },
    passText(result: AssessmentResultsItem | undefined | null) {
      if (result?.status == 'Pass') return 'Passed'
      if (result?.status == 'not sure') return 'Warning'
      if (result?.status == 'Fail') return 'Risk'
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
