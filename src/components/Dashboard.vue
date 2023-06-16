<template>
  <div class="dashboard mx-2">
    <div class="menu">
      <div class="row">
        <div class="col-9">
          <form class="form-inline my-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              v-model="searchValue"
            />
          </form>
        </div>

        <div class="col-3 my-2 d-flex align-items-center">
          Add Project
        </div>
      </div>
    </div>
    <div>
      <div class="row justify-content-center">
        <ProjectCard
        v-for="project in projects" :key="project.guid"
          :guid="project.guid"
          :name="project.name"
          :logo="project.logo"
          :highlighted="project.guid == selectedProjectGuid"
          @click="selectedProjectGuid = project.guid"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return { 
      searchValue: '',
    }
  },
  computed: {
    ...mapStores(organizationsStore),
    organizationGuid() {
      return this.$route.params.organizationGuid
    },
    projects() {
      const organization = this.organizationsStore.findOrganization(this.organizationGuid)
      if (!organization) return []
      if (!this.searchValue) return organization.projects
      const searchValue = this.searchValue.toLowerCase()
      return organization.projects.filter((project) =>
        project.name.toLowerCase().includes(searchValue)
      )
    }
  },
  methods: {
    save() {
      window.alert('Your response has been saved');
    },
    submit() {
      if (!this.complete1 || !this.complete2 || !this.complete3 || !this.complete4) {
        window.alert('Please fill in all required fields');
        return
      }
      window.alert('Your response has been submitted');
    },

    addMember(){
      this.teamMembers.push({
        name:'',
        role: ''
      })
    },
    deleteMember(counter){
      this.teamMembers.splice(counter,1);

    }
  },
}

</script>

<style scoped>
.form {
  border-style: dashed;
  border-width: 1px;
}

.secHeader {
  border: 1px solid #22222250;
}

.form-content {
  max-height: 800px;
  overflow-y: hidden;
}

.secHeader > i {
  cursor: pointer;
}

.add-btn, .delete-btn {
  cursor: pointer;
}

.smooth-enter-active, .smooth-leave-active {
  transition: max-height 0.5s;
}
.smooth-enter, .smooth-leave-to {
  max-height: 0;
}

.form-controls {
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-controls:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
}
</style>