<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ prop?.title }}</h5>
      <p class="card-text">
        {{ prop?.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    prop: Object
  }
}
</script>
