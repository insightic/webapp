<template>
  <div class="text-secondary mb-4">Project Overview</div>

  <div style="max-width: 960px">
    <div class="mb-4 fw-bold">DLT Foundation Details Registration Auto-Check Report</div>

    <div class="mb-2">**Section A: DLT Foundation Details**</div>
    <table class="table w-100 mb-4">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Codes</th>
          <th scope="col">Whitepaper</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="item in sectA" :key="item.item">
          <td>{{ item.item }}</td>
          <td>{{ item['Data Received'] }}</td>
          <td>{{ item.Status }}</td>
        </tr> -->
        <tr v-for="item in [1,2,3,4,5]" :key="item">
          <td>desc</td>
          <td>code</td>
          <td>whitepaper</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script lang="ts">
import ApplicationViewMixin from '@/views/applicationSubViews/ApplicationViewMixin'

import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import { updateApplication, getPreSignedPutUrl, getPreSignedGetUrl, uploadFile, createProjectJob, getApplication  } from '@/api'

export default {
  components: {},
  async created() {
    const projectInfo = await getApplication(this.$route.params.projectID as string)
    .then(
      (res) =>
        res!.Submissions.filter((item) => item.CreatedAt == res?.UpdatedAt)[0]
    )
    console.log('projectInfo', projectInfo)

  },
  data() {
    return {
      codeValidation: [],
      sectA: [
        {
          item: 'DLT Foundation Name',
          'Data Received': '____________________',
          Status: '✔️ Pass / ❌ Fail'
        },
        {
          item: 'Official Twitter Account (URL)',
          'Data Received': '____________________',
          Status: '✔️ Pass / ❌ Fail'
        },
        {
          item: 'Official Website (URL)',
          'Data Received': '____________________',
          Status: '✔️ Pass / ❌ Fail'
        },
        {
          item: 'Official Website (URL)',
          'Data Received': '____________________',
          Status: '✔️ Pass / ❌ Fail'
        },
        {
          item: 'Whitepaper Document Quality',
          'Data Received': '____________________',
          Status: '✔️ Pass / ❌ Fail'
        }
      ],
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async submit() {
      const job = await createProjectJob(this.projectID)
      console.log(job)
      this.$router.push({ query: { view: 'Validations' } })
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  }
}
</script>

<style scoped>
th,
td {
  padding: 0.6rem;
  text-align: left;
}

thead {
  background-color: rgb(214, 246, 255);
  border: 1px solid #000;
}

table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
}

td,
th {
  border: 1px solid #000;
}

th:first-child {
  border-top-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
}

/* 
tr:first-child td:first-child{
  border-top-left-radius: 10px;
} */

tbody:last-child tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

/* tr:first-child td:last-child{
  border-top-right-radius: 10px;
} */

tbody:last-child tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
</style>
