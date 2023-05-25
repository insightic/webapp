<template>
  <div class="container mt-5">
    <div>
      <h1>Wolf Game</h1>
      <div>
        Created by
        <span style="color: rgba(39, 50, 131)"
          ><u>{{ author }}</u></span
        >
        on
        <span style="color: rgba(39, 50, 131)"
          ><u>{{ formatDate(date) }}</u></span
        >
      </div>
    </div>

    <div class="mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Business Model Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Social Media Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >On-Chain Data Analysis</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Team Background Analysis</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          ...
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          ...
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      author: 'Yiwei Gong',
      date: new Date()
    }
  },
  methods: {
    formatDate(date: Date) {
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.nav-link {
    color: rgb(135, 136, 141);
}

.nav-link.active {
    color: rgba(39, 50, 131) !important;
}
</style>