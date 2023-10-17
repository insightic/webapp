<template>
  <div class="mb-3">
    <label class="form-label">
      {{ label }}
    </label>
    <span v-show="required" class="ms-1 text-danger">*</span> <br />
    <div
      :class="['switch', { on: toggleState }]"
      :style="{
        width: width + 'px',
        height: height + 'px',
        borderRadius: parseInt(width) / 2 + 'px'
      }"
      @click="toggleSwitch"
    >
      <div
        :class="['switch-button', { on: toggleState }]"
        :style="{
          width: parseInt(width) / 2 + 'px',
          height: parseInt(height) - 2 + 'px',
          borderRadius: parseInt(width) / 2 + 'px'
        }"
      ></div>
    </div>
    <label class="text-secondary small" v-if="footnote">{{ footnote }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    field: { type: String },
    placeholder: { type: String, default: 'Please select project type' },
    footnote: { type: String },
    required: { type: Boolean, default: false },
    width: { type: String, default: '100' },
    height: { type: String, default: '100' }
  },
  data() {
    return {
      toggleState: false
    }
  },
  emits: ['choose'],
  methods: {
    toggleSwitch() {
      this.toggleState = !this.toggleState
      this.$emit('choose', this.toggleState)
      console.log("methods is chufa")
      console.log(this.toggleState, "原始数据")
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
