<template>
  <div class="mb-4">
    <label class="form-label">
      {{ label }}
    </label>

    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(p, idx) in people" :key="idx">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-person" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              <table style="width: 80%; text-align: left">
                <tr class="text-secondary small">
                  <td>Name</td>
                  <td>Date of Birth</td>
                  <td>Social Medias</td>
                  <td>CV</td>
                </tr>
                <tr>
                  <td>{{ p.name }}</td>
                  <td>{{ p.birthday }}</td>
                  <td class="d-flex">
                    <a v-if="p.githubURL" :href="p.githubURL" target="_blank"
                      ><i class="bi bi-github me-2"></i
                    ></a>
                    <a v-if="p.twitterURL" :href="p.twitterURL" target="_blank"
                      ><i class="bi bi-twitter me-2"></i
                    ></a>
                    <a v-if="p.linkedinURL" :href="p.linkedinURL" target="_blank"
                      ><i class="bi bi-linkedin me-2"></i
                    ></a>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary px-2">
                      <i class="bi bi-cloud-download"></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-sm btn-outline-primary mx-2" @click="edit(idx)">
                Edit
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger mx-2"
                @click=";(showAskRemoveModal = true), (index = idx)"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <button class="btn btn-sm btn-primary" @click="add()">
            {{ addButtonName }}
          </button>
        </li>
      </ul>
    </div>
  </div>
  <AskRemoveModal
    :visible="showAskRemoveModal"
    @close="showAskRemoveModal = false"
    @sure="remove"
  />
  <PeopleInfoModal
    :visible="showPeopleInfoModal"
    :operationType="operationType"
    :peopleInfo="peopleInfo"
    @close="showPeopleInfoModal = false"
    @sure="submit"
  />
</template>

<script lang="ts">
import AskRemoveModal from './AskRemoveModal.vue'
import PeopleInfoModal from './PeopleInfoModal.vue'
import { type PeopleInfo } from '@/api'

export default {
  components: {
    AskRemoveModal,
    PeopleInfoModal
  },
  props: {
    label: { type: String, required: true },
    addButtonName: { type: String, default: 'Add' }
  },
  data() {
    return {
      people: [
        {
          name: 'Gong Yiwei',
          birthday: '1994/02/02',
          githubURL: 'https://github.com/imwithye',
          twitterURL: 'https://twitter.com/imwithye',
          linkedinURL: 'https://www.linkedin.com/in/imwithye/'
        },
        {
          name: 'Lu Shengliang',
          birthday: '1970/02/02',
          githubURL: 'https://github.com/imwithye',
          twitterURL: 'https://twitter.com/imwithye',
          linkedinURL: 'https://www.linkedin.com/in/imwithye/'
        },
        {
          name: 'Wang Ruilin',
          birthday: '2000/02/02',
          githubURL: 'https://github.com/imwithye',
          twitterURL: 'https://twitter.com/imwithye',
          linkedinURL: 'https://www.linkedin.com/in/imwithye/'
        }
      ],
      showAskRemoveModal: false,
      showPeopleInfoModal: false,
      index: 0,
      operationType: 'Add',
      peopleInfo: {} as PeopleInfo
    }
  },
  methods: {
    remove() {
      this.people.splice(this.index, 1)
      this.showAskRemoveModal = false
    },
    edit(idx: number) {
      ;(this.showPeopleInfoModal = true), (this.operationType = 'Edit'), (this.index = idx)
      this.peopleInfo = this.people[this.index]
    },
    add() {
      ;(this.showPeopleInfoModal = true), (this.operationType = 'Add')
      this.peopleInfo = {} as PeopleInfo
    },
    submit(peopleInfo: PeopleInfo, index: number) {
      if (this.operationType == 'Add') {
        this.showPeopleInfoModal = false
        this.people.push(peopleInfo)
      } else {
        this.showPeopleInfoModal = false
        // this.people[index]
      }
    }
  }
}
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
