<template>
  <NavFooterLayout>
    <div class="container p-3 mb-5">
      <h1 class="mb-4"><strong>Create New Application</strong></h1>

      <div class="d-flex flex-wrap align-items-center align-items-start mb-3">
        <div v-for="(form, index) in forms">
          <div
            class="me-2 nav-item"
            @click="current = index + 1"
            :class="
              current != index + 1 && 'complete' + (index + 1)
                ? 'text-success'
                : current != index + 1 && 'complete' + (index + 1)
                ? 'text-secondary'
                : 'text-secondary'
            "
          >
            <i v-if="current == index + 1" class="bi bi-1-square-fill"></i>
            <i v-else class="bi bi-1-square"></i>
            <span class="ms-2 font-weight-bold">
              {{ form }}
            </span>
            <span><i class="bi bi-chevron-right ms-2"></i></span>
          </div>
        </div>
        <div class="ms-2 nav-item text-secondary" @click="current = 14">
          <i v-if="current == 14" class="bi bi-1-square-fill"></i>
          <i v-else class="bi bi-1-square"></i>
          <span class="ms-2">Submit</span>
        </div>
      </div>

      <div>
        <div v-if="current == 1">
          <RegistrationAgreement></RegistrationAgreement>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(1)"
          />
        </div>
        <div v-if="current == 2">
          <ComplianceTeam></ComplianceTeam>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(2)"
          />
        </div>
        <div v-if="current == 3">
          <Legal></Legal>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(3)"
          />
        </div>

        <div v-show="current == 4">
          <Overview></Overview>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(4)"
          />
        </div>

        <div v-show="current == 5">
          <ProjectDetails></ProjectDetails>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(5)"
          />
        </div>

        <div v-show="current == 7">
          <TechnicalDetails></TechnicalDetails>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(7)"
          />
        </div>

        <div v-show="current == 8">
          <RiskManagement></RiskManagement>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(8)"
          />
        </div>

        <div v-show="current == 10">
          <Acknowledgement></Acknowledgement>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(10)"
          />
        </div>
        <div v-show="current == 11">
          <Competitiveness></Competitiveness>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(11)"
          />
        </div>
        <div v-show="current == 12">
          <Investors></Investors>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(12)"
          />
        </div>
        <div v-show="current == 13">
          <COI></COI>
          <FormNavButtons
            :prevBtn="false"
            :saveBtn="true"
            :nextBtn="true"
            @save="save"
            @next="nextStep(13)"
          />
        </div>
        <div v-if="current == 14">
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
import { createProject, saveApplicationDraft, getPreSignedPutUrl, uploadFile } from '@/api'
import type { NewApplication } from '@/api'
import FormNavButtons from '@/components/FormNavButtons.vue'
import RegistrationAgreement from './forms/RegistrationAgreementForm.vue'
import ComplianceTeam from './forms/ComplianceTeamForm.vue'
import Legal from './forms/LegalForm.vue'
import Overview from './forms/OverviewForm.vue'
import ProjectDetails from './forms/ProjectDetailsForm.vue'
import TechnicalDetails from './forms/TechnicalDetailsForm.vue'
import RiskManagement from './forms/RiskManagementForm.vue'
import Acknowledgement from './forms/AcknowledgementForm.vue'
import Competitiveness from './forms/CompetitivenessForm.vue'
import Investors from './forms/InvestorForm.vue'
import COI from './forms/COIForm.vue'

