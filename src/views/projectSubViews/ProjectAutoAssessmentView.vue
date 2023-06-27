<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <div class="mb-4 fw-bold">DLT Foundation Details Registration Auto-Check Report</div>

    <div class="mb-2">**Section A: DLT Foundation Details**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Data Received</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sectA" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr>
      </tbody>
    </table>



    <div class="mb-2">**Section B: Founder(s) Details**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Data Received</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody v-for="founder in sectB">
        <tr>
          <td colspan="3" class="text-center fw-bold"> Founder {{ founder.founder }}</td>
        </tr>
        <tr v-for="(item,index) in founder.data" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr>
      </tbody>
    </table>

    <div class="mb-2">**Section C: Objectives of DLT Foundation**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Data Received</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sectC" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr>
      </tbody>
    </table>

    <div class="mb-2">**Section D: Specific Purpose**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Data Received</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sectD" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr>
      </tbody>
    </table>

    <div class="mb-2">**Section E: Initial Assets**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Data Received</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sectE" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'


import ProjectViewMixin from './ProjectViewMixin'

import { createProjectJob } from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'



export default {
  components: {
    SectionLayout,
  },
  created() {

  },
  data() {
    return {
      sectA: [
        {
          "item": "DLT Foundation Name",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        },
        {
          "item": "Official Twitter Account (URL)",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        },
        {
          "item": "Official Website (URL)",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        },
        {
          "item": "Official Website (URL)",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        },
        {
          "item": "Whitepaper Document Quality",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        }
      ],
      sectB: [ 
        {
          'founder': 1,
          "data": [
            {
              "item": "Name",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Position within DLT Foundation",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "KYC Verification",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Twitter Account (URL)",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "LinkedIn Profile (URL)",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Ethereum Address",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Email Address",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            }
          ]        
        },
        {
          'founder': 2,
          "data": [
            {
              "item": "Name",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Position within DLT Foundation",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "KYC Verification",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Twitter Account (URL)",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "LinkedIn Profile (URL)",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Ethereum Address",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            },
            {
              "item": "Email Address",
              "Data Received": "____________________",
              "Status": "✔️ Pass / ❌ Fail"
            }
          ]        
        }


      ],
      sectC: [
        {
          "item": "Objectives Description",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        }
      ],
      sectD: [
        {
          "item": "Specific Purpose Description",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        }
      ],
      sectE: [
        {
          "item": "Initial Assets Description",
          "Data Received": "____________________",
          "Status": "✔️ Pass / ❌ Fail"
        }
      ]
      
    }
  },
  mixins: [ProjectViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    }
  },
  computed: {
    ...mapStores(organizationsStore),
  }

}
</script>

<style scoped>
th, td {
  padding: 0.6rem;
  text-align: left;
}

thead {
  background-color: rgb(214, 246, 255);
  border: 1px solid #000;
}

table{
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
}

td, th{
  border: 1px solid #000;
}

th:first-child{
  border-top-left-radius: 10px;
}

th:last-child{
  border-top-right-radius: 10px;
}

/* 
tr:first-child td:first-child{
  border-top-left-radius: 10px;
} */

tbody:last-child tr:last-child td:first-child{
  border-bottom-left-radius: 10px;
}

/* tr:first-child td:last-child{
  border-top-right-radius: 10px;
} */

tbody:last-child tr:last-child td:last-child{
  border-bottom-right-radius: 10px;
}


</style>
