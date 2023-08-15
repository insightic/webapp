<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1>Create New Application</h1>

      <div class="d-flex align-items-center align-items-start mb-3">
        <div
          class="me-2 nav-item"
          @click="current = 1"
          :class="current == 1 ? '' : 'text-secondary'"
        >
          <i v-if="current == 1" class="bi bi-1-square-fill"></i>
          <i v-else class="bi bi-1-square"></i>
          <span class="ms-2">Basic Information</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 2"
          :class="current == 2 ? '' : 'text-secondary'"
        >
          <i v-if="current == 2" class="bi bi-2-square-fill"></i>
          <i v-else class="bi bi-2-square"></i>
          <span class="ms-2">Objective</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 3"
          :class="current == 3 ? '' : 'text-secondary'"
        >
          <i v-if="current == 3" class="bi bi-3-square-fill"></i>
          <i v-else class="bi bi-3-square"></i>
          <span class="ms-2">Assets</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="mx-2 nav-item"
          @click="current = 4"
          :class="current == 4 ? '' : 'text-secondary'"
        >
          <i v-if="current == 4" class="bi bi-4-square-fill"></i>
          <i v-else class="bi bi-4-square"></i>
          <span class="ms-2">Upload Documents</span>
        </div>
        <span><i class="bi bi-chevron-right"></i></span>
        <div
          class="ms-2 nav-item"
          @click="current = 5"
          :class="current == 5 ? '' : 'text-secondary'"
        >
          <i v-if="current == 5" class="bi bi-5-square-fill"></i>
          <i v-else class="bi bi-5-square"></i>
          <span class="ms-2">Submit</span>
        </div>
      </div>

      <div>
        <div v-if="current == 1">
          <SectionLayout title="Overview">
            <div class="row">
              <div class="col-md-12">
                <LabelInputComponent
                  label="Project Name"
                  type="text"
                  v-model:field="name"
                  :required="true"
                />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Twitter (URL)" type="text" v-model:field="twitter" :required="true" />
              </div>
              <div class="col-md-6">
                <LabelInputComponent label="Website (URL)" type="text" v-model:field="website" :required="true" />
              </div>


            </div>
          </SectionLayout>

          <SectionLayout title="Founders">
            <LabelInputComponent
                label="Number of Founders"
                type="text"
                v-model:field="numFounders"
                :required="true"
              />
            <div class="mb-4" v-for="(founder, counter) in founders" v-bind:key="counter">
              <h6>Founder {{ counter + 1 }}</h6>
              <div class="row">
                <div class="col-md-6">
                  <LabelInputComponent label="Name" type="text" v-model:field="founder.Name" :required="true" />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent
                    label="Position"
                    type="text"
                    v-model:field="founder.Position"
                    :required="true"
                  />
                </div>
                <div class="col-md-12">
                  <LabelInputComponent label="KYC Verification" type="text" v-model:field="founder.Kyc" :required="true" />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent label="Twitter (URL)" type="text" v-model:field="founder.Twitter" :required="true" />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent label="LinkedIn (URL)" type="text" v-model:field="founder.Linkedin" :required="true" />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent label="Email" type="text" v-model:field="founder.Email" :required="true" />
                </div>
                <div class="col-md-6">
                  <LabelInputComponent label="Ethereum Address" type="text" v-model:field="founder.Ethereum" :required="true" />
                </div>

                <!-- <div class="">
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
                </div> -->
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-sm btn-outline-primary" @click="numFounders = parseInt(numFounders) + 1 + ''">Add Another Founder</button>
              </div>
            </div>
          </SectionLayout>

          <SectionLayout title="Team Members">
            <LabelInputComponent
                  label="Number of Team Members"
                  type="text"
                  v-model:field="numTeamMembers"
                  :required="true"
                />
            <div class="mb-2" v-for="(member, counter) in teamMembers" v-bind:key="counter">
              <div class="row">
                <h6>Member {{ counter + 1 }}</h6>
                  <div class="col-md-6">
                    <LabelInputComponent label="Name" type="text" v-model.lazy="member.Name" :required="true" />
                  </div>
                  <div class="col-md-6">
                    <LabelInputComponent label="Role" type="text" v-model.lazy="member.Position" :required="true" />
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-sm btn-outline-primary" @click="numTeamMembers = parseInt(numTeamMembers) + 1 + ''">Add Another Team Member</button>
              </div>
            </div>
          </SectionLayout>

          <hr />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary me-2">Save Draft</button>
              <button class="btn btn-success ms-2">Save and Next</button>
            </div>
          </div>
        </div>
        <div v-if="current == 2">
          <SectionLayout title="Objective">
            <div class="row">
              <div class="col-md-12">
                <LabelTextareaComponent
                  label="Objectives of your DLT Foundation"
                  footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)"
                  type="text"
                  v-model:field="objective"
                  :required="true"
                />
              </div>
              <div class="col-md-12">
                <LabelTextareaComponent
                  label="Motivation of your DLT Foundation"
                  footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)"
                  type="text"
                  v-model:field="motivation"
                  :required="true"
                />
              </div>
            </div>
          </SectionLayout>

          <hr />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary me-2">Save Draft</button>
              <button class="btn btn-success ms-2">Save and Next</button>
            </div>
          </div>
        </div>
        <div v-if="current == 3">
          <SectionLayout title="Initial Assets">
            <div class="row">
              <div class="col-md-12">
                <LabelTextareaComponent
                  label="Initial Assets of your DLT Foundation"
                  footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):"
                  type="text"
                  v-model:field="assets"
                  :required="true"
                />
              </div>
            </div>
          </SectionLayout>

          <hr />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary me-2">Save Draft</button>
              <button class="btn btn-success ms-2">Save and Next</button>
            </div>
          </div>
        </div>

        <div v-if="current == 4">
          <SectionLayout title="Documents">
            <div class="row">
              <div class="col-md-12">
                <div class="">
                  <label for="document" class="">Whitepaper (File)</label>
                  <input type="file" class="form-controls w-100" id="document" @change="onFileChange" />
                  <div class="text-secondary small">
                    Please attach a quality version of the whitepaper document.
                  </div>
                </div>
              </div>
            </div>
          </SectionLayout>

          <hr />
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary me-2">Save Draft</button>
              <button class="btn btn-success ms-2">Save and Next</button>
            </div>
          </div>
        </div>

        <div v-if="current == 5">
          <SectionLayout title="Term and Conditions">
            <div class="row">
              <div class="col-md-12">
                <div
                  style="height: 256px; overflow-y: auto; border: 1px solid #ccc"
                  class="rounded p-2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam
                  tempor. At erat pellentesque adipiscing commodo elit at. Vivamus arcu felis
                  bibendum ut tristique et. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                  congue. Ornare lectus sit amet est placerat. Leo vel fringilla est ullamcorper
                  eget nulla facilisi. Tellus pellentesque eu tincidunt tortor. Placerat vestibulum
                  lectus mauris ultrices eros. Amet commodo nulla facilisi nullam vehicula ipsum a
                  arcu cursus. Laoreet suspendisse interdum consectetur libero id. Id donec ultrices
                  tincidunt arcu non sodales neque sodales. Et netus et malesuada fames. Adipiscing
                  elit pellentesque habitant morbi tristique senectus et netus. Neque vitae tempus
                  quam pellentesque nec nam aliquam sem et. Pretium aenean pharetra magna ac
                  placerat. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
                  Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Tortor
                  dignissim convallis aenean et tortor. Velit ut tortor pretium viverra suspendisse
                  potenti nullam. Urna et pharetra pharetra massa massa ultricies mi quis. Et
                  pharetra pharetra massa massa ultricies mi. Id nibh tortor id aliquet. Amet massa
                  vitae tortor condimentum lacinia quis vel. Integer quis auctor elit sed vulputate.
                  Quam vulputate dignissim suspendisse in est ante in nibh mauris. Parturient montes
                  nascetur ridiculus mus mauris vitae ultricies leo integer. Sodales ut eu sem
                  integer vitae. Orci a scelerisque purus semper eget duis at. Egestas dui id ornare
                  arcu. Sodales ut etiam sit amet nisl purus in mollis. Nec ullamcorper sit amet
                  risus nullam eget felis eget nunc. Diam quis enim lobortis scelerisque. Commodo
                  nulla facilisi nullam vehicula ipsum a. Quis risus sed vulputate odio ut.
                  Condimentum vitae sapien pellentesque habitant morbi. Venenatis a condimentum
                  vitae sapien pellentesque habitant morbi. Lacus luctus accumsan tortor posuere ac
                  ut. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Cursus sit amet
                  dictum sit amet. Sodales ut eu sem integer vitae justo eget magna fermentum.
                  Imperdiet massa tincidunt nunc pulvinar sapien. Massa tempor nec feugiat nisl
                  pretium fusce id velit ut. Nibh sed pulvinar proin gravida. Et netus et malesuada
                  fames ac turpis. Dui vivamus arcu felis bibendum ut tristique. Nullam eget felis
                  eget nunc lobortis mattis aliquam faucibus. Semper viverra nam libero justo. Eget
                  nulla facilisi etiam dignissim diam quis enim lobortis. Diam maecenas ultricies mi
                  eget mauris pharetra et. Aliquam ultrices sagittis orci a scelerisque purus.
                  Semper viverra nam libero justo laoreet. Ut aliquam purus sit amet luctus
                  venenatis lectus magna. Proin fermentum leo vel orci porta non. Vitae sapien
                  pellentesque habitant morbi tristique senectus et. Malesuada proin libero nunc
                  consequat interdum varius sit amet. Quis hendrerit dolor magna eget est lorem.
                  Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Hac
                  habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Faucibus purus
                  in massa tempor nec feugiat nisl. Nunc eget lorem dolor sed viverra ipsum nunc
                  aliquet. Fringilla urna porttitor rhoncus dolor purus non enim. Donec et odio
                  pellentesque diam volutpat commodo sed egestas.
                </div>
              </div>
            </div>
          </SectionLayout>

          <div class="text-nowrap my-2">
            <input type="checkbox" id="terms" name="terms" value="terms" ref="terms" class="me-2" />
            <label for="terms" class="text-wrap align-top">
              By submitting this form, I/we confirm that the provided information is true and
              accurate to the best of my/our knowledge.
            </label>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-success" @click="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NavFooterLayout>
