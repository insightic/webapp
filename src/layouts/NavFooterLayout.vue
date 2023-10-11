<template>
  <BasicLayout>
    <div class="d-flex flex-column" style="height: 100%">
      <div class="flex-grow-1">
        <slot />
      </div>

      <FooterComponent />
    </div>
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
