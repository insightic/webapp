<template>
  <div>
    <DetailsModal
      :visible="modalShown"
      @close="modalShown = false"
      :title="modalTitle"
      :description="modalDescription"
      :list="list"
    />

    <!-- <div class="row my-3">
        <div class="col-md-4">
          <ActionCard title="Total Suggestion" status="17" changes="↑ 122" type="up">
            <i class="bi bi-search"></i>
          </ActionCard>
        </div>
        <div class="col-md-4">
          <ActionCard title="Completed" status="5" changes="↑ 5.4%" type="up">
            <i class="bi bi-check2-circle"></i>
          </ActionCard>
        </div>
        <div class="col-md-4">
          <ActionCard title="Action Needed" status="8" changes="↓ 3.2%" type="down">
            <i class="bi bi-info-circle"></i>
          </ActionCard>
        </div>
      </div> -->
    <h4>Action</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in actions" :key="idx">
        <ActionStatusCard
          :title="status.title"
          :text="status.text"
          :type="status.type"
          @click="showModal(status.title, status.text, status.list || [])"
        />
      </div>
    </div>
    <h4>Task</h4>
    <div class="row my-3">
      <div class="col-md-4" v-for="(status, idx) in tasks" :key="idx">
        <ActionStatusCard
          :title="status.title"
          :text="status.text"
          :type="status.type"
          @click="showModal(status.title, status.text, status.list || [])"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ActionStatusCard from '@/components/ActionStatusCard.vue'
// import ActionCard from '@/components/ActionCard.vue'
import DetailsModal from '@/components/DetailsModal.vue'

export default {
  props: ['project'],
  components: {
    ActionStatusCard,
    // ActionCard,
    DetailsModal
  },
  data() {
    return {
      modalShown: false,
      modalTitle: '',
      modalDescription: '',
      list: []
    }
  },
  methods: {
    showModal(title: string, description: string, list: [] = []) {
      this.modalTitle = title
      this.modalDescription = description
      ;(this.modalShown = true), (this.list = list)
      console.log(this.list)
    }
  },
  computed: {
    actions() {
      return this.project?.actionsView?.actions || []
    },
    tasks() {
      return this.project?.actionsView?.tasks || []
    }
  }
}
</script>
