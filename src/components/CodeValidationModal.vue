<template>
  <div
    class="modal fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">sadfds</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'description', 'list', 'actions', 'tasks', 'visible']
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
