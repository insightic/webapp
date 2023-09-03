<template>
  <div
    class="modal modal-lg fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ result?.description }}</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <div
              :class="{
                'bg-danger': variant == 'danger',
                'bg-warning': variant == 'warning',
                'bg-success': variant == 'success'
              }"
              class="rounded p-3 bg-opacity-50 h-100 w-100"
            >
              {{ result?.pass }}
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <h5>Whitepaper</h5>
              <div>{{ result?.whitepaper }}</div>
            </div>
            <div class="col-6">
              <h5>Code</h5>
              <div>{{ result?.code }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { CodeValidationResult } from '@/api'
import type { PropType } from 'vue'

export default {
  props: {
    result: { type: Object as PropType<CodeValidationResult | null>, required: false },
    visible: { type: Boolean, required: true }
  },
  computed: {
    variant() {
      if (this.result?.pass == 'YES') return 'success'
      if (this.result?.pass == 'NO') return 'danger'
      else return 'warning'
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
