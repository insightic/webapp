<template>
  <div class="org-card mx-auto">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
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
  methods: {
    register(submitEvent: Event) {
      alert(`Email: ${this.email} Password: ${this.password}`);
    },
    moveToLogin() {
      this.$router.push("/login");
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
