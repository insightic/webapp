<template>
  <div class="org-card mx-auto">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
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
      <!-- check error and show in red -->
      <div class="error" v-if="error != '' || error == null">
        {{ error }}
      </div>
      <div class="alternative-option mt-4">
        Don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button type="submit" class="mt-4 btn-pers" id="login_button">
        Login
      </button>

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
  computed: {
    ...mapStores(organizationsStore),

  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      const info = await this.userStore.logIn(this.email, this.password);
      if (info !== 'success' || info !== null ) {
        this.error = "Please check your email and password";
      }
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
