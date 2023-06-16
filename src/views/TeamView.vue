<template>
  <NavBar />

  <div class="d-flex flex-grow-1">
    <div class="sidebar p-3">
        <h5 class="mb-4">Team</h5>

        <div class="sidebar-button d-flex my-2">
            <i class="bi bi-box" style="margin-right: 18px;"></i>

            <div>Projects</div>
        </div>

       
        <div class="sidebar-button d-flex my-2">
            <i class="bi bi-diagram-3" style="margin-right: 18px;"></i>

            <div>Profile</div>
        </div>

        <hr style="color: rgba(0, 0, 0, 0.2);"/>

        <button
          type="button"
          class="mt-3 w-100 btn btn-outline-danger"
        >
          Logout
        </button>
    </div>
    <div class="flex-grow-1 p-3">Main</div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  border-right: 1px solid #e0e0e0;
  transition: width 0.5s;
  background-color: #e9f2f8;
}

.sidebar-button {
    cursor: pointer;
}
</style>
