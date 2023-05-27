<template>
  <div class="mb-4">
    <h5 class="mb-3">{{ prop?.title }}</h5>
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(value, idx) in prop?.values" :key="idx">
          <th scope="row" style="width: 30%">{{ value?.key }}</th>
          <td>{{ value?.value }}</td>
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
