<template>
  <div class="text-secondary mb-4">Showing all submission</div>

  <div>
      <SubmissionListComponent :isHeader="true" :isAdmin="false"/>
      <SubmissionListComponent v-for="(submission, index) in submissionList" :key="submission.SubmissionID" :submission="submission" :isAdmin="false" :counter="index+1" :counter2="submissionList.length - index" :canWithdraw="index == 0"/>
  </div>
</template>

<script lang="ts">
import { formatDateTime } from '@/helpers';
import SubmissionListComponent from '@/components/SubmissionListComponent.vue'

import { getProject } from '@/api'
import type { Submission } from '@/api'

export default {
  components: {
    SubmissionListComponent
  },
  async created() {
    this.submissionList = (await getProject(this.$route.params.projectID as string).then(res => res!.Submissions)).sort((a,b) => formatDateTime(a.SubmissionAt) < formatDateTime(b.SubmissionAt) ? 1 : -1)

  },
  data() {
    return {
      submissionList: [] as Submission[]
    }
  },
  methods: {
  },
  computed: {
  },
  watch: {
  }
}
</script>
