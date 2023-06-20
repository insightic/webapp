<template>
  <div class="text-secondary mb-4">Project Source Code</div>

  <!-- file list -->
  <div class="d-flex flex-column w-100">
    <div class="header w-100">
      <FileListItemComponent :name="'Name'" :desc="'Description'" :createdAt="'Date'" isHeader="true"/>
    </div>
    <div class="source-code-card w-100" v-for="file in files" :key="file.name">
      <FileListItemComponent :name="file.name" :desc="file.desc" :createdAt="file.createdAt" :icon="file.icon"/>
    </div>
  </div>
</template>

<script lang="ts">
import FileListItemComponent from '@/components/admin/FileListItemComponent.vue'

export default {
  components: {
    FileListItemComponent
  },
  data() {
    return {
      files: [
        {
          name: 'file1.sol',
          desc: 'file1 description',
          createdAt: '2021-08-01 12:00:00',
          icon: 'bi-file-earmark-code'
        },
        {
          name: 'file2.sol',
          desc: 'file2 description',
          createdAt: '2021-08-02 12:00:00',
          icon: 'bi-file-binary'
        },
        {
          name: 'file3.sol',
          desc: 'file3 description',
          createdAt: '2021-08-03 12:00:00',
          icon: 'bi-file-code'
        },
        {
          name: 'file4.sol',
          desc: 'file4 description',
          createdAt: '2021-08-04 12:00:00',
          icon: 'bi-file-excel'
        },
        {
          name: 'file5.sol',
          desc: 'file5 description',
          createdAt: '2021-08-05 12:00:00',
          icon: 'bi-file-slides'
        },
      ]
    }
  }
}
</script>

<style scoped>
.source-code-card {
  cursor: pointer;
  height: 50px;
  border: 1px solid #00000022;
  border-radius: 5px;
}

.header {
  height: 50px;
  border: 1px solid #00000022;
  border-radius: 5px;
}

.source-code-card:hover {
  background-color: #00000005;
}
</style>
