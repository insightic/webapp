<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5 d-flex justify-content-center">
      <div>
        <div class="d-flex justify-content-between mb-3" style="max-width: 960px">
          <div class="text-secondary align-self-center">Submission Details</div>
          <div>
            <div>Status: {{ status }}</div>
            <div>Submitted At: {{ submissionAt }}</div>
          </div>
        </div>

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

        <div style="max-width: 1250px">
          <div v-if="current == 1">
            <SectionLayout title="Part A: DLT Foundation Details">
              <LabelInputComponent
                label="DLT Foundation Name"
                type="text"
                v-model:field="name"
                :required="true"
                :disabled="readonly"
              />

              <LabelInputComponent
                label="Official Twitter Account (URL)"
                type="text"
                v-model:field="twitter"
                :required="true"
                :disabled="readonly"
              />
              <LabelInputComponent
                label="Official Website (URL)"
                type="text"
                v-model:field="website"
                :required="true"
                :disabled="readonly"
              />

              <LabelInputComponent
                label="Whitepaper (URL)"
                type="text"
                v-model:field="whitepaper"
                :required="true"
                :disabled="readonly"
              />
              <!-- <div class="">
                <label for="document" class="">Whitepaper (File)</label>
                <div v-if="!editWhitepaper">
                  <i class="bi bi-file-earmark-text me-2"></i>
                  <a :href="whitepaperDownloadLink">{{ whitepaperFilename }}</a>
                  <a class="ms-5" @click="editWhitepaper = !editWhitepaper">Edit</a>
                </div>
                <div v-else>
                  <input type="file" class="form-controls" id="document" @change="onFileChange" />
                  <a @click="editWhitepaper = !editWhitepaper">Cancel</a>
                  <div class="text-secondary small">
                    Please attach a quality version of the whitepaper document.
                  </div>
                </div>
              </div> -->
            </SectionLayout>
          </div>

          <div v-if="current == 2">
            <SectionLayout title="Part B: Founder(s) Detail">
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
                  :disabled="readonly"
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
                          :disabled="readonly"
                        />
                      </div>
                      <div class="col-md-6">
                        <LabelInputComponent
                          label="Position within DLT Foundation"
                          type="text"
                          v-model:field="founder.Position"
                          :required="true"
                          :disabled="readonly"
                        />
                      </div>
                    </div>

                    <LabelInputComponent
                      label="KYC Verification"
                      type="text"
                      v-model:field="founder.Kyc"
                      :required="true"
                      :disabled="readonly"
                    />

                    <div class="row">
                      <div class="col-md-6">
                        <LabelInputComponent
                          label="Twitter Account (URL)"
                          type="text"
                          v-model:field="founder.Twitter"
                          :required="true"
                          :disabled="readonly"
                        />
                      </div>
                      <div class="col-md-6">
                        <LabelInputComponent
                          label="LinkedIn Profile (URL)"
                          type="text"
                          v-model:field="founder.Linkedin"
                          :required="true"
                          :disabled="readonly"
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
                          :disabled="readonly"
                        />
                      </div>
                      <div class="col-md-6">
                        <LabelInputComponent
                          label="Ethereum Address"
                          type="text"
                          v-model:field="founder.Ethereum"
                          :required="true"
                          :disabled="readonly"
                        />
                      </div>
                    </div>

                    <!-- <div class="">
                      <label for="document" class="">CV</label>
                      <div v-if="!founder.editCv">
                        <i class="bi bi-file-earmark-text me-2"></i>
                        <a :href="founder.CVDwonloadLink">{{ founder.CVFilename }}</a>
                        <a class="ms-5" @click="founder.editCv = !founder.editCv">Edit</a>
                      </div>
                      <div v-else>
                        <input
                          type="file"
                          class="form-controls"
                          id="document"
                          @change="onFileChangeCV($event, counter)"
                        />
                        <a @click="founder.editCv = !founder.editCv">Cancel</a>
                        <div class="text-secondary small">
                          Brief CV or Biography (Please attach separate sheets if necessary)
                        </div>
                      </div>
                    </div> -->
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
                    :disabled="readonly"
                  />

                  <div class="">
                    <div class="mb-2" v-for="(member, counter) in teamMembers" v-bind:key="counter">
                      <label for="duration" class="me-2">{{ counter + 1 }}. Member - Name:</label>
                      <input
                        type="text"
                        class="me-5 rounded"
                        v-model.lazy="member.Name"
                        required
                        :disabled="readonly"
                      />
                      <label for="duration" class="me-2">Role:</label>
                      <input
                        type="text"
                        class="me-2 rounded"
                        v-model.lazy="member.Role"
                        required
                        :disabled="readonly"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionLayout>
          </div>

          <div v-if="current == 3">
            <SectionLayout title="Part C: Objectives of the DLT Foundation">
              <LabelTextareaComponent
                label="Objectives of your DLT Foundation"
                footnote="Please provide a detailed description of the objectives of your DLT Foundation (max. 5000 characters)"
                type="text"
                v-model:field="objective"
                :required="true"
                :disabled="readonly"
              />
            </SectionLayout>
          </div>

          <div v-if="current == 4">
            <SectionLayout title="Part D: Specific Purpose">
              <LabelTextareaComponent
                label="Motivation of your DLT Foundation"
                footnote="If your DLT Foundation has been established for a specific purpose, please detail the purpose (max. 5000 characters)"
                type="text"
                v-model:field="motivation"
                :required="true"
                :disabled="readonly"
              />
            </SectionLayout>
          </div>

          <div v-if="current == 5">
            <SectionLayout title="Part E: Initial Assets">
              <LabelTextareaComponent
                label="Initial Assets of your DLT Foundation"
                footnote="Please provide a detailed description of the initial assets of your DLT Foundation (max. 5000 characters):"
                type="text"
                v-model:field="assets"
                :required="true"
                :disabled="readonly"
              />
            </SectionLayout>
            <button type="button" class="btn btn-primary" @click="submit()">Save and Submit</button>
          </div>
        </div>
      </div>

    </div>
  </NavFooterLayout>

