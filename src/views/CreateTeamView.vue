<template>
    <Navbar />
    <div class="container d-flex align-items-center">
        <div class="mx-auto mt-5 createTeam py-3 px-5">
            <div class="back-btn" as="button" @click="this.$router.push('/teams')">
                <i class="bi bi-arrow-bar-left"></i>
                Return to Teams
            </div>
            <div class="d-flex justify-content-center">
                <img class="logo" src="/logo.png" />
                <h2 class="mb-0 align-self-center">Insightic</h2>
            </div>

            <h2 class="my-0 text-center title">Create Team</h2>

            <form>
                <div class="form-group my-3">
                    <label class="mb-2">Team Name</label>
                    <input type="text" class="form-control" v-model="teamName" />
                    <span class="subtext">This name will be used to create the team and list under your account</span>
                </div>

                <div class="form-group my-3">
                    <label class="mb-2">Display Name</label>
                    <input type="text" class="form-control" v-model="displayName" />
                    <span class="subtext">This name will be used to display any related content in Insightic</span>
                </div>

                <button
                type="button"
                class="mt-3 w-100 btn btn-lg btn-primary"
                >
                Create Team
                </button>
            </form>
        </div>

    </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
        teamName: '',
        displayName: ''
    }
  },
  methods: {

  }
}

</script>

<style scoped>
.createTeam {
  width: 100%;
  max-width: 480px;
  background-color: rgba(86, 161, 208, 0.15);
  border: 1px solid #ccc;
  border-radius: 4px;
}

.logo {
  width: 72px;
  margin: 20px 10px;
  display: block;
}

.subtext {
    font-size: 0.8rem;
    font-weight: 300;
}

.back-btn {
    cursor: pointer;
}

.container {
    height: 80vh;
}

.title {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
}

input {
  background-color: rgb(243, 247, 251);
}
</style>