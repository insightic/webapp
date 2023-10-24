<template>
  <div class="createProject mx-3 p-3">
    <h4 class="mt-3 mb-2">Create a New Project</h4>
    <div class="d-grid form rounded border-1 p-3">
      <section class="border-1 mb-5">
        <div
          class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center"
          @click="show1 = !show1"
        >
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Part A: DLT Foundation Details</h5>
          <span v-show="complete1 == true" class="text-success">✓</span>
          <span v-show="complete1 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show1" class="form-content ms-3">
            <LabelInputComponent
              label="DLT Foundation Name"
              type="text"
              v-model:field="name"
              :required="true"
            />
            <LabelInputComponent
              label="Official Twitter Account (URL)"
              type="text"
              v-model:field="twitter"
              :required="true"
            />
            <LabelInputComponent
              label="Official Website (URL)"
              type="text"
              v-model:field="website"
              :required="true"
            />
            <LabelInputComponent
              label="Whitepaper (URL)"
              type="text"
              v-model:field="whitepaper"
              :required="true"
            />
            <div class="">
              <label for="document" class="">Whitepaper (File)</label>
              <input type="file" class="form-controls w-100" id="document" @change="onFileChange" />
              <div class="text-secondary small">
                Please attach a quality version of the whitepaper document.
              </div>
            </div>
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-5">
        <div
          class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center"
          @click="show2 = !show2"
        >
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Part B: Founder(s) Details</h5>
          <span v-show="complete2 == true" class="text-success">✓</span>
          <span v-show="complete2 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <!-- <div v-if="show2" class="form-content ms-3" :style="{maxHeight: calcHeight }"> -->
          <div v-if="show2" class="form-content2 ms-3">
            <div class="">
              <label class="form-label" for="teamMembers">
                Founders
                <span class="text-danger">*</span>
              </label>
              <LabelInputComponent
                label="Number of Founders"
                type="text"
                v-model:field="numFounders"
                :required="true"
              />

              <div class="">
                <div class="mb-4" v-for="(founder, counter) in founders" v-bind:key="counter">
                  <div class="d-flex">
                    <div class="fw-bold">Founder {{ counter + 1 }}</div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Name"
                        type="text"
                        v-model:field="founder.name"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Position within DLT Foundation"
                        type="text"
                        v-model:field="founder.position"
                        :required="true"
                      />
                    </div>
                  </div>

                  <LabelInputComponent
                    label="KYC Verification"
                    type="text"
                    v-model:field="founder.kyc"
                    :required="true"
                  />

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Twitter Account (URL)"
                        type="text"
                        v-model:field="founder.twitter"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="LinkedIn Profile (URL)"
                        type="text"
                        v-model:field="founder.linkedin"
                        :required="true"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Email Address"
                        type="text"
                        v-model:field="founder.email"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Ethereum Address"
                        type="text"
                        v-model:field="founder.ethereum"
                        :required="true"
                      />
                    </div>
                  </div>

                  <div class="">
                    <label for="document" class="">CV</label>
                    <input
                      type="file"
                      class="form-controls w-100"
                      id="document"
                      @change="onFileChangeCV($event, counter)"
                    />
                    <div class="text-secondary small">
                      Brief CV or Biography (Please attach separate sheets if necessary)
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5">
                <label class="form-label" for="teamMembers">
                  Team Members
                  <span class="text-danger">*</span>
                </label>
                <LabelInputComponent
                  label="Number of Team Members"
                  type="text"
                  v-model:field="numTeamMembers"
                  :required="true"
                />

                <div class="">
                  <div class="mb-2" v-for="(member, counter) in teamMembers" v-bind:key="counter">
                    <label for="duration" class="me-2">{{ counter + 1 }}. Member - Name:</label>
                    <input type="text" class="me-5 rounded" v-model.lazy="member.name" required />
                    <label for="duration" class="me-2">Role:</label>
                    <input type="text" class="me-2 rounded" v-model.lazy="member.role" required />
                  </div>
                </div>
              </div>

              <!-- <div class="">
                <div class="mb-2" v-for="(founder, counter) in founders" v-bind:key="counter">
                  <div class="d-flex">
                    <div class="fw-bold">Founder {{ counter + 1 }}</div>
                    <span class="delete-btn text-danger ms-3" @click="deleteFounder(counter)">Remove founder</span>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent label="Name" type="text" v-model:field="founder.name" :required="true"/>
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent label="Position within DLT Foundation" type="text" v-model:field="founder.position" :required="true"/>
                    </div>
                  </div>

                  <LabelInputComponent label="KYC Verification" type="text" v-model:field="founder.kyc" :required="true"/>

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent label="Twitter Account (URL)" type="text" v-model:field="founder.twitter" :required="true"/>
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent label="LinkedIn Profile (URL)" type="text" v-model:field="founder.linkedin" :required="true"/>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent label="Email Address" type="text" v-model:field="founder.email" :required="true"/>
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent label="Ethereum Address" type="text" v-model:field="founder.ethereum" :required="true"/>
                    </div>
                  </div>

                  <div class="">
                    <label for="document" class=""
                      >CV</label
                    >
                    <input
                      type="file"
                      class="form-controls w-100"
                      id="document"
                    />
                    <div class="text-secondary small">
                      Brief CV or Biography (Please attach separate sheets if necessary)
                    </div>
                  </div>


                </div>
                <div class="w-100 d-flex justify-content-center">
                  <i class="bi bi-plus-circle add-btn" @click="addFounder"></i>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <label class="form-label" for="teamMembers">
                Team Members
                <span class="text-danger">*</span>
              </label>
              <div class="">
                <div class="mb-2" v-for="(member, counter) in teamMembers" v-bind:key="counter">
                  <label for="duration" class="me-2">{{ counter + 1 }}. Member - Name:</label>
                  <input type="text" class="me-5 rounded" v-model.lazy="member.name" required />
                  <label for="duration" class="me-2">Role:</label>
                  <input type="text" class="me-2 rounded" v-model.lazy="member.role" required />
                  <span class="delete-btn" @click="deleteMember(counter)">x</span>
                </div>
                <div class="w-50 d-flex justify-content-center">
                  <i class="bi bi-plus-circle add-btn" @click="addMember"></i>
                </div>
              </div> -->
            </div>
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-5">
        <div
          class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center"
          @click="show3 = !show3"
        >
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Part C: Objectives of the DLT Foundation</h5>
          <span v-show="complete3 == true" class="text-success">✓</span>
          <span v-show="complete3 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show3" class="form-content ms-3">
            <LabelTextareaComponent
              label="Objectives of your DLT Foundation"
              footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)"
              type="text"
              v-model:field="objective"
              :required="true"
            />
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-5">
        <div
          class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center"
          @click="show4 = !show4"
        >
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Part D: Specific Purpose</h5>
          <span v-show="complete4 == true" class="text-success">✓</span>
          <span v-show="complete4 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show4" class="form-content ms-3">
            <LabelTextareaComponent
              label="Motivation of your DLT Foundation"
              footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)"
              type="text"
              v-model:field="motivation"
              :required="true"
            />
          </div>
        </Transition>
      </section>

      <section class="border-1 mb-3">
        <div
          class="mt-1 mb-3 py-2 px-3 secHeader d-flex align-items-center"
          @click="show5 = !show5"
        >
          <i class="bi bi-caret-down-square-fill pe-2"></i>
          <h5 class="mb-0 me-2">Part E: Initial Assets</h5>
          <span v-show="complete5 == true" class="text-success">✓</span>
          <span v-show="complete5 != true" class="text-danger">*</span>
        </div>

        <Transition name="smooth" mode="out-in">
          <div v-if="show5" class="form-content ms-3">
            <LabelTextareaComponent
              label="Initial Assets of your DLT Foundation"
              footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):"
              type="text"
              v-model:field="assets"
              :required="true"
            />
          </div>
        </Transition>
      </section>

      <!-- terms and conditions tickbox -->
      <div class="px-3 text-nowrap">
        <input type="checkbox" id="terms" name="terms" value="terms" ref="terms" class="me-2" />
        <label for="terms" class="text-wrap align-top">
          By submitting this form, I/we confirm that the provided information is true and accurate
          to the best of my/our knowledge.
        </label>
      </div>

      <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-outline-primary me-3" @click="save">Save</button>
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import { createProject, getPreSignedPutUrl, uploadFile } from '@/api'
import type { NewApplication } from '@/api'

