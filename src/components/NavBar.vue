<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <div
          style="
            border: 0px solid white;
            border-radius: 0px;
            background-color: transparent;
            background-image: url('/webapp/logo.png');
            background-repeat: round;
            background-origin: content-box;
            width: 30px;
            height: 30px;
          "
          class="d-inline-block align-top"
        ></div>
        Insightic
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/webapp/">Teams</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" @click="logout">Log Out</a>
          </li>
          <div v-else class="d-flex">
            <li class="nav-item">
              <a class="nav-link" href="/webapp/register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/webapp/login">Login</a>
            </li>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="refresh">Refresh Token</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
    };
  },
  methods: {
      logout (){
        useAuthStore().logout();
      },
      refresh (){
        useAuthStore().refreshToken();
      }
  },
  computed: {
    isLoggedIn() {
      return useAuthStore().user !== null;
    },
  },
};

</script>

<style scoped>
nav {
  background-color: rgba(39, 50, 131, 0.8);
  position: sticky;
  top: 0;
}
</style>
