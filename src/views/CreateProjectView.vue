<template>
<div class="d-flex align-items-center justify-content-start flex-column w-full h-full max-w-[600px] max-h-[310px]">
  <Transition name="fade" mode="out-in">
  <div v-show="steps != 5"
      class="w-75 mt-5 mb-2">
      <h2 class="text-left">New Project</h2>
      <!-- Stepper -->
      <div class="d-flex align-items-center justify-content-start">
          <p 
              class="step-btn me-5 border-5 border-primary p-2" 
              @click="steps = 1"
              :class="[steps == 1 ? 'text-dark border-secondary' : 'border-success text-success']">
              1. Basic Information
              <span v-show="steps > 1 || isLoading == true">✓</span>
          </p>
          <p 
              class="step-btn me-5"
              @click="steps = 2"
              :class="
              [(steps == 2 ? 'text-dark border-secondary' : 'border-success text-success'), 
              (isLoading == true ? 'border-success text-success' : '')]
              ">
              2. Project Details
              <span v-show="steps > 2 || isLoading == true">✓</span>
          </p>
          <p 
              class="step-btn me-5"
              @click="steps = 3"
              :class="
              [(steps == 3 ? 'text-dark border-secondary' : 'border-success text-success'), 
              (isLoading == true ? 'border-success text-success' : '')]
              ">
              3. Documents
              <span v-show="steps > 3 || isLoading == true">✓</span>
          </p>
          <p 
              class="step-btn me-5"
              @click="steps = 4"
              :class="
              [(steps == 4 ? 'text-dark border-secondary' : 'border-success text-success'), 
              (isLoading == true ? 'border-success text-success' : '')]
              ">
              4. Confirmation
              <span v-show="isLoading == true">✓</span>
          </p>
      </div>
      <!-- Stepper-end -->
  </div>
  </Transition>
  <form class="relative w-75" @submit="formSubmit">
  <Transition name="fade" mode="out-in">
      <!-- Step 1 -->
      <div class="flex flex-col" v-if="steps == 1">
        <div class="form-body">
          <p class="fs-4">About the Project</p>

          <label for="projectName">Project Name</label>
          <input type="text" class="form-control" id="projectName" v-model="projectName">

          <div class="row">
            <div class="col">
              <label for="date">Date</label>
              <input type="text" class="form-control" id="date" v-model="date">
            </div>

            <div class="col">
              <label for="projectType">Project Type</label>
              <select class="form-control" id="projectType" v-model="selectedProjectType">
                <option value="" disabled>Please select a project type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
                <!-- Add more options as needed -->
              </select>
            </div>
          </div>

          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>

        </div>
        <div class="nav-btn d-flex justify-content-center mt-5">
          <button type="button" class="btn btn-outline-primary" @click="steps = 2">Next</button>
        </div>
      </div>
      <!-- Step 1-end -->

      <!-- Step 2 -->
      <div class="flex flex-col" v-else-if="steps == 2">
        <div class="form-body">
          <p class="fs-4">Project Details</p>
          <label for="founder">Founder(s)</label>
          <input type="text" class="form-control" id="projectName" v-model="founder">

          <label for="partnershi[]">Partnerships and Collaboration</label>
          <textarea class="form-control" id="partnership" rows="3" v-model="description"></textarea>

          <label for="audits">Audits and Security</label>
          <textarea class="form-control" id="audits" rows="3" v-model="description"></textarea>
          
        </div>
        <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-outline-primary me-3" @click="steps = 1">Back</button>
          <button type="button" class="btn btn-outline-primary" @click="steps = 3">Next</button>
        </div>
      </div>
      <!-- Step 2-end -->

      <!-- Step 3 -->
      <div class="flex flex-col" v-else-if="steps == 3">
        <div class="form-body">
          <p class="fs-4">Documents</p>
          <label for="repo">Repository Link</label>
          <input type="text" class="form-control" id="repo" v-model="repo">

          <label for="document" class="me-2 mt-4">Whitepaper</label>
          <input type="file" class="form-control-file" id="document" @change="handleFileUpload">

        </div>
        <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
            <button type="button" @click="steps = 4" :class="{ 'bg-gray-400 pointer-events-none': isLoading }" class="btn btn-outline-primary me-3">
                <div v-show="isLoading"
                    class="animate-spin w-5 h-5 rounded-full border-2 border-l-white/20 border-t-white/20"></div>
                <p class="mb-0" v-show="!isLoading">Submit</p>
            </button>
        </div>
    </div>
    <!-- Step 3-end -->

      <!-- Confirmation / Show thank you text if response status 200 -->
      <div v-else class="d-flex align-items-center justify-content-center flex-column">
        <p class="w-10 text-green-400">✓</p>
        <h3 class="text-dark fw-bold fs-4">Thank you</h3>
        <p class="text-black-50 fs-5">Your project has been submitted and is currently being processed.</p>
        <button type="button" class="btn btn-outline-primary" @click="steps = 3">Back</button>
        <!-- Confirmation -end -->
      </div>
  </Transition>
  </form>
</div>
</template>

<script>
// import * as Icon from '@heroicons/vue/outline'

export default {
  data() {
    return {
      steps: 1,
      isLoading: false,
      providerName: null,
      providerNumber: null,
      memberName: null,
      fullName: null,
      email: null,
      phone: null,
      birth: null,
      show: false,
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      // this.isLoading = true // Set submit button as loading/disabled when submit

      const formData = new FormData();
      formData.append(
        'providerName',
        this.providerName
      )
      formData.append(
        'providerNumber',
        this.providerNumber
      )
      formData.append(
        'memberName',
        this.memberName
      )
      formData.append(
        'fullName',
        this.fullName
      )
      formData.append(
        'email',
        this.email
      )
      formData.append(
        'phone',
        this.phone
      )
      formData.append(
        'birth',
        this.birth
      )

      // fetch("link", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then(response => {
      //     if (response.status === 200) {
      //       this.steps = 4 // Show thank you text if response status 200
      //     }
      //   })
      //   .catch(error => console.log(error))
    }
  }
}
</script>

<!-- This css changes default arrow of select and color of disabled option -->
<style scoped>
  select {
      appearance: none;
  }

  .arrow {
      display: inline-block;
      position: absolute;
      padding: 2px;
      right: 15px;
      z-index: 10;
      top: 17px;
      border: solid #9ca3af;
      border-width: 0 1.5px 1.5px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
  }

  .step-btn {
    cursor: pointer;
  }

  select:required:invalid {
      color: #9ca3af;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>