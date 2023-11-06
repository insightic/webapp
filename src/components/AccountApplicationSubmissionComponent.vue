<template>
  <div class="d-flex my-3 flex-row align-items-center">
    <div class="me-3">
      <img src="https://via.placeholder.com/100" style="width: 100px; height: 100px" />
    </div>
    <div>
      <div class="d-flex align-items-center">
        <div class="me-2">
          <div>{{ name }}</div>
        </div>

        <div
          class="p-1 rounded"
          style="font-size: 0.6rem; color: white"
          :style="{
            'background-color': `var(--bs-${getStatusBackgroundColor(status)})`
          }"
        >
          {{ status }}
        </div>
      </div>

      <div class="small mb-1">{{ oneLiner }}</div>

      <div class="text-secondary" style="font-size: 0.8rem">Submission ID: {{ submissionId }}</div>
      <div class="text-secondary" style="font-size: 0.8rem">
        Created at {{ formatDate(createdAt) }}
      </div>
    </div>
    <div class="ms-auto">
      <button
        type="button"
        class="btn btn-sm btn-outline-primary mx-2"
        @click="$emit('continue')"
        v-if="status == 'draft'"
      >
        Continue Submission
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-primary mx-2"
        @click="$emit('view')"
        v-if="status == 'active'"
      >
        View
      </button>
      <button type="button" class="btn btn-sm btn-outline-danger mx-2" @click="$emit('delete')">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDate } from '@/helpers'

export default {
  props: {
    name: { type: String, required: true },
    oneLiner: { type: String, required: true },
    status: { type: String, default: 'inactive' },
    submissionId: { type: String, required: true },
    createdAt: { type: String, required: true }
  },
  methods: {
    formatDate,
    getStatusBackgroundColor(status: string) {
      if (status == 'active') return 'success'
      if (status == 'inactive') return 'secondary'
      if (status == 'draft') return 'primary'
      if (status == 'rejected') return 'danger'
      return 'secondary'
    }
  }
}
</script>
