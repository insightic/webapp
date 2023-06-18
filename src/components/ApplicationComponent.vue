<template>
  <div class="d-flex my-3 flex-row">
    <div class="me-2">
      <i class="text-primary bi bi-check-circle-fill" v-if="status == 'approved'"></i>
      <i class="text-warning bi bi-clock-fill" v-if="status == 'pending'"></i>
      <i class="text-danger bi bi-x-circle-fill" v-if="status == 'rejected'"></i>
    </div>
    <div>
      <div>{{ toTitleCase(status) }}</div>
      <div class="d-flex">
        <div class="me-3">
          <div class="text-secondary" style="font-size: 0.7rem">Status Updated On</div>
          <div class="text-secondary" style="font-size: 0.7rem">
            {{ formatDateTime('2023-01-02 10:11:02') }}
          </div>
        </div>

        <div>
          <div class="text-secondary" style="font-size: 0.7rem">Application Created On</div>
          <div class="text-secondary" style="font-size: 0.7rem">
            {{ formatDateTime('2023-01-02 10:11:02') }}
          </div>
        </div>
      </div>
    </div>
    <div class="ms-auto">
      <button type="button" class="btn btn-sm btn-outline-danger mx-2" v-if="status == 'pending'">
        Withdraw
      </button>
      <button type="button" class="btn btn-sm btn-outline-primary mx-2" v-if="status == 'rejected'">
        View Report
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDateTime, toTitleCase } from '@/helpers'

export default {
  props: {
    status: { type: String, required: true }
  },
  methods: {
    formatDateTime,
    toTitleCase
  }
}
</script>
