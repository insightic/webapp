<template>
  <div
    class="action-status-card p-3 my-2"
    :class="{ danger: type == 'danger', warn: type == 'warn', primary: type == 'primary' }"
    style="cursor: pointer"
  >
    <div class="d-flex">
      <div style="margin-right: 15px; font-size: 1.5rem">
        <i v-if="type == 'danger'" class="bi bi-exclamation-triangle"></i>
        <i v-if="type == 'warn'" class="bi bi-info-circle"></i>
        <i v-if="type == 'primary'" class="bi bi-check-circle"></i>
      </div>
      <div class="align-self-center">
        <div style="font-size: 0.9rem">
          <b>{{ title }}</b>
        </div>
        <div style="font-size: 0.8rem; margin-top: 6px">
          {{ shortText(text) }}
        </div>
        <div style="font-size: 0.8rem; margin-top: 10px"><u>Details</u></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'text', 'type'],
  methods: {
    shortText(text: string) {
      return text.length > 70 ? text.substring(0, 70) + '...' : text
    }
  }
}
</script>

<style>
.action-status-card {
  padding: 10px;
  background-color: rgba(233, 233, 233, 0.5);
  border-radius: 10px;
}

.danger {
  background-color: rgb(243, 210, 215, 0.5) !important;
}

.warn {
  background-color: rgba(243, 233, 185, 0.5) !important;
}

.primary {
  background-color: rgba(159, 193, 245, 0.5) !important;
}
</style>