</template>

<script lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import NavFooterLayout from '@/layouts/NavFooterLayout.vue'
import LabelInputComponent from '@/components/LabelInputComponent.vue'
import LabelTextareaComponent from '@/components/LabelTextareaComponent.vue'

import ApplicationViewMixin from './ApplicationViewMixin'

import { createProjectJob, getApplication } from '@/api'
import { organizationsStore } from '@/stores/organizations'
import { mapStores } from 'pinia'
import { updateApplication, getPreSignedPutUrl, getPreSignedGetUrl, uploadFile } from '@/api'
import type { NewProject } from '@/api'

export default {
  components: {
    NavFooterLayout,
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent
  },
  async created() {
    const projectInfo = await getApplication(this.$route.params.projectID as string)
    .then(
      (res) =>
        res!.Submissions.filter((item) => item.CreatedAt == res?.UpdatedAt)[0]
    )

    console.log('projectInfo', projectInfo)

    this.submissionAt = projectInfo?.CreatedAt
    this.status = projectInfo?.Status
    this.submissionId = projectInfo?.SubmissionID

    const mapping = {
      '1': 'e262d5c2-16f8-47a0-8c70-4019514d137b',
      '2': 'e262d5c2-16f8-47a0-8c70-4019514d137a',
      '3': 'e262d5c2-16f8-47a0-8c70-4019514d137c',
      '4': 'e262d5c2-16f8-47a0-8c70-4019514d137d',
      '5': 'e262d5c2-16f8-47a0-8c70-4019514d137e',
      '6': 'e262d5c2-16f8-47a0-8d10-4019514d137a'
    }
    if (!mapping[this.$route.params.projectID as keyof typeof mapping]) {
      this.name = projectInfo?.Content.Name ?? ''
      this.twitter = projectInfo?.Content.Twitter ?? ''
      this.website = projectInfo?.Content.Website ?? ''
      this.whitepaper = projectInfo?.Content.Whitepaper ?? ''
      this.whitepaperId = projectInfo?.Content.WhitepaperFile.ID ?? ''
      this.whitepaperFilename = projectInfo?.Content.WhitepaperFile.Filename ?? ''
      this.numFounders = projectInfo?.Content.NumFounders.toString() ?? '0'

      // this.founders = JSON.parse(JSON.stringify(projectInfo?.Content.Founders)) ?? []
      if (parseInt(this.numFounders) != projectInfo?.Content.Founders.length) {
        this.numFounders = projectInfo?.Content.Founders.length.toString()!
      }
      if (projectInfo?.Content.Founders) {
        this.founders = []
        for (let i = 0; i < projectInfo?.Content.Founders.length; i++) {
          this.founders.push({
            Name: projectInfo?.Content.Founders[i].Name ?? '',
            Position: projectInfo?.Content.Founders[i].Position ?? '',
            Kyc: projectInfo?.Content.Founders[i].Kyc ?? '',
            Twitter: projectInfo?.Content.Founders[i].Twitter ?? '',
            Linkedin: projectInfo?.Content.Founders[i].Linkedin ?? '',
            Ethereum: projectInfo?.Content.Founders[i].Ethereum ?? '',
            Email: projectInfo?.Content.Founders[i].Email ?? '',
            CV: projectInfo?.Content.Founders[i].CV ?? '',
            cvFile: null as File | null,
            CVFilename: projectInfo.Content.Founders[i].CVFilename ?? '',
            CVDwonloadLink: '',
            editCv: false,
            cvUploadLink: ''
          })
        }
      }

      this.numTeamMembers = projectInfo?.Content.NumMembers.toString() ?? '0'
      // this.teamMembers = projectInfo?.Content.Members ?? []
      if (parseInt(this.numTeamMembers) != projectInfo?.Content.Members.length) {
        this.numTeamMembers = projectInfo?.Content.Members.length.toString()!
      }
      if (projectInfo?.Content.Members) {
        this.teamMembers = []
        for (let i = 0; i < projectInfo?.Content.Members.length; i++) {
          this.teamMembers.push({
            Name: projectInfo?.Content.Members[i].Name ?? '',
            Role: projectInfo?.Content.Members[i].Position ?? ''
          })
        }
      }

      this.objective = projectInfo?.Content.Objective ?? ''
      this.motivation = projectInfo?.Content.Motivation ?? ''
      this.assets = projectInfo?.Content.Assets ?? ''

      const preSignedGetUrl: any = await getPreSignedGetUrl(
        this.whitepaperId,
        this.whitepaperFilename
      )
      this.whitepaperDownloadLink = preSignedGetUrl?.URL ?? ''

      for (let i = 0; i < this.founders.length; i++) {
        const preSignedGetUrl: any = await getPreSignedGetUrl(
          this.founders[i].CV,
          this.founders[i].CVFilename
        )
        this.founders[i].CVDwonloadLink = preSignedGetUrl?.URL ?? ''
      }

      // this.founders = JSON.parse(JSON.stringify(this.founders))
    } else {
      var projectGuid = mapping[this.$route.params.projectID as keyof typeof mapping]
      var project = this.organizationsStore.findProject(
        'e262d5c2-16f8-47a0-8c70-4019514b137c',
        projectGuid
      )
      this.name = project!.name
    }
  },
  data() {
    return {
      submissionId: '',
      submissionAt: '',
      current: 1,
      status: '',
      name: '',
      twitter: '',
      website: '',
      whitepaper: '',
      whitepaperFile: null as File | null,
      whitepaperFileLink: '',
      whitepaperDownloadLink: '',
      editWhitepaper: false,
      whitepaperId: '',
      whitepaperFilename: '',
      whitepaperUploadLink: '',
      readonly: false,
      teamMembers: [
        {
          Name: '',
          Role: ''
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
          cvFile: null as File | null,
          CVFilename: '',
          CVDwonloadLink: '',
          editCv: false,
          cvUploadLink: ''
        }
      ],
      objective: '',
      motivation: '',
      assets: '',
      numFounders: '',
      numTeamMembers: ''
    }
  },
  mixins: [ApplicationViewMixin],
  methods: {
    async onFileChange(e: any) {
      this.whitepaperFile = e.target.files[0]
      this.editWhitepaper = true
    },
    async onFileChangeCV(e: any, index: number) {
      this.founders[index].cvFile = e.target.files[0]
      this.founders[index].editCv = true
    },
    async submit() {
      if (this.whitepaperFile && this.editWhitepaper) {
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
        if (this.founders[i].cvFile && this.founders[i].editCv) {
          const preSignedPutUrlCV: any = await getPreSignedPutUrl()
          if (preSignedPutUrlCV) {
            const fileResp = await uploadFile(preSignedPutUrlCV.URL, this.founders[i].cvFile as any)
            if (fileResp.ok) {
              this.founders[i].CV = preSignedPutUrlCV.URL
              this.founders[i].cvUploadLink = preSignedPutUrlCV.URL
            }
          }
        }
      }
      let data = {
        Name: this.name,
        Twitter: this.twitter,
        Website: this.website,
        Whitepaper: this.whitepaper,
        WhitepaperFile: this.whitepaperFileLink,
        NumFounders: parseInt(this.numFounders) ? parseInt(this.numFounders) : 0,
        Founders: this.founders,
        NumMembers: parseInt(this.numTeamMembers) ? parseInt(this.numTeamMembers) : 0,
        Members: this.teamMembers,
        Objective: this.objective,
        Motivation: this.motivation,
        Assets: this.assets,
      } as unknown as NewProject

      console.log(data)
      console.log('this.$route.params.projectID', this.$route.params.projectID)
      console.log('this.submissionId', this.submissionId)
      const update = await updateApplication(this.$route.params.projectID as string, data)
      console.log('update', update)
      
      window.alert('Project updated successfully!')

      // const job = await createProjectJob(this.projectID)
      // console.log(job)
      this.$router.push('/projects/' + this.$route.params.projectID)
    }
  },
  computed: {
    ...mapStores(organizationsStore)
  },
  watch: {
    numFounders: function (val: string) {
      if (parseInt(val) > this.founders.length) {
        for (let i = this.founders.length; i < parseInt(val); i++) {
          this.founders.push({
            Name: '',
            Position: '',
            Kyc: '',
            Twitter: '',
            Linkedin: '',
            Ethereum: '',
            Email: '',
            CV: '',
            cvFile: null as File | null,
            CVFilename: '',
            CVDwonloadLink: '',
            editCv: false,
            cvUploadLink: ''
          })
        }
      } else {
        this.founders = this.founders.slice(0, parseInt(val))
      }
    },
    numTeamMembers: function (val: string) {
      if (parseInt(val) > this.teamMembers.length) {
        for (let i = this.teamMembers.length; i < parseInt(val); i++) {
          this.teamMembers.push({
            Name: '',
            Role: ''
          })
        }
      } else {
        this.teamMembers = this.teamMembers.slice(0, parseInt(val))
      }
    }
  }
}
</script>
