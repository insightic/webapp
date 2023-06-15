<template>
  <div class="createProject mx-3 p-3">
    <h4 class="mt-3 mb-2">Create a New Project</h4>
    <div class='d-grid form rounded border-1 p-3'>
      <section class="border-1 mb-5">
        <div class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center" @click="show1 = !show1">
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Basic Information</h5>
          <span v-show="complete1 == true" class="text-success">✓</span>
          <span v-show="complete1 != true" class="text-danger">*</span>
        </div>
        
        <Transition name="smooth" mode="out-in">
          <div v-if="show1" class="form-content">
            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="name">
                <span class="text-danger">*</span>
                Project Name</label>
              <input type="text" class="form-controls col-10" id="name" v-model="name">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="projectType">
                <span class="text-danger">*</span>
              Project Type</label>
              <select class="form-controls col-10" id="projectType" v-model="projectType">
                <option value="" disabled>Please select a project type</option>
                <option value="Type 1">DEX</option>
                <option value="Type 2">NFT</option>
                <option value="Type 3">Stable Coin</option>
                <!-- Add more options as needed -->
              </select>
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-top" for="desc">
                <span class="text-danger">*</span>
                Description</label>
                <textarea class="form-controls col-10" id="desc" rows="3" v-model="desc"></textarea>
            </div> 

            <div class="row m-2">
              <label class="col-2 text-end align-self-center" for="projectOnChainAddress">
                <span class="text-danger">*</span>
                Project On Chain Address</label>
              <input type="text" class="form-controls col-10" id="projectOnChainAddress" v-model="projectOnChainAddress">
            </div> 
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-5">
        <div class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center" @click="show2 = !show2">
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Team Information</h5>
          <span v-show="complete2 == true" class="text-success">✓</span>
          <span v-show="complete2 != true" class="text-danger">*</span>
        </div>        
        
        <Transition name="smooth" mode="out-in">
          <div v-if="show2" class="form-content">

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="founder">
                <span class="text-danger">*</span>
                Founder</label>
              <input type="text" class="form-controls col-10" id="founder" v-model="founder">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="teamName">
                <span class="text-danger">*</span>
                Team Name</label>
              <input type="text" class="form-controls col-10" id="teamName" v-model="teamName">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="officeAddress">
                <span class="text-danger">*</span>
                Office Address</label>
              <input type="text" class="form-controls col-10" id="officeAddress" v-model="officeAddress">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="companyEmail">
                <span class="text-danger">*</span>
                Company Email Address</label>
              <input type="text" class="form-controls col-10" id="companyEmail" v-model="companyEmail">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-2 text-end align-self-center" for="onChainAddress">
                <span class="text-danger">*</span>
                On Chain Address</label>
              <input type="text" class="form-controls col-10" id="onChainAddress" v-model="onChainAddress">
            </div> 

            <div class="row m-2">
              <label class="col-2 text-end align-self-start" for="onChainAddress">
                <span class="text-danger">*</span>
                Team Members</label>
                <div class='col-10'>
                  <div class="mb-2"
                  v-for="(member, counter) in teamMembers"
                  v-bind:key="counter">
                    <label for="duration" class="me-2">{{counter+1}}. Member Name</label>
                    <input type="text" class="me-5 rounded" v-model.lazy="member.name" required>
                    <label for="duration" class="me-2">Role:</label>
                    <input type="text" class="me-2 rounded" v-model.lazy="member.role" required> 
                    <span class="delete-btn" @click="deleteMember(counter)">x</span>
                  </div>
                  <div class="w-50 d-flex justify-content-center">
                    <i class="bi bi-plus-circle add-btn" @click="addMember"></i>
                  </div>

                </div>
                
            </div>
            


          </div>
        </Transition>
      </section>

      <section class="border-1 mb-5">
        <div class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center" @click="show3 = !show3">
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Project Community</h5>
          <span v-show="complete3 == true" class="text-success">✓</span>
          <span v-show="complete3 != true" class="text-danger">*</span>

        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show3" class="form-content">
            <div class="row mx-2 my-4">
              <label class="col-1 text-end align-self-center" for="github">
                <span class="text-danger">*</span>
                Github</label>
              <input type="text" class="form-controls col-4" id="github" v-model="github">
              
              <label class="col-2 text-end align-self-center" for="telegram">
                Telegram</label>
              <input type="text" class="form-controls col-4" id="telegram" v-model="telegram">
            </div> 

            <div class="row mx-2 my-4">
              <label class="col-1 text-end align-self-center" for="discord">
                Discord</label>
              <input type="text" class="form-controls col-4" id="discord" v-model="discord">
            
              <label class="col-2 text-end align-self-center" for="twitter">
                Twitter</label>
              <input type="text" class="form-controls col-4" id="twitter" v-model="twitter">
            </div> 
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-3">
        <div class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center" @click="show4 = !show4">
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Documents</h5>
          <span v-show="complete4 == true" class="text-success">✓</span>
          <span v-show="complete4 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show4" class="form-content">
            <div class="row m-2">
              <label class="col-2 text-end align-self-center" for="companyEmail">
                <span class="text-danger">*</span>
                Repository Link</label>
              <input type="text" class="form-controls col-10" id="repo" v-model="repo">
            </div> 

            <div class="row m-2">
              <label for="document" class="col-2 text-end align-self-center">Whitepaper</label>
              <input type="file" class="form-controls col-10" id="document" @change="handleFileUpload">
            </div> 

            <div class="row m-2">
              <label for="document" class="col-2 text-end align-self-center">Code Files</label>
              <input type="file" class="form-controls col-10" id="document" @change="handleFileUpload">
            </div> 

          </div>
        </Transition>
      </section>

      <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-outline-primary me-3" @click="save">Save</button>
          <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>

    
  </div>
</template>

<script>


export default {
  setup() {

  },
  data() {
    return { 
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      name: '',
      projectType: 'Please select a project type',
      desc: '',
      projectOnChainAddress: '',
      founder: '',
      teamName: '',
      officeAddress: '',
      companyEmail: '',
      onChainAddress: '',
      github: '',
      telegram: '',
      discord: '',
      twitter: '',
      repo: '',
      whitepaper: '',
      codeFiles: '',
      teamMembers:[
          {
          name: '',
          role:''
          }
      ]

    };
  },
  computed: {
    complete1() {
      return this.name !== '' && 
      this.projectType !== '' && 
      this.desc !== '' && 
      this.projectOnChainAddress !== '';
    },
    complete2() {
      return this.founder !== '' && 
      this.teamName !== '' && 
      this.officeAddress !== '' && 
      this.companyEmail !== '' && 
      this.onChainAddress !== '' ;
    },
    complete3() {
      return this.github !== '' 
    },
    complete4() {
      return this.repo !== '' 
    },
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