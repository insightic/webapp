<template>
  <div class="mb-4">
    <h5 class="mb-3">{{ prop?.title }}</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-for="(header, idx) in prop?.headers" :key="idx">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in prop?.rows" :key="idx">
          <td v-for="(value, idx2) in row" :key="idx2">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  props: ['prop']
}
</script>
