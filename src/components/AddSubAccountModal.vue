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
          <h5 class="modal-title">Add Account Users</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group my-3">
            <label class="mb-2">Username</label>
            <input type="text" class="form-control" v-model="username" />
          </div>

          <div class="form-group my-3">
            <label class="mb-2">Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

          <div class="form-group my-3">
            <label class="mb-2">Confirm password</label>
            <input type="password" class="form-control" v-model="confirmPassword" />
          </div>
          <p v-if="!passwordIsSame" class="text-danger">Password are not the same</p>
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
          <button
            type="button"
            class="btn btn-primary"
            @click="submit"
            :disabled="hasFilledForm && !passwordIsSame"
          >
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
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
    }
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    passwordIsSame() {
      return this.password === this.confirmPassword
    },
    hasFilledForm() {
      return this.username != null && this.password != null && this.confirmPassword != null
    }
  },
  methods: {
    async submit() {
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
