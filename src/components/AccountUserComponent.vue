<template>
  <div class="d-flex my-3 flex-row">
    <div class="me-2">
      <i
        class="text-primary bi bi-person-circle"
        style="font-size: 1.6rem"
        v-if="role == 'admin'"
      ></i>
      <i class="text-primary bi bi-person" style="font-size: 1.6rem" v-if="role == 'user'"></i>
      <i
        class="text-warning bi bi-person-gear"
        style="font-size: 1.6rem"
        v-if="role == 'agent'"
      ></i>
    </div>
    <div>
      <div>
        {{ name }} <span class="text-secondary small">{{ role }}</span>
      </div>

      <div class="text-secondary small">Added on {{ formatDateTime(createdAt) }}</div>
    </div>
    <div class="ms-auto">
      <button
        type="button"
        class="btn btn-sm btn-outline-success mx-2"
        v-if="role != 'admin'"
        @click="changePassword()"
      >
        Change Password
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-danger mx-2"
        v-if="role != 'admin'"
        @click="askRemove()"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers'

export default {
  props: {
    role: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: String, required: true }
  },
  methods: {
    formatDateTime,
    askRemove() {
      this.$emit('showAskModal')
    },
    changePassword() {
      this.$emit('showChangePasswordModal')
    }
  }
}
</script>
