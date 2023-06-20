<template>
  <div class="text-secondary mb-4 d-flex justify-content-between align-items-center">
    <div>Project Source Code</div>
    
    <div class="icon-btn">
      <!-- show list -->
      <i class="bi bi-list-ul me-3" style="font-size: 1.5rem" :style="view=='list'?'color:blue':'color:grey'" @click="view='list'"></i>
      <!-- show card -->
      <i class="bi bi-grid-3x3-gap me-3" style="font-size: 1.5rem" :style="view=='card' ?'color:blue':'color:grey'" @click="view='card'"></i>
    </div>
  </div>

  <!-- file list -->
  <div v-if="view=='list'" class="d-flex flex-column w-100">
    <div class="header-div w-100">
      <FileListItemComponent :sortBy="sortBy" :name="'Name'" :desc="'Description'" :modifiedAt="'Last Modified'" :createdAt="'Date'" isHeader="true" :isAsc="isAsc" @setSortBy="setSorttBy" @setIsAsc="setIsAsc"/>
    </div>
    <div class="source-code-listitem w-100" v-for="file in sortedFiles" :key="file.name">
      <FileListItemComponent :name="file.name" :desc="file.desc" :modifiedAt="file.modifiedAt" :createdAt="file.createdAt" :icon="file.icon"/>
    </div>
  </div>

  <!-- card list -->
  <div v-else-if="view=='card'" class="d-flex flex-row text-center">
    <div class="source-code-card me-3" v-for="file in sortedFilesDate" :key="file.name">
      <FileListCardComponent :name="file.name" :desc="file.desc" :modifiedAt="file.modifiedAt" :createdAt="file.createdAt" :icon="file.icon"/>
    </div>
  </div>


</template>

<script lang="ts">
import FileListItemComponent from '@/components/admin/FileListItemComponent.vue'
import FileListCardComponent from '@/components/admin/FileListCardComponent.vue'

export default {
  components: {
    FileListItemComponent,
    FileListCardComponent
  },
  data() {
    return {
      sortBy: 'name',
      isAsc: true,
      view: 'list',
      files: [
        {
          name: 'file1.sol',
          desc: 'file1 description',
          createdAt: '2021-08-01 12:00:00',
          modifiedAt: '2021-08-01 12:00:00',
          icon: 'bi-file-earmark-code'
        },
        {
          name: 'file2.sol',
          desc: 'file2 description',
          createdAt: '2021-08-03 12:00:00',
          modifiedAt: '2021-08-03 12:00:00',
          icon: 'bi-file-binary'
        },
        {
          name: 'file3.sol',
          desc: 'file3 description',
          createdAt: '2021-08-02 12:00:00',
          modifiedAt: '2021-08-02 12:00:00', 
          icon: 'bi-file-code'
        },
        {
          name: 'file4.sol',
          desc: 'file4 description',
          createdAt: '2021-08-04 12:00:00',
          modifiedAt: '2021-08-04 12:00:00',
          icon: 'bi-file-excel'
        },
        {
          name: 'file5.sol',
          desc: 'file5 description',
          createdAt: '2021-08-05 12:00:00',
          modifiedAt: '2021-08-05 12:00:00',
          icon: 'bi-file-slides'
        },
      ],

    }
  },
  methods: {
    setSorttBy(sortBy: string) {
      this.sortBy = sortBy
    },
    setIsAsc(isAsc: boolean) {
      this.isAsc = isAsc
    }
  },
  computed: {
    sortedFilesDate() {
      return this.files.sort((a, b) => {
      return a.createdAt.localeCompare(b.createdAt)
      })
    },
    sortedFiles() {
      const files = this.files!
      const sortBy = this.sortBy!
      const isAsc = this.isAsc!
      return files.sort((a, b) => {
        if (sortBy == 'name') {
          if (isAsc) {
            return a.name.localeCompare(b.name)
          } else {
            return b.name.localeCompare(a.name)
          }
        } else if (sortBy == 'modifiedAt') {
          if (isAsc) {
            return a.modifiedAt.localeCompare(b.modifiedAt)
          } else {
            return b.modifiedAt.localeCompare(a.modifiedAt)
          }
        } else if (sortBy == 'createdAt') {
          if (isAsc) {
            return a.createdAt.localeCompare(b.createdAt)
          } else {
            return b.createdAt.localeCompare(a.createdAt)
          }
        } else if (sortBy == 'desc') {
          if (isAsc) {
            return a.desc.localeCompare(b.desc)
          } else {
            return b.desc.localeCompare(a.desc)
          }
        } else {
          return 0
        }
      })
    }
  }
}
</script>

<style scoped>
.source-code-listitem {
  cursor: pointer;
  height: 50px;
  border-radius: 5px;
}

.header-div {
  border-bottom: 1px solid #00000022;
  border-radius: 5px;
}

.icon-btn {
  cursor: pointer;
}

.source-code-listitem:hover, .source-code-card:hover {
  background-color: #00000005;
}

.source-code-card {
  cursor: pointer;
  border: 1px solid #00000022;
  border-radius: 5px;
}
</style>
