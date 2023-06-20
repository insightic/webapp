<template>
    <div class="d-flex my-1 mx-1 p-2 flex-row align-items-center" :class="isHeader ? 'header': ''">

        <div class="col col-2 d-flex" @click="setSortBy('name')">
            <i class="text-primary me-3 bi" :class="icon"></i>
            <div> {{ name }} 
              <i v-show="sortBy=='name'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
            </div>
        </div>
        <div class="col col-3 small" :class="isHeader ? '': 'text-secondary'" @click="setSortBy('modifiedAt')"> 
          {{ modifiedAt == 'Last Modified' ? 'Last Modified' : formatDateTime(modifiedAt) }} 
          <i v-show="sortBy=='modifiedAt'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
        </div>
        <div class="col col-3 small" :class="isHeader ? '': 'text-secondary'" @click="setSortBy('createdAt')"> 
          {{ createdAt == 'Date' ? 'Date' : formatDateTime(createdAt) }} 
          <i v-show="sortBy=='createdAt'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
        </div>
        <div class="col col-3 small" :class="isHeader ? '': 'text-secondary'" @click="setSortBy('desc')"> 
          {{ desc }} 
          <i v-show="sortBy=='desc'" class="bi" :class="isAsc ? 'bi-caret-down' : 'bi-caret-up'"></i>
        </div>
        
    </div>
  </template>
  
  <script lang="ts">
  import { formatDateTime } from '@/helpers';
  
  export default {
    props: {
      name: { type: String, required: true },
      desc: { type: String, required: true },
      createdAt: { type: String, required: true },
      modifiedAt: { type: String, required: true },
      icon: { type: String },
      isHeader: { type: String },
      sortBy: { type: String },
      isAsc: { type: Boolean }
    },
    methods: {
      formatDateTime,
      setSortBy(val: string) {
        if (this.sortBy == val) {
          this.$emit('setIsAsc', !this.isAsc);
        } else {
          this.$emit('setIsAsc', true);
        }
        this.$emit('setSortBy', val);
      }
    },
    computed: {
      bold() {
        return this.isHeader == 'true' ? '600' : '400';
      }
    }
  }
  </script>

<style scoped>
.header {
  font-weight: 600;
  color: #000000;
  border: none
}

.header > .col:hover {
  cursor: pointer;
  background-color: #e2e2e205;
}
</style>
  