<template>
  <BasicLayout>
    <slot />
    <FooterComponent />
  </BasicLayout>
</template>

<script lang="ts">
import BasicLayout from './BasicLayout.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    BasicLayout,
    FooterComponent
  }
}
</script>
