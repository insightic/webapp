<template>
  <div class="text-secondary mb-4">Account User Management</div>

  <div style="max-width: 960px">
    <LabelInputComponent label="Add new user" type="text" />
    <button type="button" class="btn btn-primary mb-3">Add</button>

    <div class="card w-100">
      <div class="card-header"><b>Account Users</b></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="user in users" :key="user.ID">
          <AccountUserComponent :role="user.Role" :name="user.Name" :created-at="user.CreatedAt" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import AccountUserComponent from '@/components/AccountUserComponent.vue'

export default {
  components: {
    LabelInputComponent,
    AccountUserComponent
  },
  data() {
    return {
      users: [
        {
          ID: 1,
          Role: 'admin',
          Name: 'Yiwei Gong',
          CreatedAt: '2023-03-19 10:21:10'
        },
        {
          ID: 2,
          Role: 'admin',
          Name: 'Ray Han',
          CreatedAt: '2023-03-16 10:21:10'
        },
        {
          ID: 3,
          Role: 'user',
          Name: 'Shengjie Xu',
          CreatedAt: '2023-03-19 10:21:10'
        },
        {
          ID: 4,
          Role: 'user',
          Name: 'Lucy Liew',
          CreatedAt: '2023-03-12 10:21:10'
        },
        {
          ID: 5,
          Role: 'user',
          Name: 'May Wong',
          CreatedAt: '2023-03-10 10:21:10'
        },
        {
          ID: 6,
          Role: 'agent',
          Name: 'BizCorp',
          CreatedAt: '2023-03-10 10:21:10'
        },
        {
          ID: 7,
          Role: 'agent',
          Name: 'Bizconsulting',
          CreatedAt: '2023-03-10 10:21:10'
        }
      ]
    }
  }
}
</script>
