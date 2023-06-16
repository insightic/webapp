<template>
  <div class="d-flex p-2 card col-3 mx-4">
    <div style="margin-right: 20px"><img :src="logo" class="logo h-8 w-8" /></div>
    <div class="text" :class="{ highlighted: highlighted }">{{ name }}</div>
  </div>
</template>

<script lang="ts">
export default {
props: {
    guid: String,
    name: String,
    logo: String,
    highlighted: Boolean
  }

}
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(39, 50, 131);
  background-color: white;
  padding: 3px;
}
</style>