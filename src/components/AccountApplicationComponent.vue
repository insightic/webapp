<template>
  <div class="d-flex my-3 flex-row align-items-center">
    <div class="me-3">
      <img src="https://via.placeholder.com/100" style="width: 100px; height: 100px" />
    </div>
    <div>
      <div class="mb-1">
        {{ name }}
      </div>

      <div class="text-secondary" style="font-size: 0.8rem">
        Updated at {{ formatDate(updatedAt) }}
      </div>
      <div class="text-secondary" style="font-size: 0.8rem">
        Created at {{ formatDate(createdAt) }}
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
import { formatDate } from '@/helpers'

export default {
  props: {
    name: { type: String, required: true },
    updatedAt: { type: String, required: true },
    createdAt: { type: String, required: true }
  },
  methods: {
    formatDate
  }
}
</script>
