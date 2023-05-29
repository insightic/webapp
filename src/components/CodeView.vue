<template>
  <pre class="code-block">
    <code class="line-numbers language-solidity">
    {{ code }}
  </code>
  </pre>
</template>

<script lang="ts">
import Prism from 'prismjs'

export default {
  props: ['code'],
  created() {
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  },
  watch: {
    code() {
      this.$nextTick(() => {
        Prism.highlightAll()
      })
    }
  }
}
</script>

<style scoped>
.code-block {
  font-size: 0.6rem;
  max-height: 700px;
}
</style>
