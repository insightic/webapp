<template>
  <div class="h-100 d-flex align-items-center">
    <div class="me-3">
      <img src="../../../public/logo.png" class="rounded-circle" width="100" height="100" />
    </div>

    <div>
      <div>
        <h3>{{ name }}</h3>
        <div>{{ oneLiner }}</div>
      </div>
      <div>
        <i class="bi bi-box-arrow-up-right me-2"></i><a href="http://insightic.io">{{ website }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: { type: String, default: 'Insightic' },
    website: { type: String, default: 'https://insightic.io' },
    oneLiner: { type: String, default: 'Make a better world!' }
  }
}
</script>
