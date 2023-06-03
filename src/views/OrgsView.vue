<template>
  <div class="org-card mx-auto">
    <h1>Teams</h1>

    <div class="org-buttons mx-auto">
      <OrgButton v-for="org in organizationsStore.organizations" :key="org.guid" :name="org.name" :guid="org.guid" />
    </div>
  </div>
</template>

<script lang="ts">
import OrgButton from '@/components/OrgButton.vue'
import { organizationsStore } from '@/stores/organizations';
import { mapStores } from 'pinia';

export default {
  components: {
    OrgButton
  },
  computed: {
    ...mapStores(organizationsStore)
  },
}
</script>

<style scoped>
.org-card {
  background-color: rgba(39, 50, 131, 0.8);
  color: whitesmoke;
  max-width: 720px;
  width: 80%;
  margin-top: 70px;
  padding: 50px 20px;
  border: 3px solid rgb(16, 16, 16, 0.3);
  border-radius: 3px;
}

.org-buttons {
  margin: 50px 20px;
  width: 80%;
  max-width: 420px;
}

@media (min-width: 576px) { 
  .org-card {
    padding: 50px
  }

  .org-buttons {
    margin: 50px auto;
  }
}
</style>
