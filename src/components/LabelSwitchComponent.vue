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
      style="width: 100px; height: 40px; border-radius: 50px"
      @click="toggleSwitch"
    >
      <div
        :class="['switch-button', { on: toggleState }]"
        style="width: 50px; height: 38px; border-radius: 50px"
      ></div>
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
      this.toggleState = !this.toggleState
      this.$emit('update:field', this.toggleState)
    }
  }
}
</script>

<style>
.switch {
  background-color: #ccc;
  position: relative;
  cursor: pointer;
}

.switch.on {
  background-color: #007bff;
}

.switch-button {
  background-color: #fff;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform 0.2s;
}

.switch-button.on {
  transform: translateX(48px);
}
</style>
