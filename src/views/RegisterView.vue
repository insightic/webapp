<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import httpClient from '@/httpclient'

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  const isAuthorized = await httpClient.isAuthorized()
  if (isAuthorized && route.path !== '/login') {
    router.push('/')
  }
})

</script>

<template>
  <div class="container">
    <div class="mx-auto my-5 login py-3 px-5">
      <div>
        <img class="logo" src="/logo.png" />
      </div>

      <h2 class="my-3 text-center">Register</h2>

      <div class="my-3 mb-5 text-center">
        Already have an account? <RouterLink to="/login" class="register-link">Login</RouterLink>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group my-3">
          <label class="mb-2">Username</label>
          <input type="text" class="form-control" v-model="username"/>
        </div>

        <div class="form-group my-3">
          <label class="mb-2">Password</label>
          <input type="password" class="form-control" v-model="password"/>
        </div>

        <div class="form-group my-3">
          <label class="mb-2">Confirm password</label>
          <input type="password" class="form-control" v-model="passwordConfirm"/>
        </div>

        <!-- check password match-->
        <div v-show="password != ''" class="msg">
          <p v-if="passwordMatch" class="text-success">Password match</p>
          <p v-else class="text-danger">Password not match</p>
        </div>


        <button type="submit" class="mt-3 w-100 btn btn-lg btn-primary">Register</button>

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

<script lang="ts">

const router = useRouter()
const route = useRoute()

export default {
  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: ''
    }
  },
  computed: {
    passwordMatch() {
      return this.password != '' && this.password === this.passwordConfirm
    }
  },
  methods: {
    async register(username: string, password: string) {
      const resp = await httpClient.register(username, password)
      if (resp?.code == 200) {
        this.$router.push('/login')
      } else {
        alert('Login failed')
      }
    },
    handleSubmit() {
      if (!this.passwordMatch) {
        alert('Password not match')
        return
      }
      this.register(this.username, this.password)
    }
  }
}
</script>

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
