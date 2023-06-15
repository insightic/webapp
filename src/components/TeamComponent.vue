<template>
  <div class="team mx-auto" @click="onClick">
    <div class="d-flex" style="justify-content: space-around">
      <i class="bi bi-building" style="font-size: 1.2rem"></i>
      <div class="align-self-center">{{ name }}</div>
      <i class="bi bi-chevron-right" style="font-size: 1.2rem"></i>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    guid: String
  },
  methods: {
    onClick() {
      this.$router.push(`/teams/${this.guid}`)
    }
  }
}
</script>

<style scoped>
.team {
  cursor: pointer;
  width: 100%;
  max-width: 420px;
  padding: 30px 10px 30px 10px;
  margin-bottom: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
}

.team:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 576px) {
  .team {
    padding: 30px 20px 30px 20px;
  }
}
</style>
