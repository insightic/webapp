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
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <LabelInputComponent label="Name" type="text" v-model:field="name" />

          <div>Birthday</div>
          <div class="row">
            <div class="col-4">
              <LabelSelectComponent
                label="Year"
                :options="[...Array(70).keys()].map((n) => n + 1950)"
                v-model:field="year"
              />
            </div>
            <div class="col-4">
              <LabelSelectComponent
                label="Month"
                :options="[...Array(12).keys()].map((n) => n + 1)"
                v-model:field="month"
              />
            </div>
            <div class="col-4">
              <LabelSelectComponent
                label="Date"
                :options="[...Array(31).keys()].map((n) => n + 1)"
                v-model:field="date"
              />
            </div>
          </div>
          <!-- link of the social media -->
          <LabelInputPrefixComponent
            label="Github"
            type="text"
            prefix="https://github.com/"
            v-model:field="github"
          />
          <LabelInputPrefixComponent
            label="Twitter"
            type="text"
            prefix="https://twitter.com/"
            v-model:field="twitter"
          />
          <LabelInputPrefixComponent
            label="Linkedin"
            type="text"
            prefix="https://www.linkedin.com/in/"
            v-model:field="linkedin"
          />

          <LabelFileUploadComponent label="CV" />
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
          <button type="button" class="btn btn-primary" @click="save">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelInputPrefixComponent from '@/components/LabelInputPrefixComponent.vue'
import LabelSelectComponent from './LabelSelectComponent.vue'
import { type PeopleInfo } from '@/api'
import LabelFileUploadComponent from './LabelFileUploadComponent.vue'

export default {
  props: {
    visible: { type: Boolean, required: true },
    title: { type: String, default: 'Add' },
    confirmText: { type: String, default: 'Save' },
    peopleInfo: { type: Object, default: {} as PeopleInfo }
  },
  components: {
    LabelInputComponent,
    LabelInputPrefixComponent,
    LabelSelectComponent,
    LabelFileUploadComponent
  },
  watch: {
    visible(newValue) {
      if (!newValue) return

      // reset when modal becomes visible
      this.name = this.peopleInfo.name
      const birthday = this.peopleInfo?.birthday?.split('/') || '1990/1/1'.split('/')
      this.year = parseInt(birthday[0])
      this.month = parseInt(birthday[1])
      this.date = parseInt(birthday[2])
      this.github = this.peopleInfo.github
      this.twitter = this.peopleInfo.twitter
      this.linkedin = this.peopleInfo.linkedin
    }
  },
  data() {
    return {
      name: '',
      year: 1990,
      month: 1,
      date: 1,
      github: '',
      twitter: '',
      linkedin: ''
    }
  },
  methods: {
    save() {
      this.$emit('save', {
        name: this.name,
        birthday: `${this.year}/${this.month}/${this.date}`,
        github: this.github,
        twitter: this.twitter,
        linkedin: this.linkedin
      })
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
