<template>
  <nav class="navbar navbar-expand-md fixed-top" data-bs-theme="dark" style="z-index: 10000;">
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
        <span class="ms-2">Insightic</span>
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
        <div class="me-auto"></div>
        <ul class="navbar-nav me-2">
          <li class="nav-item">
            <a class="nav-link" href="https://insightic.io/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://insightic.io/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://insightic.io/contact-us">Contact Us</a>
          </li>
        </ul>
        <form class="form-inline my-2">
          <a class="btn btn-sm btn-primary my-2 my-sm-0" type="button" href="/">My Account</a>
        </form>
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
.admin {
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin-left: auto;
  margin-right: 1rem;
  padding: 0.5rem;
}
</style>
