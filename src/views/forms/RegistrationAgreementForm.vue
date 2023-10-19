<template>
  <div style="max-width: 960px">
    <SectionLayout title="Registration Agreement">
      <PDFComponent
        src="https://github.com/insightic/webapp/blob/dev/src/assets/insightic.pdf"
        style="height: 480px"
      />
      <LabelInputComponent label="Title" type="text" v-model:field="title" />
      <LabelInputComponent label="Name" type="text" v-model:field="name" />
      <LabelSwitchComponent
        label="Accept the NDA agreement"
        :footnote="getFootnote(completed)"
        width="100"
        height="40"
        @choose="acceptNDA"
      />
      <button class="btn btn-primary" @click="submit" :disabled="!completed">Next</button>
    </SectionLayout>
  </div>
</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelSwitchComponent from '@/components/LabelSwitchComponent.vue'
import PDFComponent from '@/components/PDFComponent.vue'

export default {
  components: {
    SectionLayout,
    LabelInputComponent,
    LabelSwitchComponent,
    PDFComponent
  },
  data() {
    return {
      title: '',
      name: '',
      acceptNDARes: false
    }
  },
  computed: {
    completed() {
      return this.title != '' && this.name != '' && this.acceptNDARes
    }
  },
  methods: {
    getFootnote(completed: boolean | string) {
      if (completed == false) {
        return 'Only if the user fill all the form and agrees the agreement, then it can continue.'
      } else {
        return ''
      }
    },
    acceptNDA(result: boolean) {
      console.log(result)
      this.acceptNDARes = result
      console.log(this.acceptNDARes)
    },
    submit() {
      console.log(this.title)
      console.log(this.name)
      console.log(this.acceptNDARes)
      this.$emit('submit', this.completed)
    }
  }
}
</script>
