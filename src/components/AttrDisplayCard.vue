<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ prop?.title }}</h5>
      <p class="card-text">
        {{ prop?.text }}
      </p>
      <div v-if="prop?.tags">
        <b>Tags:</b>
        <div class="d-flex"><Tag v-for="(tag, idx) in prop?.tags" :key="idx" :tag="tag" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue'

export default {
  props: {
    prop: Object
  },
  components: {
    Tag
  }
}
</script>