export default {
  components: {
    NavFooterLayout,
    SectionLayout,
    LabelInputComponent,
    LabelTextareaComponent,
    FormNavButtons,
    RegistrationAgreement,
    ComplianceTeam,
    Legal,
    Overview,
    ProjectDetails,
    TechnicalDetails,
    RiskManagement,
    Acknowledgement,
    Competitiveness,
    Investors,
    COI
  },
  mounted() {},
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
      whitepaperFileId: '',
      codeFiles: File,
      codeFilesId: '',
      whitepaperUploadLink: '',
      codesUploadLink: '',
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
      numTeamMembers: '1',
      forms: [
        'Registration Agreement',
        'Compliance & Team',
        'Legal',
        'Overview',
        'Project Details',
        'Digital asset',
        'Technical Details',
        'Risk Management',
        'Volume & Community',
        'Acknowledgement',
        'Competitiveness',
        'Investors',
        'COI'
      ]
    }
  },
  computed: {
    complete1() {
      let info = this.name !== '' && this.twitter !== '' && this.website !== ''
      let founder = true
      if (this.founders.length != 0 && this.teamMembers.length != 0) {
        for (let i = 0; i < this.founders.length; i++) {
          if (this.founders[i].Name === '' || this.founders[i].Position === '') {
            founder = false
          }
        }
      }
      let teamMember = true
      if (this.teamMembers.length != 0) {
        for (let i = 0; i < this.teamMembers.length; i++) {
          if (this.teamMembers[i].Name === '' || this.teamMembers[i].Position === '') {
            teamMember = false
          }
        }
      }
      return info && founder && teamMember
    },
    complete2() {
      return this.objective !== '' && this.motivation !== ''
    },
    complete3() {
      return this.assets !== ''
    },
    complete4() {
      return (this.whitepaperFile as any).size > 0 && (this.codeFiles as any).size > 0
    },
    complete5() {
      return true
    },
    complete6() {
      return true
    },
    complete7() {
      return true
    },
    complete8() {
      return true
    },
    complete9() {
      return true
    },
    complete10() {
      return true
    },
    complete11() {
      return true
    },
    complete12() {
      return true
    },
    complete13() {
      return true
    },
    complete14() {
      return true
    }
  },
  methods: {
    async onFileChange(e: any) {
      this.whitepaperFile = e.target.files[0]
      console.log(this.whitepaperFile)
      console.log((this.$refs.whitepaper as any)?.files.length)
    },
    async onFileChangeCodes(e: any) {
      this.codeFiles = e.target.files[0]
      console.log((this.$refs.codes as any)?.files.length)
    },
    async onFileChangeCV(e: any, index: number) {
      console.log(e.target)
      this.founders[index].cvFile = e.target.files[0]
      console.log(this.founders[index].cvFile)
    },
    async prepareData() {
      if ((this.whitepaperFile as any).size > 0) {
        const preSignedPutUrl: any = await getPreSignedPutUrl()
        if (preSignedPutUrl) {
          const fileResp = await uploadFile(preSignedPutUrl.URL, this.whitepaperFile as any)
          if (fileResp.ok) {
            this.whitepaperFileId = preSignedPutUrl.ObjectID
            this.whitepaperUploadLink = preSignedPutUrl.URL
          }
        }
      }

      if ((this.codeFiles as any).size > 0) {
        const preSignedPutUrl: any = await getPreSignedPutUrl()
        if (preSignedPutUrl) {
          const fileResp = await uploadFile(preSignedPutUrl.URL, this.codeFiles as any)
          if (fileResp.ok) {
            this.codeFilesId = preSignedPutUrl.ObjectID
            this.codesUploadLink = preSignedPutUrl.URL
          }
        }
      }
      let data = {
        Name: this.name,
        Twitter: this.twitter,
        Website: this.website,
        Whitepaper: this.whitepaper,
        WhitepaperFile: {
          ID: this.whitepaperFileId,
          Filename: this.whitepaperFile.name,
          URL: this.whitepaperUploadLink
        },
        CodeFiles: {
          ID: this.codeFilesId,
          Filename: this.codeFiles.name,
          URL: this.codesUploadLink
        },
        NumFounders: parseInt(this.numFounders) ? parseInt(this.numFounders) : 0,
        Founders: this.founders,
        NumMembers: parseInt(this.numTeamMembers) ? parseInt(this.numTeamMembers) : 0,
        Members: this.teamMembers,
        Objective: this.objective,
        Motivation: this.motivation,
        Assets: this.assets
      } as unknown as NewApplication
      return data
    },
    async submit() {
      if (!this.complete1 || !this.complete2 || !this.complete3 || !this.complete4) {
        window.alert('Please fill in all required fields')
        return
      } else if (!(this.$refs.terms as any).checked) {
        window.alert('Please agree to the terms and conditions')
        return
      } else {
        let data = await this.prepareData()
        console.log(data)

        const resp = await createProject(data)
        console.log(resp)
        window.alert('Your response has been submitted')
        this.$router.push({ path: '/', query: { view: 'Applications' } })
      }
    },
    async save() {
      let data = await this.prepareData()

      console.log(data)

      const resp = await saveApplicationDraft(data)
      console.log(resp)
      window.alert('Your response has been saved')
      this.$router.push({ path: '/', query: { view: 'Applications' } })
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
        5: this.complete5,
        6: this.complete6,
        7: this.complete7,
        8: this.complete8,
        9: this.complete9,
        10: this.complete10,
        11: this.complete11,
        12: this.complete12,
        13: this.complete13,
        14: this.complete14
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
      if (this.founders.length > parseInt(val)) {
        this.founders.splice(parseInt(val), this.founders.length - parseInt(val))
      } else {
        while (this.founders.length < parseInt(val)) {
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
