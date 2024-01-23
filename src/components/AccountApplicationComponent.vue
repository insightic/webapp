<template>
  <div class="d-flex my-3 flex-row align-items-center">
    <div style="min-width: 100px" class="me-3" v-if="logoUrl">
      <img :src="logoUrl" style="width: 100px" />
    </div>
    <div>
      <div class="mb-0">
        {{ name }}
      </div>
      <div class="text-secondary mb-0" v-if="oneLiner">{{ oneLiner }}</div>
      <div class="text-secondary mb-2" v-if="website">
        <a href="website">{{ website }}</a>
      </div>

      <div class="text-secondary" style="font-size: 0.8rem">
        Updated at {{ formatDate(updatedAt) }}
      </div>
      <div class="text-secondary" style="font-size: 0.8rem">
        Created at {{ formatDate(createdAt) }}
      </div>
    </div>
    <div class="ms-auto">
      <button type="button" class="btn btn-sm btn-outline-primary mx-2 my-1" @click="$emit('view')">
        View
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-danger mx-2 my-1"
        @click="$emit('delete')"
      >
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
    logoUrl: { type: String, default: 'https://via.placeholder.com/100' },
    oneLiner: { type: String, default: '' },
    website: { type: String, default: '' },
    updatedAt: { type: String, required: true },
    createdAt: { type: String, required: true }
  },
  methods: {
    formatDate
  }
}
</script>