</template>

<script lang="ts">
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'
import { createProject, getPreSignedPutUrl, uploadFile } from '@/api'
import type { NewProject } from '@/api'

export default {
  components: {
    NavFooterLayout,
    SectionLayout,
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
      numFounders: '1',
      numTeamMembers: '1'
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
    },
    async onFileChangeCV(e: any, index: number) {
      console.log(e.target)
      this.founders[index].cvFile = e.target.files[0]
      console.log(this.founders[index].cvFile)
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
          if (fileResp.ok) {
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
            if (fileResp.ok) {
              this.founders[i].CV = preSignedPutUrl.ObjectID
              this.founders[i].cvUploadLink = preSignedPutUrl.URL
              this.founders[i].CVFilename = this.founders[i].cvFile.name
            }
          }
        }
      }
      let data = {
        Name: this.name,
        Twitter: this.twitter,
        Website: this.website,
        Whitepaper: this.whitepaper,
        WhitepaperFile: {
          ID: this.whitepaperId,
          Filename: this.whitepaperFile.name,
          URL: this.whitepaperUploadLink
        },
        NumFounders: parseInt(this.numFounders) ? parseInt(this.numFounders) : 0,
        Founders: this.founders,
        NumMembers: parseInt(this.numTeamMembers) ? parseInt(this.numTeamMembers) : 0,
        Members: this.teamMembers,
        Objective: this.objective,
        Motivation: this.motivation,
        Assets: this.assets
      } as unknown as NewProject

      console.log(data)

      const resp = await createProject(data)
      console.log(resp)
      window.alert('Your response has been submitted')
      this.$router.push({ path:"/", query: { view: 'Applications' } })
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
.nav-item {
  cursor: pointer;
}
</style>
