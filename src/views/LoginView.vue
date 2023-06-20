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

function handleSubmit() {
  login(username, password)
}
</script>

<template>
  <div class="container">
    <div class="mx-auto my-5 login py-3 px-5">
      <div>
        <img class="logo" src="/logo.png" />
      </div>

      <h2 class="my-3 text-center">Sign In to Insightic</h2>

      <div class="my-3 mb-5 text-center">
        New Here? <RouterLink to="/register" class="register-link">Create an Account</RouterLink>
      </div>

      <form @submit.prevent="handleSubmit">
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

        <div
          class="mt-5 d-flex justify-content-between mb-2"
          style="color: rgba(0, 0, 0, 0.5); font-size: 0.99rem"
        >
          <div>Privacy Policy</div>
          <div>Term of Service</div>
          <div>Contact</div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100%;
  max-width: 480px;
  background-color: rgba(86, 161, 208, 0.15);
  border: 1px solid #ccc;
  border-radius: 4px;
}

.logo {
  width: 72px;
  margin: 20px auto;
  display: block;
}

.register-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

input {
  background-color: rgb(243, 247, 251);
}
</style>
