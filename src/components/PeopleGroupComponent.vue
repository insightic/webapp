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
                  <td width="20%">Name</td>
                  <td width="20%">Date of Birth</td>
                  <td width="20%">Social Medias</td>
                  <td width="20%">CV</td>
                </tr>
                <tr>
                  <td>{{ p.name }}</td>
                  <td>{{ p.birthday }}</td>
                  <td class="d-flex">
                    <a
                      v-if="p.address"
                      :href="`https://etherscan.io/address/0x${p.address}`"
                      target="_blank"
                    >
                      <i class="bi bi-wallet-fill me-2"></i>
                    </a>
                    <a v-if="p.github" :href="`https://github.com/${p.github}`" target="_blank">
                      <i class="bi bi-github me-2"></i>
                    </a>
                    <a v-if="p.twitter" :href="`https://twitter.com/${p.twitter}`" target="_blank">
                      <i class="bi bi-twitter me-2"></i>
                    </a>
                    <a
                      v-if="p.linkedin"
                      :href="`https://www.linkedin.com/in/${p.linkedin}`"
                      target="_blank"
                    >
                      <i class="bi bi-linkedin me-2"></i>
                    </a>
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-outline-primary px-2"
                      v-if="p.cv"
                      @click="downloadFileObject(p.cv)"
                    >
                      <i class="bi bi-cloud-download"></i>
                    </button>
                    <div v-else>Not Available</div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="ms-auto">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary mx-2"
                @click="showEditModal(idx)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger mx-2"
                @click="showRemoveModal(idx)"
              >
                Remove
              </button>
            </div>
          </div>

          <div class="small" v-if="p.score">
            Risk Score: <span>{{ p.score }}</span>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <button class="btn btn btn-primary" @click="showAddModal()">
            {{ addButtonName }}
          </button>
        </li>
      </ul>
    </div>
  </div>
  <AskRemoveModal
    :visible="showAskRemoveModal"
    @close="showAskRemoveModal = false"
    @ok="onConfirmRemove"
  />
  <PeopleInfoModal
    :visible="showPeopleInfoModal"
    :title="peopleInfoModalTitle"
    :confirmText="peopleInfoModalConfirmText"
    :peopleInfo="peopleInfo"
    @close="showPeopleInfoModal = false"
    @save="onSavePeopleInfoModal"
  />
</template>

<script lang="ts">
import AskRemoveModal from './AskRemoveModal.vue'
import PeopleInfoModal from './PeopleInfoModal.vue'
import { getPreSignedGetUrl, type FileObject, type PeopleInfo } from '@/api'

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
      people: Array<PeopleInfo>(),

      showAskRemoveModal: false,

      showPeopleInfoModal: false,
      peopleInfoModalTitle: '',
      peopleInfoModalConfirmText: '',

      activeIdx: 0,
      peopleInfo: {} as PeopleInfo
    }
  },
  methods: {
    showRemoveModal(idx: number) {
      this.activeIdx = idx
      this.showAskRemoveModal = true
    },
    showEditModal(idx: number) {
      this.activeIdx = idx
      this.peopleInfo = JSON.parse(JSON.stringify(this.people[idx]))
      this.peopleInfoModalTitle = `Edit ${this.peopleInfo?.name}`
      this.peopleInfoModalConfirmText = 'Save'
      this.showPeopleInfoModal = true
    },
    showAddModal() {
      this.activeIdx = this.people.length
      this.peopleInfo = {} as PeopleInfo
      this.peopleInfoModalTitle = this.addButtonName
      this.peopleInfoModalConfirmText = this.addButtonName
      this.showPeopleInfoModal = true
    },
    onConfirmRemove() {
      this.people.splice(this.activeIdx, 1)
      this.showAskRemoveModal = false
    },
    onSavePeopleInfoModal(peopleInfo: PeopleInfo) {
      if (this.activeIdx == this.people.length) {
        this.people.push(peopleInfo)
      } else {
        this.people[this.activeIdx] = peopleInfo
      }
      this.showPeopleInfoModal = false
    },
    async downloadFileObject(f: FileObject) {
      const objectId = f.ObjectID
      const filename = f.Filename
      if (!objectId || !filename) return
      const preSignedGet = await getPreSignedGetUrl(objectId, filename)
      if (!preSignedGet?.URL) return
      window.open(preSignedGet?.URL)
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
