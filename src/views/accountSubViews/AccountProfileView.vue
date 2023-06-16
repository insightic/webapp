<template>
  <div class="profile">
    <div class="form-content">
      <div class="row mx-2 mt-3 mb-4">
        <label class="title text-start align-self-center" for="name"> Team Name </label>
        <input type="text" class="form-controls" id="name" v-model="name" />
      </div>

      <div class="row mx-2 my-4">
        <div class="col-6 ps-0 d-flex flex-column justify-content-start">
          <label class="title me-1 text-start align-self-start" for="github">
            Director First Name
          </label>
          <input
            type="text"
            class="form-controls align-self-start"
            style="width: 100%"
            id="github"
            v-model="fname"
          />
        </div>

        <div class="col-6 ps-0 d-flex flex-column justify-content-start">
          <label class="title me-1 text-start align-self-start" for="github">
            Director Last Name
          </label>
          <input
            type="text"
            class="form-controls align-self-start"
            style="width: 100%"
            id="github"
            v-model="lname"
          />
        </div>
      </div>

      <div class="row mx-2 my-4">
        <label class="title text-start align-self-center" for="name"> Bio </label>
        <textarea
          type="text"
          class="form-controls"
          id="name"
          v-model="bio"
          placeholder="Tell us about your company"
        >
        </textarea>
        <span class="subtext">Your bio will appear on your profile. You may edit it anytime.</span>
      </div>

      <div class="row mx-2 my-4">
        <label class="title text-start align-self-center" for="name"> Company </label>
        <input
          type="text"
          class="form-controls"
          id="company"
          v-model="company"
          placeholder="Insightic"
        />
      </div>

      <div class="row mx-2 my-4">
        <label class="title text-start align-self-center" for="name"> Industry </label>
        <input
          type="text"
          class="form-controls"
          id="company"
          v-model="industry"
          placeholder="N/A"
        />
      </div>

      <div class="row mx-2 my-4">
        <label class="title text-start align-self-center" for="name"> Country </label>
        <input
          type="text"
          class="form-controls"
          id="company"
          v-model="country"
          placeholder="Singapore"
        />
        <span class="subtext">Which country does your company base in?</span>
      </div>

      <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-primary" @click="submit">Update Profile</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'Insightic',
      fname: '',
      lname: '',
      bio: '',
      company: 'Insightic',
      industry: 'N/A',
      country: 'Singapore'
    }
  },
  methods: {
    submit() {
      alert('Profile Updated')
    }
  }
}
</script>

<style scoped>
.form-content {
  max-height: 800px;
  overflow-y: hidden;
}

.title {
  margin-bottom: 0.5rem;
  margin-left: 0px;
  padding-left: 0px;
}

.subtext {
  font-weight: 300;
  margin-left: 0.2rem;
  padding-left: 0px;
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
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-controls:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
