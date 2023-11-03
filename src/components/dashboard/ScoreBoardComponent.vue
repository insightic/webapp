<template>
  <div class="h-100 d-flex align-items-center">
    <table style="width: 350px" class="h-100 custom-table">
      <tr>
        <th colspan="2">Score (1-100 Scale)</th>
      </tr>
      <tr>
        <td class="text-center text-white" style="background-color: rgb(158, 248, 3); height: 70px">
          <h2>{{ NowData }}</h2>
        </td>
        <td class="text-center text-white" style="background-color: rgb(158, 248, 3); height: 70px">
          <h2>{{ Grade }}</h2>
        </td>
      </tr>
      <tr>
        <td class="border-right text-center">
          <div>Previous</div>
          <div>{{ PreviousData }}</div>
        </td>
        <td class="text-center">
          <div>Change</div>
          <div>{{ ChangeData }}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    PreviousData: { type: String },
    NowData: { type: String },
    ChangeData: { type: String },
    Grade: { type: String }
  }
}
</script>
<style>
.custom-table {
  border: 2px solid #000;
  width: 200px;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  border: 1px solid #000;
  padding: 5px;
}
</style>