export default {
  setup() {},
  components: {
    LabelInputComponent,
    LabelTextareaComponent
  },
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      name: '',
      twitter: '',
      website: '',
      whitepaper: '',
      whitepaperFile: File,
      whitepaperFileLink: '',
      teamMembers: [
        {
          name: '',
          role: ''
        }
      ],
      founders: [
        {
          name: '',
          position: '',
          kyc: '',
          twitter: '',
          linkedin: '',
          ethereum: '',
          email: '',
          cv: '',
          cvFile: File
        }
      ],
      objective: '',
      motivation: '',
      assets: '',
      numFounders: '',
      numTeamMembers: ''
    }
  },
  computed: {
    complete1() {
      return (
        this.name !== '' && this.twitter !== '' && this.website !== '' && this.whitepaper !== ''
      )
    },
    complete2() {
      if (this.founders.length == 0 && this.teamMembers.length == 0) {
        return true
      } else if (this.founders[0].name == '') {
        return false
      } else {
        return true
      }
    },
    complete3() {
      return this.objective !== ''
    },
    complete4() {
      return this.motivation !== ''
    },
    complete5() {
      return this.assets !== ''
    },
    calcHeight() {
      return this.founders.length * 600 + this.teamMembers.length * 100 + 'px'
    }
  },
  methods: {
    save() {
      window.alert('Your response has been saved')
    },
    async onFileChange(e: any) {
      this.whitepaperFile = e.target.files[0]
      // const file = e.target.files[0]
      // const preSignedUrl : any = await getPreSignedUrl(file.name)
      // if (preSignedUrl) {
      //   const fileResp = await uploadFile(preSignedUrl.URL, file)
      //   if (fileResp.ok) {
      //     this.whitepaperFileLink = "https://staging-webapp-private-assets-insightic.s3.ap-southeast-1.amazonaws.com" + file.name
      //   }
      // }
    },
    async onFileChangeCV(e: any, index: number) {
      console.log(e.target)
      this.founders[index].cvFile = e.target.files[0]
      console.log(this.founders[index].cvFile)
      // const preSignedUrl : any = await getPreSignedUrl(file.name)
      // if (preSignedUrl) {
      //   const fileResp = await uploadFile(preSignedUrl.URL, file)
      //   if (fileResp.ok) {
      //     this.founders[index].cv = "https://staging-webapp-private-assets-insightic.s3.ap-southeast-1.amazonaws.com" + file.name
      //   }
      // }
    },
    async submit() {
      //   if (!this.complete1 || !this.complete2 || !this.complete3 || !this.complete4) {
      //     window.alert('Please fill in all required fields')
      //     return
      //   } else if (!(this.$refs.terms as any).checked) {
      //     window.alert('Please agree to the terms and conditions')
      //     return
      //   } else {
      if (!this.complete1 || !this.complete2 || !this.complete3 || !this.complete4) {
        window.confirm('Required fields are not filled in. Are you sure you want to submit?')
      }
      const preSignedUrl: any = await getPreSignedPutUrl()
      if (preSignedUrl) {
        const fileResp = await uploadFile(preSignedUrl.URL, this.whitepaperFile as any)
        if (fileResp) {
          this.whitepaperFileLink =
            'https://staging-webapp-private-assets-insightic.s3.ap-southeast-1.amazonaws.com/' +
            this.whitepaperFile.name
        }
      }
      for (let i = 0; i < this.founders.length; i++) {
        const preSignedUrl: any = await getPreSignedPutUrl()
        if (preSignedUrl) {
          const fileResp = await uploadFile(preSignedUrl.URL, this.founders[i].cvFile as any)
          if (fileResp) {
            this.founders[i].cv =
              'https://staging-webapp-private-assets-insightic.s3.ap-southeast-1.amazonaws.com/' +
              this.founders[i].cvFile.name
          }
        }
      }
      let data = {
        name: this.name,
        twitter: this.twitter,
        website: this.website,
        whitepaper: this.whitepaper,
        whitepaperFile: this.whitepaperFileLink,
        numFounders: parseInt(this.numFounders) ? parseInt(this.numFounders) : 0,
        founders: this.founders,
        numMembers: parseInt(this.numTeamMembers) ? parseInt(this.numTeamMembers) : 0,
        members: this.teamMembers,
        objective: this.objective,
        motivation: this.motivation,
        assets: this.assets
      } as unknown as NewApplication
      await createProject(data)
      window.alert('Your response has been submitted')
      this.$router.push({ query: { view: 'Projects' } })
      // }
    },

    addMember() {
      this.teamMembers.push({
        name: '',
        role: ''
      })
    },
    addFounder() {
      this.founders.push({
        name: '',
        position: '',
        kyc: '',
        twitter: '',
        linkedin: '',
        ethereum: '',
        email: '',
        cv: '',
        cvFile: File
      })
    },
    deleteMember(counter: number) {
      this.teamMembers.splice(counter, 1)
    },
    deleteFounder(counter: number) {
      this.founders.splice(counter, 1)
    },
    alert() {
      window.alert(this.name)
    }
  },
  watch: {
    numFounders: function (val: string) {
      this.founders = []
      for (let i = 0; i < parseInt(val); i++) {
        this.founders.push({
          name: '',
          position: '',
          kyc: '',
          twitter: '',
          linkedin: '',
          ethereum: '',
          email: '',
          cv: '',
          cvFile: File
        })
      }
    },
    numTeamMembers: function (val: string) {
      this.teamMembers = []
      for (let i = 0; i < parseInt(val); i++) {
        this.teamMembers.push({
          name: '',
          role: ''
        })
      }
    }
  }
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
  overflow-x: hidden;
}
.form-content2 {
  max-height: 2000px;
  overflow-y: hidden;
  overflow-x: hidden;
}

.secHeader > i {
  cursor: pointer;
}

.add-btn,
.delete-btn {
  cursor: pointer;
}

.smooth-enter-active,
.smooth-leave-active {
  transition: max-height 0.3s;
}
.smooth-enter,
.smooth-leave-to {
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
