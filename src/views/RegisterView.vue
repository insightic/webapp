<template>
  <div class="container">
    <div class="mx-auto my-5 card py-3 px-5" style="max-width: 480px">
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
          <input type="text" class="form-control" v-model="username" />
        </div>

        <div class="form-group my-3">
          <label class="mb-2">Password</label>
          <input type="password" class="form-control" v-model="password" />
        </div>

        <div class="form-group my-3">
          <label class="mb-2">Confirm password</label>
          <input type="password" class="form-control" v-model="passwordConfirm" />
        </div>

        <!-- check password match-->
        <div v-show="password != ''" class="small">
          <p v-if="passwordMatch" class="text-success">Password matches</p>
          <p v-else class="text-danger">Password not match</p>
        </div>

        <button type="submit" class="mt-3 w-100 btn btn-lg btn-primary">Register</button>

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

<script lang="ts">
import httpClient from '@/httpclient'

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
        this.$router.push('/')
      } else {
        alert('Register failed')
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
.logo {
  width: 72px;
  margin: 20px auto;
  display: block;
}
</style>
