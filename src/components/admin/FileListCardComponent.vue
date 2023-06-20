<template>
    <div class="d-flex flex-column justify-content-center my-1 mx-1 p-2 align-items-center" :class="isHeader ? 'header': ''">
        <i class="text-primary mx-auto bi icon" :class="icon"></i>
        <div> {{ name }} </div>
        <div class="small text-secondary"> {{ modifiedAt }} </div>
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
.icon {
  font-size: 3rem;
}
</style>
  