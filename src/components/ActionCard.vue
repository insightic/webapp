<template>
  <div class="action-card p-3 py-4">
    <div class="d-flex">
      <div
        class="align-self-center"
        style="
          margin-right: 10px;
          color: white;
          border-radius: 4px;
          background-color: rgba(39, 50, 131);
          width: 64px;
          height: 64px;
          font-size: 1.5rem;
          text-align: center;
          line-height: 64px;
        "
      >
        <slot />
      </div>
      <div class="align-self-center" style="text-align: center; flex-grow: 1">
        <div style="font-size: 0.7rem; color: rgb(135, 136, 141)">{{ title }}</div>
        <div style="font-size: 2rem">
          {{ status }}
          <span :class="{ up: type == 'up', down: type == 'down' }" style="font-size: 0.9rem">{{
            changes
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'status', 'changes', 'type']
}
</script>

<style scoped>
.action-card {
  border-radius: 4px;
  border: 1px solid rgba(39, 50, 131);
}

.up {
  color: rgb(19, 170, 3);
}

.down {
  color: red;
}
</style>
