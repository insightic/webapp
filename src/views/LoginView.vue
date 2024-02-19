<template>
  <div class="container">
    <div class="mx-auto my-5 card py-3 px-5" style="max-width: 480px">
      <div>
        <img class="logo" src="/logo.png" />
      </div>

      <h2 class="my-3 text-center">Sign In to Insightic</h2>

      <div class="my-3 mb-5 text-center">
        New Here? <RouterLink to="/register">Create an Account</RouterLink>
      </div>

      <form @submit.prevent>
        <div class="form-group my-3">
          <label class="mb-2">Username</label>
          <input type="text" class="form-control" v-model="username" />
        </div>

        <div class="form-group my-3">
          <label class="mb-2">Password</label>
          <input type="password" class="form-control" v-model="password" />
        </div>

        <button
          type="submit"
          class="mt-3 w-100 btn btn-lg btn-primary"
          @click="login(username, password)"
        >
          Login
        </button>

        <div class="mt-5 d-flex justify-content-between mb-2">
          <div>
            <a
              href="https://insightic.io"
              target="_blank"
              style="text-decoration: none"
              class="text-secondary"
              >Insightic</a
            >
          </div>
          <div>
            <a
              href="https://insightic.io/about"
              target="_blank"
              style="text-decoration: none"
              class="text-secondary"
              >About</a
            >
          </div>
          <div>
            <a
              href="https://insightic.io/contact-us"
              target="_blank"
              style="text-decoration: none"
              class="text-secondary"
              >Contact Us</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import httpClient from '@/httpclient'

let username: string
let password: string

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  const isAuthorized = await httpClient.isAuthorized()
  if (isAuthorized && route.path !== '/admin/login') {
    router.push('/')
  }
})

async function login(username: string, password: string) {
  const resp = await httpClient.login(username, password)
  if (resp?.code == 200) {
    router.push('/')
  } else {
    alert('Login failed')
  }
}
</script>

<style scoped>
.logo {
  width: 72px;
  margin: 20px auto;
  display: block;
}
</style>
