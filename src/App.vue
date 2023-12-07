<script lang="ts">
import { RouterView } from 'vue-router'
import httpClient from '@/httpclient'

export default {
  components: {
    RouterView
  },
  computed: {
    isAuthorized() {
      return httpClient.isAuthorized()
    },
    isLoginView() {
      return this.$route.path == '/login'
    },
    isRegisterView() {
      return this.$route.path == '/register'
    }
  },
  created() {
    if (this.isAuthorized) {
      if (this.isLoginView || this.isRegisterView) this.$router.push('/')
    } else {
      if (!this.isLoginView && !this.isRegisterView) this.$router.push('/login')
    }
  }
}
</script>

<template>
  <RouterView />
  <notifications />
  <div class="background"></div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(86, 161, 208, 0.08);
  z-index: -1000;
}
</style>
