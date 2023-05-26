<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ prop?.title }}</h5>
      <p class="card-text">
        {{ prop?.text }}
      </p>
      <div v-if="prop?.tags" class="my-2">
        <b>Tags:</b>
        <div class="d-flex"><Tag v-for="(tag, idx) in prop?.tags" :key="idx" :tag="tag" /></div>
      </div>
      <div v-if="prop?.regulations" class="my-2">
        <b>Related Regulations:</b>
        <div class="d-flex">
          <div v-for="(regulation, idx) in prop?.regulations" :key="idx" class="mx-2">
            [
            <a :href="regulation?.href" target="_blank">{{ regulation?.text }}</a>
            ]
          </div>
        </div>
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
