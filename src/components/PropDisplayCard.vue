<template>
  <div class="mb-4">
    <h5>{{ prop?.title }}</h5>
    <p v-html="prop.text"></p>
    <div v-if="prop?.tags" class="my-2">
      <b>Tags:</b>
      <div class="d-flex flex-wrap">
        <Tag v-for="(tag, idx) in prop?.tags" :key="idx" :tag="tag" />
      </div>
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
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue'

export default {
  props: ['prop'],
  components: {
    Tag
  }
}
</script>
