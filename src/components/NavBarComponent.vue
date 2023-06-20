<template>
  <nav class="navbar navbar-expand-lg navbar-dark" :style="{'background-color': bgColor}">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <div
          style="
            border: 0px solid white;
            border-radius: 4px;
            padding: 5px;
            background-color: white;
            background-image: url('/logo.png');
            background-size: cover;
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
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div v-show="isAdmin" class="admin rounded">
        Admin
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  computed: {
    isAdmin() {
      return this.$route.path.startsWith('/admin')
    },
    bgColor() {
      return this.isAdmin ? 'rgba(23, 106, 184, 0.8)' : 'rgba(39, 50, 131, 0.8)'
    }
  }
}
</script>

<style scoped>
nav {
  background-color: rgba(39, 50, 131, 0.8);
}

.admin {
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-left: auto;
  margin-right: 1rem;
  padding: 0.5rem;
}
</style>
