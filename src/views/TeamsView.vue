<template>
  <NavBar />

  <div class="my-5">
    <div class="team-card mx-auto">
      <h1 class="mb-5">Teams</h1>

      <div class="teams mx-auto">
        <TeamComponent
          v-for="team in organizationsStore.organizations"
          :key="team.guid"
          :name="team.name"
          :guid="team.guid"
        />
      </div>

      <div class="w-100 text-center mb-3">
        <button type="submit" class="mx-auto mt-3 btn btn-primary">
          &nbsp;&nbsp; + CREATE A NEW TEAM &nbsp;&nbsp;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

export default {
  components: {
    NavBar,
    TeamComponent
  },
  computed: {
    ...mapStores(organizationsStore)
  },
  mounted() {
    console.log(this.organizationsStore.organizations)
  }
}
</script>

<style scoped>
.team-card {
  background-color: rgba(39, 50, 131, 0.8);
  color: whitesmoke;
  max-width: 720px;
  width: 80%;
  padding: 20px 20px;
  border: 3px solid rgb(16, 16, 16, 0.3);
  border-radius: 3px;
}

.teams {
  width: 80%;
  max-width: 420px;
}
</style>
