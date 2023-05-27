<template>
  <div class="card-group p-2 w-100">
    <div class="w-100" style="text-align: right">
      <b>White Paper</b><i class="bi bi-arrow-bar-down" style="margin-left: 10px"></i>
    </div>
    <StatusCard
      text="✅ [dex011]"
      footer="Tokens symbol is BSW"
      desciption-title="Ticker Symbol: BSW"
      desciption-text="contract BSWToken is BEP20('Biswap', 'BSW')"
    />
  </div>
</template>

<script lang="ts">
import StatusCard from './StatusCard.vue'

export default {
  props: ['statuses'],
  components: {
    StatusCard
  }
}
</script>

<style scoped>
.card-group {
  cursor: pointer;
  border-radius: 4px;
  background-color: rgba(39, 50, 131, 0.1);
}
</style>
