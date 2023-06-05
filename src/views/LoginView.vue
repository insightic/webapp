<template>
  <div class="org-card mx-auto">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
          v-model = "email"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
          v-model = "password"
        />
      </div>
      <div class="alternative-option mt-4">
        Don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Login
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_1"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import OrgButton from '@/components/OrgButton.vue'
import { organizationsStore } from '@/stores/organizations';
import { mapStores } from 'pinia';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapStores(organizationsStore)
  },
  methods: {
    login(submitEvent: Event) {
      alert(`Email: ${this.email} Password: ${this.password}`);
    },
    moveToRegister() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.org-card {
  background-color: rgba(39, 50, 131, 0.8);
  color: whitesmoke;
  max-width: 720px;
  width: 80%;
  margin-top: 70px;
  padding: 50px 20px;
  border: 3px solid rgb(16, 16, 16, 0.3);
  border-radius: 3px;
}

.org-buttons {
  margin: 50px 20px;
  width: 80%;
  max-width: 420px;
}

@media (min-width: 576px) { 
  .org-card {
    padding: 50px
  }

  .org-buttons {
    margin: 50px auto;
  }
}
</style>
