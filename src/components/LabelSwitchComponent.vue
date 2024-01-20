<template>
  <div class="mb-3">
    <div class="d-flex">
      <div>
        {{ label }}
      </div>
      <span v-show="required" class="text-danger">*</span>
    </div>

    <div class="text-secondary small mb-1" v-html="description"></div>
    <div
      :class="['switch', { on: toggleState }]"
      style="width: 120px; height: 40px; border-radius: 30px; margin-top: 20px"
      @click="toggleSwitch"
    >
      <div
        :class="[
          'switch-button',
          { on: toggleState },
          { disabled: disabled },
          'd-flex',
          'align-items-center',
          'justify-content-center'
        ]"
        style="width: 60px; height: 38px; border-radius: 30px"
      >
        <div v-if="toggleState">YES</div>
        <div v-if="!toggleState">NO</div>
      </div>
    </div>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    description: { type: String },
    footnote: { type: String },

    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },

    field: { type: Boolean }
  },
  created() {
    this.toggleState = this.field
  },
  data() {
    return {
      toggleState: false
    }
  },
  methods: {
    toggleSwitch() {
      if (this.disabled) return
      this.toggleState = !this.toggleState
      this.$emit('update:field', this.toggleState)
    }
  }
}
</script>

<style>
.switch {
  background-color: var(--tblr-bg-forms);
  position: relative;
  cursor: pointer;
}

.switch.on {
  background-color: var(--tblr-primary);
}

.switch-button.disabled {
  background-color: #e9ecef !important;
}

.switch-button {
  background-color: var(--tblr-gray-800);
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.2s;
}

.switch-button.on {
  transform: translateX(58px);
}
</style>
