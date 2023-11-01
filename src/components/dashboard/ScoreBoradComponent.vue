<template>
  <div class="container mt-5">
    <table class="custom-table">
      <tr>
        <th colspan="2">Score (1-100 Scale)</th>
      </tr>
      <tr>
        <td class="text-center text-white" style="background-color: rgb(158, 248, 3)">77</td>
        <td class="text-center text-dark" style="background-color: rgb(158, 248, 3)">B+</td>
      </tr>
      <tr>
        <td class="border-right text-center">左侧内容</td>
        <td class="text-center">右侧内容</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default {}
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
