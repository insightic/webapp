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
          <h5 class="modal-title">{{ operationType }} People</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <!-- name -->
          <LabelInputComponent label="Name" type="text" v-model:field="peopleInfo.name" />
          <!-- birthday -->
          <LabelInputComponent
            label="Birthday (The format should be yyyy/mm/dd)"
            type="text"
            v-model:field="peopleInfo.birthday"
          />
          <!-- link of the social media -->
          <LabelInputPrefixComponent
            label="Github"
            type="text"
            v-model:field="peopleInfo.githubURL"
            :link="`https://github.com/`"
          />
          <LabelInputPrefixComponent
            label="Twitter"
            type="text"
            v-model:field="peopleInfo.twitterURL"
            :link="`https://twitter.com/`"
          />
          <LabelInputPrefixComponent
            label="Linkedin"
            type="text"
            v-model:field="peopleInfo.linkedinURL"
            :link="`https://www.linkedin.com/in/`"
          />
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
          <button type="button" class="btn btn-primary" @click="sendPeopleInfo">
            {{ operationType }}
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
export default {
  props: {
    visible: { type: Boolean, required: true },
    operationType: { type: String, default: 'Add' },
    peopleInfo: { type: Object, default: {} as PeopleInfo }
  },
  components: {
    LabelInputComponent,
    LabelInputPrefixComponent,
    LabelSelectComponent
  },
  data() {
    return {
      peopleInfo: {
        name: '',
        birthday: '',
        githubURL: '',
        twitterURL: '',
        linkedinURL: ''
      }
    }
  },
  methods: {
    sendPeopleInfo() {
      this.$emit('sure', {
        name: this.peopleInfo.name,
        birthday: this.peopleInfo.birthday,
        githubURL: 'https://github.com/' + this.peopleInfo.githubURL,
        twitterURL: 'https://twitter.com/' + this.peopleInfo.twitterURL,
        linkedinURL: 'https://linkedin.com/' + this.peopleInfo.linkedinURL
      })
      this.peopleInfo = {} as PeopleInfo
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>
