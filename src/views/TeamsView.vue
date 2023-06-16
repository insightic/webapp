<template>
  <NavBar />

  <div class="my-5">
    <div class="team-card mx-auto">
      <h1 class="mb-5">Teams</h1>

      <div class="text-center my-3" v-if="loading">
        <LoadingComponent />
      </div>
     
      <div class="teams mx-auto" v-else>
        <TeamComponent
          v-for="team in teamsStore.teams"
          :key="team.ID"
          :name="team.Name"
          :id="team.ID"
        />
      </div>

      <div class="w-100 text-center mb-3">
        <button type="submit" class="mx-auto mt-3 btn btn-primary" @click="toTeam">
          &nbsp;&nbsp; + CREATE A NEW TEAM &nbsp;&nbsp;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import { teamsStore } from '@/stores/teams'
import { mapStores } from 'pinia'

export default {
  components: {
    NavBar,
    LoadingComponent,
    TeamComponent
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapStores(teamsStore)
  },
  methods: {
    toTeam () {
      this.$router.push('/teams/create-team')
    }
  },
  async mounted() {
    await teamsStore().getTeams()
    this.loading = false
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
