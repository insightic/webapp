<template>
  <div class="org-card mx-auto">
    <h1>Organizations</h1>

    <div class="org-buttons mx-auto">
      <OrgButton
        name="National University of Singapore"
        guid="e262d5c2-16f8-47a0-8c70-4019514b137c"
      />
      <OrgButton
        name="Nanyang Technological University"
        guid="fe836aab-202f-4ba4-b128-afb86b918e31"
      />
      <OrgButton
        name="Monetary Authority of Singapore"
        guid="6f384b6a-3b1b-4f25-b514-844cdc67d52e"
      />
    </div>
  </div>
</template>

<script lang="ts">
import OrgButton from '@/components/OrgButton.vue'

export default {
  components: {
    OrgButton
  }
}
</script>

<style scoped>
.org-card {
  background-color: rgba(39, 50, 131, 0.8);
  color: whitesmoke;
  max-width: 720px;
  width: 80%;
  margin-top: 70px;
  padding: 50px;
  border: 3px solid rgb(16, 16, 16, 0.3);
  border-radius: 3px;
}

.org-buttons {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  max-width: 420px;
}
</style>
