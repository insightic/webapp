<template>
  <div class="text-secondary mb-4">Account User Management</div>

  <div style="max-width: 960px">
    <button type="button" class="btn btn-primary mb-3" @click="showAccountModal()">Add</button>

    <div class="card w-100">
      <div class="card-header"><b>Account Users</b></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(user, idx) in subAccount" :key="user.ID">
          <AccountUserComponent
            :role="'agent'"
            :name="user.Username"
            :created-at="user.CreatedAt"
            @showAskModal="showAskModal(idx)"
          />
        </li>
      </ul>
    </div>
    <AddSubAccountModal
      :visible="showSubAccountModal"
      @close="showSubAccountModal = false"
      @save="addSubAccount"
    />
    <AskRemoveModal
      :visible="showAskRemoveModal"
      @close="showAskRemoveModal = false"
      @ok="deleteSubAccount()"
    />
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import AccountUserComponent from '@/components/AccountUserComponent.vue'
import AddSubAccountModal from '@/components/AddSubAccountModal.vue'
import AskRemoveModal from '@/components/AskRemoveModal.vue'

import {
  getAccount,
  getSubAccount,
  addSubAccount,
  deleteSubAccount,
  type AccountInformation,
  type subAccountInformation
} from '@/api'

export default {
  components: {
    LabelInputComponent,
    AccountUserComponent,
    AddSubAccountModal,
    AskRemoveModal
  },
  async created() {
    this.account = await getAccount()
    this.subAccount = await getSubAccount(this.account?.AccountUUID)
  },

  data() {
    return {
      account: null as AccountInformation | null,
      subAccount: [] as subAccountInformation[],
      showSubAccountModal: false,
      showAskRemoveModal: false,
      deleteIndex: 0
    }
  },
  methods: {
    showAccountModal() {
      this.showSubAccountModal = true
    },
    showAskModal(idx: number) {
      this.deleteIndex = idx
      this.showAskRemoveModal = true
    },
    async addSubAccount(username: string, password: string) {
      const res = await addSubAccount(
        this.account?.AccountUUID,
        JSON.stringify({ Username: username, Password: password })
      )
      if (res) {
        alert('Add account successfully!')
        this.showSubAccountModal = false
        location.reload()
      }
    },
    async deleteSubAccount() {
      this.subAccount.splice(this.deleteIndex, 1)
      const res = await deleteSubAccount(
        this.subAccount[this.deleteIndex].MainAccountUUID,
        this.subAccount[this.deleteIndex].AccountUUID
      )
      if (res) {
        alert('Delete account successfully!')
        this.showAskRemoveModal = false
      }
    }
  }
}
</script>
