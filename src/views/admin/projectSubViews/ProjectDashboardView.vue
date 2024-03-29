<template>
  <div class="container mt-5">
    <div class="d-flex">
      <div style="margin-right: 18px">
        <img :src="project?.logo" class="logo" />
      </div>
      <div class="align-self-center">
        <div class="d-flex">
          <h1 style="margin-right: 18px">{{ project?.name }}</h1>
          <div class="rating align-self-center">
            {{ project?.rating }}
          </div>
        </div>
        <div>
          <a :href="project?.url">{{ project?.url }}</a>
        </div>
        <div>
          Created by
          <span style="color: rgba(39, 50, 131)"
            ><u>{{ project?.author }}</u></span
          >
          on
          <span style="color: rgba(39, 50, 131)"
            ><u>{{ formatDate(project?.dueAt) }}</u></span
          >
        </div>
        <div class="description">{{ project?.description }}</div>
      </div>
    </div>

    <div class="mt-4 d-flex">
      <Tag v-for="tag in project?.tags" :key="tag" :tag="tag" />
    </div>

    <div class="mt-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="overview-tab"
            data-bs-toggle="tab"
            href="#overview"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
            >Overview</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="assessment-tab"
            data-bs-toggle="tab"
            href="#assessment"
            role="tab"
            aria-controls="assessment"
            aria-selected="true"
            >Assessment</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="actions-tab"
            data-bs-toggle="tab"
            href="#actions"
            role="tab"
            aria-controls="actions"
            aria-selected="false"
            >Actions</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="overview"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <div class="mt-3">
            <DashboardOverviewView :project="project" />
          </div>
        </div>
        <div
          class="tab-pane fade show"
          id="assessment"
          role="tabpanel"
          aria-labelledby="assessment-tab"
        >
          <div class="mt-3">
            <DashboardAssessmentView :project="project" />
          </div>
        </div>
        <div class="tab-pane fade show" id="actions" role="tabpanel" aria-labelledby="actions-tab">
          <div class="mt-3">
            <DashboardActionView :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue'
import DashboardOverviewView from './dashboardSubViews/DashboardOverviewView.vue'
import DashboardAssessmentView from './dashboardSubViews/DashboardAssessmentView.vue'
import DashboardActionView from './dashboardSubViews/DashboardActionView.vue'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'

export default {
  props: {
    organizationGuid: String,
    projectGuid: String
  },
  components: {
    Tag,
    DashboardOverviewView,
    DashboardAssessmentView,
    DashboardActionView
  },
  data() {
    return {
      author: 'Yiwei Gong',
      date: new Date()
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    organization() {
      return this.organizationsStore.findOrganization(this.organizationGuid)
    },
    project() {
      const mapping = {
        '1': 'e262d5c2-16f8-47a0-8c70-4019514d137b',
        '2': 'e262d5c2-16f8-47a0-8c70-4019514d137a',
        '3': 'e262d5c2-16f8-47a0-8c70-4019514d137c',
        '4': 'e262d5c2-16f8-47a0-8c70-4019514d137d',
        '5': 'e262d5c2-16f8-47a0-8c70-4019514d137e',
        '6': 'e262d5c2-16f8-47a0-8d10-4019514d137a'
      }
      var projectGuid = mapping[this.$route.params.projectID as keyof typeof mapping]

      return this.organizationsStore.findProject(
        'e262d5c2-16f8-47a0-8c70-4019514b137c',
        projectGuid
      )
    }
  },
  methods: {
    formatDate(date: Date | string | undefined) {
      if (!date) {
        return ''
      }
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.logo {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 3px solid rgba(39, 50, 131);
  padding: 7px;
}

.rating {
  font-size: 1.5rem;
  border: 2px solid rgb(39, 50, 131);
  border-radius: 10px;
  padding: 1px 20px 1px 20px;
}

.description {
  max-width: 420px;
  color: rgb(135, 136, 141);
  font-style: italic;
}

.nav-link {
  color: rgb(135, 136, 141);
}

.nav-link.active {
  color: rgba(39, 50, 131) !important;
}
</style>
