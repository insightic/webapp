<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ prop?.title }}</h5>
      <table class="table table-bordered">
        <tbody>
          <tr v-for="(value, idx) in prop?.values" :key="idx">
            <th scope="row" style="width: 30%">{{ value?.key }}</th>
            <td>{{ value?.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['prop']
}
</script>
