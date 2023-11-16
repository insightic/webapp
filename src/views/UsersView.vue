<template>
  <div class="text-secondary mb-4">Account User Management</div>

  <div style="max-width: 960px">
    <button type="button" class="btn btn-primary mb-3" @click="showAccountModal()">
      Add Account Users
    </button>

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
      if (this.subAccount.find((acc) => acc.Username == username)) {
        alert('You can not add a exieted account')
        return
      }
      const res = await addSubAccount(
        this.account?.AccountUUID,
        JSON.stringify({ Username: username, Password: password })
      )
      console.log(res)
      if ('Username' in res) {
        this.showSubAccountModal = false
        alert('Add account successfully!')
        location.reload()
      } else {
        alert('Add account failed!')
      }
    },
    async deleteSubAccount() {
      const res = await deleteSubAccount(
        this.subAccount[this.deleteIndex].MainAccountUUID,
        this.subAccount[this.deleteIndex].AccountUUID
      )
      if (res) {
        this.showAskRemoveModal = false
        alert('Delete account successfully!')
        location.reload()
      } else {
        alert('Delete account failed!')
      }
    }
  }
}
</script>
