<template>
  <div class="container mt-4">
    <table style="width: 350px;" class="custom-table"> 
      <tr>
        <th colspan="2">Score (1-100 Scale)</th>
      </tr>
      <tr>
        <td class="text-center text-white" style="background-color: rgb(158, 248, 3); height: 70px">
          <h2>71</h2>
        </td>
        <td class="text-center text-white" style="background-color: rgb(158, 248, 3); height: 70px">
          <h2>B+</h2>
        </td>
      </tr>
      <tr>
        <td class="border-right text-center">
          <div>Previous</div>
          <div>69</div>
        </td>
        <td class="text-center">
          <div>Change</div>
          <div>+2</div>
        </td>
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
