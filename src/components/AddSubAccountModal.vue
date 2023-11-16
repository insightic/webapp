<template>
  <div
    class="modal modal-lg fade"
    :class="{ show: visible, hidden: !visible }"
    tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add SubAccount</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <LabelInputComponent label="Username" v-model:field="username" :required="true" />
          <LabelInputComponent label="Password" v-model:field="password" :required="true" />
          <!-- <LabelInputComponent
            label="Confirm Password"
            v-model:field="confirmPassword"
            :required="true"
          /> -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="$emit('close')"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'

export default {
  props: ['visible'],
  components: {
    LabelInputComponent
  },
  watch: {
    visible(newValue) {
      if (!newValue) return
      this.username = ''
      this.password = ''
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      if (!this.username || !this.password) {
        alert('There is still some balnks in this page!')
        return
      }
      this.$emit('save', this.username, this.password)
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
