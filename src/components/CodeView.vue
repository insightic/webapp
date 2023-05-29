<template>
  <div v-html="highlightCode"></div>
</template>

<script lang="ts">
import hljs from 'highlight.js'

export default {
  props: ['code'],
  computed: {
    highlightCode() {
      return hljs.highlightAuto(this.code).value
    }
  }
}
</script>
