<template>
  <div class="mt-5">
    <button class="btn btn-outline-primary me-2" @click="save" :disabled="disabled">
      Save Draft
    </button>
    <button class="btn btn-primary" @click="next" :disabled="disabled">
      {{ nextButtonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['save', 'next'])

defineProps({
  nextButtonText: { type: String, default: 'Save Draft and Continue' },
  disabled: { type: Boolean, default: false }
})

const save = function () {
  emit('save')
}

const next = function () {
  emit('next')
}
</script>
