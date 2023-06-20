<template>
    <div class="d-flex my-3 mx-3 flex-row align-items-center" :style="{'font-weight': bold}">

        <div class="col col-2 d-flex">
            <i class="text-primary me-3 bi" :class="icon"></i>
            <div> {{ name }} </div>
        </div>
        <div class="col col-2 text-secondary small"> {{ createdAt == 'Date' ? 'Date' : formatDateTime(createdAt) }} </div>
        <div class="col col-3 text-secondary small"> {{ desc }} </div>

    </div>
  </template>
  
  <script lang="ts">
  import { formatDateTime } from '@/helpers';
  
  export default {
    props: {
      name: { type: String, required: true },
      desc: { type: String, required: true },
      createdAt: { type: String, required: true },
      icon: { type: String },
      isHeader: { type: String }
    },
    methods: {
      formatDateTime
    },
    computed: {
      bold() {
        return this.isHeader == 'true' ? '600' : '400';
      }
    }
  }
  </script>
  
  