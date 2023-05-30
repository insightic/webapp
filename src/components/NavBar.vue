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
            <a class="nav-link" href="/webapp">Organizations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: rgba(39, 50, 131, 0.8);
  position: sticky;
  top: 0;
}
</style>
