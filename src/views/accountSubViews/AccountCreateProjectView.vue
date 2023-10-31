<template>
  <div class="createProject mx-0 py-3">
    <!-- <h4 class="mt-3 mb-2">Create a New Project</h4> -->

    <div class="d-flex align-items-start mb-3">
      <h4 class="me-2" @click="current = 1" :class="current == 1 ? 'active-section' : ''">
        <i v-if="current == 1" class="bi bi-1-square-fill"></i>
        <i v-else class="bi bi-1-square"></i>
        <span className="ms-2">Company</span>
      </h4>
      <span><i class="bi bi-chevron-right"></i></span>
      <h4 class="mx-2" @click="current = 2" :class="current == 2 ? 'active-section' : ''">
        <i v-if="current == 2" class="bi bi-2-square-fill"></i>
        <i v-else class="bi bi-2-square"></i>
        <span className="ms-2">Team</span>
      </h4>
      <span><i class="bi bi-chevron-right"></i></span>
      <h4 class="mx-2" @click="current = 3" :class="current == 3 ? 'active-section' : ''">
        <i v-if="current == 3" class="bi bi-3-square-fill"></i>
        <i v-else class="bi bi-3-square"></i>
        <span className="ms-2">Objective</span>
      </h4>
      <span><i class="bi bi-chevron-right"></i></span>
      <h4 class="mx-2" @click="current = 4" :class="current == 4 ? 'active-section' : ''">
        <i v-if="current == 4" class="bi bi-4-square-fill"></i>
        <i v-else class="bi bi-4-square"></i>
        <span className="ms-2">Purpose</span>
      </h4>
      <span><i class="bi bi-chevron-right"></i></span>
      <h4 class="ms-2" @click="current = 5" :class="current == 5 ? 'active-section' : ''">
        <i v-if="current == 5" class="bi bi-5-square-fill"></i>
        <i v-else class="bi bi-5-square"></i>
        <span className="ms-2">Assets</span>
      </h4>
    </div>
    <div class="d-grid form rounded border-1 p-3">
      <section class="border-1 mb-3">
        <Transition name="smooth" mode="out-in">
          <div v-if="current == 1" class="form-content ms-3 d-flex flex-column">
            <div class="mt-1 mb-3 py-2 d-flex align-items-center">
              <h5 class="mb-0 me-2">Part A: DLT Foundation Details</h5>
              <span v-show="complete1 == true" class="text-success">✓</span>
              <span v-show="complete1 != true" class="text-danger">*</span>
            </div>
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
            <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
              <button type="button" class="btn btn-primary" @click="nextStep(1)">Next</button>
            </div>
          </div>

          <div v-else-if="current == 2" class="form-content ms-3">
            <div class="mt-1 mb-3 py-2 d-flex align-items-center">
              <h5 class="mb-0 me-2">Part B: Founder(s) Details</h5>
            </div>

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
                        v-model:field="founder.Name"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Position within DLT Foundation"
                        type="text"
                        v-model:field="founder.Position"
                        :required="true"
                      />
                    </div>
                  </div>

                  <LabelInputComponent
                    label="KYC Verification"
                    type="text"
                    v-model:field="founder.Kyc"
                    :required="true"
                  />

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Twitter Account (URL)"
                        type="text"
                        v-model:field="founder.Twitter"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="LinkedIn Profile (URL)"
                        type="text"
                        v-model:field="founder.Linkedin"
                        :required="true"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Email Address"
                        type="text"
                        v-model:field="founder.Email"
                        :required="true"
                      />
                    </div>
                    <div class="col-md-6">
                      <LabelInputComponent
                        label="Ethereum Address"
                        type="text"
                        v-model:field="founder.Ethereum"
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
                    <input type="text" class="me-5 rounded" v-model.lazy="member.Name" required />
                    <label for="duration" class="me-2">Role:</label>
                    <input
                      type="text"
                      class="me-2 rounded"
                      v-model.lazy="member.Position"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
              <button
                type="button"
                class="btn btn-outline-primary me-3"
                @click="current = current - 1"
              >
                Back
              </button>
              <button type="button" class="btn btn-primary" @click="nextStep(2)">Next</button>
            </div>
          </div>

          <div v-else-if="current == 3" class="form-content ms-3">
            <div class="mt-1 mb-3 py-2 d-flex align-items-center">
              <h5 class="mb-0 me-2">Part C: Objectives of the DLT Foundation</h5>
              <span v-show="complete3 == true" class="text-success">✓</span>
              <span v-show="complete3 != true" class="text-danger">*</span>
            </div>

            <div class="form-content">
              <LabelTextareaComponent
                label="Objectives of your DLT Foundation"
                footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)"
                type="text"
                v-model:field="objective"
                :required="true"
              />
            </div>

            <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
              <button
                type="button"
                class="btn btn-outline-primary me-3"
                @click="current = current - 1"
              >
                Back
              </button>
              <button type="button" class="btn btn-primary" @click="nextStep(3)">Next</button>
            </div>
          </div>

          <div v-else-if="current == 4" class="form-content ms-3">
            <div class="mt-1 mb-3 py-2 d-flex align-items-center">
              <h5 class="mb-0 me-2">Part D: Specific Purpose</h5>
              <span v-show="complete4 == true" class="text-success">✓</span>
              <span v-show="complete4 != true" class="text-danger">*</span>
            </div>
            <div class="form-content">
              <LabelTextareaComponent
                label="Motivation of your DLT Foundation"
                footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)"
                type="text"
                v-model:field="motivation"
                :required="true"
              />
            </div>

            <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
              <button
                type="button"
                class="btn btn-outline-primary me-3"
                @click="current = current - 1"
              >
                Back
              </button>
              <button type="button" class="btn btn-primary" @click="nextStep(4)">Next</button>
            </div>
          </div>

          <div v-else-if="current == 5" class="form-content ms-3">
            <div class="mt-1 mb-3 py-2 d-flex align-items-center">
              <h5 class="mb-0 me-2">Part E: Initial Assets</h5>
              <span v-show="complete5 == true" class="text-success">✓</span>
              <span v-show="complete5 != true" class="text-danger">*</span>
            </div>
            <div class="form-content">
              <LabelTextareaComponent
                label="Initial Assets of your DLT Foundation"
                footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):"
                type="text"
                v-model:field="assets"
                :required="true"
              />
            </div>

            <!-- terms and conditions tickbox -->
            <div class="text-nowrap">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="terms"
                ref="terms"
                class="me-2"
              />
              <label for="terms" class="text-wrap align-top">
                By submitting this form, I/we confirm that the provided information is true and
                accurate to the best of my/our knowledge.
              </label>
            </div>

            <div class="nav-btn mt-5 d-flex align-items-center justify-content-center">
              <button type="button" class="btn btn-outline-primary me-3" @click="save">Save</button>
              <button type="button" class="btn btn-primary" @click="submit">Submit</button>
            </div>
          </div>
        </Transition>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import { getPreSignedPutUrl, uploadFile } from '@/api'

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
      current: 1,
      name: '',
      twitter: '',
      website: '',
      whitepaper: '',
      whitepaperFile: File,
      whitepaperId: '',
      whitepaperUploadLink: '',
      teamMembers: [
        {
          Name: '',
          Position: ''
        }
      ],
      founders: [
        {
          Name: '',
          Position: '',
          Kyc: '',
          Twitter: '',
          Linkedin: '',
          Ethereum: '',
          Email: '',
          CV: '',
          cvFile: File,
          cvUploadLink: '',
          CVFilename: ''
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
      } else if (this.founders[0].Name == '') {
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
      // const preSignedPutUrl : any = await getPreSignedPutUrl()
      // console.log("hii", preSignedPutUrl)
      // if (preSignedPutUrl) {
      //   const fileResp = await uploadFile(preSignedPutUrl.URL, file)
      //   if (fileResp.ok) {
      //     this.whitepaperId = preSignedPutUrl.ObjectID
      //     this.whitepaperUploadLink = preSignedPutUrl.URL
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
      if (this.whitepaperFile) {
        const preSignedPutUrl: any = await getPreSignedPutUrl()
        if (preSignedPutUrl) {
          const fileResp = await uploadFile(preSignedPutUrl.URL, this.whitepaperFile as any)
          if (fileResp) {
            this.whitepaperId = preSignedPutUrl.ObjectID
            this.whitepaperUploadLink = preSignedPutUrl.URL
          }
        }
      }

      for (let i = 0; i < this.founders.length; i++) {
        if (this.founders[i].cvFile) {
          const preSignedPutUrl: any = await getPreSignedPutUrl()
          if (preSignedPutUrl) {
            const fileResp = await uploadFile(preSignedPutUrl.URL, this.founders[i].cvFile as any)
            if (fileResp) {
              this.founders[i].CV = preSignedPutUrl.ObjectID
              this.founders[i].cvUploadLink = preSignedPutUrl.URL
              this.founders[i].CVFilename = this.founders[i].cvFile.name
            }
          }
        }
      }
      // let data = {
      //   Name: this.name,
      //   Twitter: this.twitter,
      //   Website: this.website,
      //   Whitepaper: this.whitepaper,
      //   WhitepaperFile: {
      //     ID: this.whitepaperId,
      //     Filename: this.whitepaperFile.name,
      //     URL: this.whitepaperUploadLink
      //   },
      //   NumFounders: parseInt(this.numFounders) ? parseInt(this.numFounders) : 0,
      //   Founders: this.founders,
      //   NumMembers: parseInt(this.numTeamMembers) ? parseInt(this.numTeamMembers) : 0,
      //   Members: this.teamMembers,
      //   Objective: this.objective,
      //   Motivation: this.motivation,
      //   Assets: this.assets
      // } as unknown as NewApplication

      // await createProject(data)
      window.alert('Your response has been submitted')
      this.$router.push({ query: { view: 'Applications' } })
      // }
    },

    addMember() {
      this.teamMembers.push({
        Name: '',
        Position: ''
      })
    },
    addFounder() {
      this.founders.push({
        Name: '',
        Position: '',
        Kyc: '',
        Twitter: '',
        Linkedin: '',
        Ethereum: '',
        Email: '',
        CV: '',
        cvFile: File,
        cvUploadLink: '',
        CVFilename: ''
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
    },
    nextStep(curr: number) {
      const mapping = {
        1: this.complete1,
        2: this.complete2,
        3: this.complete3,
        4: this.complete4,
        5: this.complete5
      }
      if (mapping[curr as keyof typeof mapping]) {
        this.current = curr + 1
      } else {
        window.alert('Please fill in all required fields')
      }
    }
  },
  watch: {
    numFounders: function (val: string) {
      this.founders = []
      for (let i = 0; i < parseInt(val); i++) {
        this.founders.push({
          Name: '',
          Position: '',
          Kyc: '',
          Twitter: '',
          Linkedin: '',
          Ethereum: '',
          Email: '',
          CV: '',
          cvFile: File,
          cvUploadLink: '',
          CVFilename: ''
        })
      }
    },
    numTeamMembers: function (val: string) {
      this.teamMembers = []
      for (let i = 0; i < parseInt(val); i++) {
        this.teamMembers.push({
          Name: '',
          Position: ''
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
  max-height: 2000px;
  overflow-y: hidden;
  overflow-x: hidden;
}

.form-content2 {
  max-height: 3000px;
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
  transition: opacity 0.3s;
}

.smooth-enter,
.smooth-leave-to {
  opacity: 0;
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

.active-section {
  text-decoration: underline;
}
</style>
