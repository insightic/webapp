<template>
  <div class="modal modal-lg fade" :class="{ show: visible, hidden: !visible }" tabindex="-1"
    style="display: block; background-color: rgba(0, 0, 0, 0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Change Password</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="form-group my-3">
            <label class="mb-2">Old Password</label>
            <input type="password" class="form-control" v-model="oldPassword" />
          </div>
          <div class="form-group my-3">
            <label class="mb-2">New Password</label>
            <input type="password" class="form-control" v-model="newPassword" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="submit" :disabled="hasFilledForm">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['visible'],
  components: {
  },
  watch: {
    visible(newValue) {
      if (!newValue) return
      this.oldPassword = ''
      this.newPassword = ''
    }
  },
  data() {
    return {
      oldPassword: '',
      newPassword: ''
    }
  },
  computed: {
    hasFilledForm() {
      return this.oldPassword == '' || this.newPassword == ''
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.oldPassword, this.newPassword)
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
