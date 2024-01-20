<template>
  <nav class="navbar navbar-expand-md fixed-top" data-bs-theme="dark" style="z-index: 2000">
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

      <div class="d-flex flex-column align-items-center" style="height: 48px">
        <button
          class="navbar-toggler my-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

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
