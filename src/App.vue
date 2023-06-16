<script lang="ts">
import { RouterView } from 'vue-router'
import httpClient from '@/httpclient'

export default {
  components: {
    RouterView
  },
  computed: {
    isAuthorized() {
      return localStorage.getItem('token') != null
    },
    isLoginView() {
      return this.$route.path == '/login'
    },
    isRegisterView() {
      return this.$route.path == '/register'
    },
    showAuth() {
      return !this.isAuthorized && !this.isLoginView && !this.isRegisterView
    }
  },
  async mounted() {
    if(!await httpClient.isAuthorized()) {
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <RouterView />

  <div class="auth" v-if="showAuth"></div>
  <div class="background"></div>
</template>

<style scoped>
.auth {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 10000;
}

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
