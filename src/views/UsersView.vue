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
            @showChangePasswordModal="showChangePasswordModal(user)"
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
    <ChangePasswordModal
      :visible="changePasswordModal"
      @close="changePasswordModal = false"
      @submit="submitChangePassword"
    />
  </div>
</template>

<script lang="ts">
import AccountUserComponent from '@/components/AccountUserComponent.vue'
import AddSubAccountModal from '@/components/AddSubAccountModal.vue'
import AskRemoveModal from '@/components/AskRemoveModal.vue'
import ChangePasswordModal from '@/components/ChangePasswordModal.vue'

import {
  getAccount,
  getSubAccount,
  addSubAccount,
  deleteSubAccount,
  updateSubAccountPassword,
  type AccountInformation,
  type subAccountInformation
} from '@/api'

export default {
  components: {
    AccountUserComponent,
    AddSubAccountModal,
    AskRemoveModal,
    ChangePasswordModal
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
      changePasswordModal: false,
      deleteIndex: 0,
      changePasswordUser: {} as subAccountInformation
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
    showChangePasswordModal(user: subAccountInformation) {
      this.changePasswordUser = user
      this.changePasswordModal = true
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
      if ('Username' in res) {
        this.showSubAccountModal = false
        alert('Add account successfully!')
        location.reload()
      } else {
        alert('Add account failed!')
      }
    },
    async submitChangePassword(oldPassword: string, newPassword: string) {
      const mainAccountUUID = this.changePasswordUser.MainAccountUUID
      const subAccountUUID = this.changePasswordUser.AccountUUID
      const res = await updateSubAccountPassword(
        mainAccountUUID,
        subAccountUUID,
        JSON.stringify({ OldPassword: oldPassword, NewPassword: newPassword })
      )
      if (res == 'Sub-account password successfully changed') {
        alert('Change password successfully!')
        this.changePasswordModal = false
      } else {
        alert('Old password is not correct')
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
