<template>
  <div class="org-card mx-auto">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="email">Username</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="guest123"
          v-model = "email"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <div class="passwordBox">
          <input
          v-if='showPassword'
          class="form-control pw"
          type="text"
          name="password"
          placeholder="password123"
          v-model = "password"
        />
        <input
          v-else
          class="form-control pw"
          type="password"
          name="password"
          placeholder="password123"
          v-model = "password"
        />

        <span class="toggle" @click="toggleShow">
          {{ showPassword ? 'Hide' : 'Show' }} Password
        </span>
        </div>
      </div>

      <div class="error" v-if="error != '' || error == null">
        {{ error }}
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
import { useAuthStore } from '@/stores/auth.js';
import { mapStores } from 'pinia';

export default {
  setup() {
    const userStore = useAuthStore();
    return { userStore };
  },
  data() {
    return {
      email: '',
      password: '',
      error:'',
      showPassword: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async register() {
      const info = await this.userStore.signUp(this.email, this.password);
      if (info !== 'success' || info !== null ) {
        this.error = "Register Unsuccessful";
      }
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

.error {
  color: lightcoral;
  font-size: 0.8rem;
  margin: 10px 0;
  font-weight: 600;
}

.passwordBox {
  display: flex;
}

.toggle {
  font-size: 0.8rem;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  width: 80px;
  text-align: center;
  border-radius: 0px 5px 5px 0px;
}

.pw {
  border-radius: 5px 0px 0px 5px;
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
