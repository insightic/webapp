<template>
  <div class="text-secondary mb-4 d-flex justify-content-between align-items-center">
    <div>
      Showing all projects
    </div>
    <div class="icon-btn">
      <!-- show list -->
      <i class="bi bi-list-ul me-3" style="font-size: 1.5rem" :style="view=='list'?'color:blue':'color:grey'" @click="view='list'"></i>
      <!-- show card -->
      <i class="bi bi-grid-3x3-gap npmme-3" style="font-size: 1.5rem" :style="view=='card' ?'color:blue':'color:grey'" @click="view='card'"></i>
    </div>
  </div>

  <!-- card list
  <div v-if="view=='card'" class="d-flex flex-wrap">
    <ProjectCardComponent v-for="(application, index) in applications" :key="application.ID" :project="application.Submissions.slice(-1)[0].Content" :isAdmin="true"/>
  </div> -->
  
  <!-- file list -->
  <div v-if="view=='list'" class="d-flex flex-column w-100">
    <ProjectListComponent :isHeader="true"  :isAdmin="true"/>
    <ProjectListComponent v-for="(application, index) in applications" :key="application.ID" :project="application.Submissions.slice(-1)[0].Content" :counter="index+1" :isAdmin="true"/>
  </div>
</template>

<script lang="ts">
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import ProjectListComponent from '@/components/ProjectListComponent.vue'
import { projectsStore } from '@/stores/projects'
import { mapStores } from 'pinia'
import { getProjects, type Application } from '@/api'

export default {
  components: {
    ProjectListComponent
  },
  data() {
    return {
      view: 'card',
      icons: {
        "wolfgame": 'https://nftnow.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-02-at-11.33.07-AM.png',
        "biswap": 'https://getcrypto.info/images/logos/biswap.png',
        'pool together': 'https://avatars.githubusercontent.com/u/52546024?s=200&v=4',
        'olympus': 'https://yt3.googleusercontent.com/pAzCW6e1kfAi2HOSS0B9DVCzn3Hi2ciYRNii2V6JtgJiLTiNsW-bRWZjfgOiqQf3sx_0QB2Ymg=s900-c-k-c0x00ffffff-no-rj',
        'euler finance': 'https://storage.googleapis.com/subgraph-images/1656114240805euler-transparent.png',
        'neopin': 'https://www.coinlore.com/img/neopin.png',
      },
      applications: [] as Application[]
    }
  },
  async created() {
    this.applications = await getProjects()
  },
  computed: {
    ...mapStores(projectsStore),
    organizationID(): string {
      return this.$route.params.organizationID as string
    }
  },
}
</script>

<style>
.icon-btn > i{
  cursor: pointer;
}
</style>
