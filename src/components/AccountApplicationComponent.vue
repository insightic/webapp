<template>
  <div class="d-flex my-3 flex-row align-items-center">
    <div class="me-3">
      <i class="text-primary bi bi-grid-1x2-fill" style="font-size: 2.2rem"></i>
    </div>
    <div>
      <div class="mb-1">
        {{ name }}
      </div>

      <div class="text-secondary" style="font-size: 0.8rem">
        Updated at {{ formatDateTime(updatedAt) }}
      </div>
      <div class="text-secondary" style="font-size: 0.8rem">
        Created at {{ formatDateTime(createdAt) }}
      </div>
    </div>
    <div class="ms-auto">
      <button type="button" class="btn btn-sm btn-outline-primary mx-2" @click="$emit('view')">
        View
      </button>
      <button type="button" class="btn btn-sm btn-outline-danger mx-2" @click="$emit('delete')">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers'

export default {
  props: {
    name: { type: String, required: true },
    updatedAt: { type: String, required: true },
    createdAt: { type: String, required: true }
  },
  methods: {
    formatDateTime
  }
}
</script>
