<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <button v-show="prevBtn" class="btn btn-primary me-2" @click="prev()">Back</button>
      <button v-show="saveBtn" class="btn btn-primary me-2" @click="save()">Save Draft</button>
      <button v-show="nextBtn" class="btn btn-success ms-2" @click="next()">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    prevBtn: { type: Boolean },
    nextBtn: { type: Boolean },
    saveBtn: { type: Boolean , default: false, required: false}
  },
  methods: {
    prev() {
      this.$emit('prev')
    },
    save() {
      this.$emit('save')
    },
    next() {
      this.$emit('next')
    }
  }
}
</script>

<style scoped>

</style>
