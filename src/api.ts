import httpclient from './httpclient'
import axios from 'axios'
import { type AxiosProgressEvent } from 'axios'

export interface FileObject {
  Filename: string
  ObjectID: string
  URL: string
}

export interface TextFilesObject {
  Text: string
  Files: Array<FileObject>
}

export interface RuleParamDescription {
  Name: string
  Type: string
  Description: string
  Required: boolean
}

export interface RuleDescription {
  Name: string
  Description: string
  Params: RuleParamDescription[]
}

export async function getRuleTemplates(): Promise<RuleDescription[]> {
  const resp = await httpclient.get<RuleDescription[]>(`/ruleTemplates`)
  return resp?.payload || []
}

export interface Rule {
  Name: string
  Description: string
  Method: string
  Params: { [key: string]: any }
}

export async function getRules(): Promise<Rule[]> {
  const resp = await httpclient.get<Rule[]>(`/rules`)
  return resp?.payload || []
}

export async function createRule(rule: Rule) {
  await httpclient.post(`/rules`, rule)
}

export async function getPreSignedPutUrl(): Promise<{ ObjectID: string; URL: string } | null> {
  const data = await httpclient.post<{ ObjectID: string; URL: string }>(`/preSignedPut`)
  return data?.payload || null
}

export async function getPreSignedGetUrl(
  id: string,
  filename: string
): Promise<{ URL: string } | null> {
  const body = { ObjectID: id, FileName: filename }
  const data = await httpclient.post<{ URL: string }>(`/preSignedGet`, body)
  return data?.payload || null
}

export async function getPreSignedPutPublic(extension?: string): Promise<{ GetURL: string;  ObjectID: string; URL: string } | null> {
  const url = extension ? `/preSignedPutPublic?extension=${extension.toLowerCase()}` : `/preSignedPutPublic`
  const data = await httpclient.post<{ GetURL: string; ObjectID: string; URL: string }>(url)
  return data?.payload || null
}

export async function uploadFile(
  url: string,
  file: File,
  abortController?: AbortController,
  onUploadProgress?: (evt: AxiosProgressEvent) => void
) {
  return await axios.put(url, file, {
    signal: abortController?.signal,
    onUploadProgress: (evt) => {
      if (onUploadProgress) onUploadProgress(evt)
    }
  })
}

export interface ProjectContent {
  Name: string
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  Twitter: string
  Website: string
  Whitepaper: string
  WhitepaperFile: S3File
  CodeFiles: S3File
  NumFounders: number
  Founders: Founder[]
  NumMembers: number
  Members: Member[]
  Objective: string
  Motivation: string
  Assets: string
}

export interface CodeValidationResult {
  id: string
  title: string
  description: string
  code: string
  whitepaper: string
  pass: string
}

export interface Submission {
  Content: { [key: string]: any}
  SubmissionID: string
  ApplicationID: string
  Results: { CodeValidation: CodeValidationResult[] }
  Status: string
  CreatedAt: string
}

export interface Application {
  ID: string
  AccountID: string
  ApplicationName: string
  Submissions: Submission[]
  Status: string
  CreatedAt: string
  UpdatedAt: string
  DataVersion: string
}

export interface Applications {
  AccountID: string
  ActiveSubmissionID: string
  ApplicationID: string
  ApplicationName: string
  CreatedAt: string
  DeletedAt: string
  ID: number
  LogoURL: string
  OneLiner: string
  Website: string
  UpdatedAt: string
}

export interface Founder {
  Name: string
  Position: string
  Kyc: string
  Twitter: string
  Linkedin: string
  Ethereum: string
  Email: string
  CV: string
  CVFilename: string
}

export interface Member {
  Name: string
  Position: string
}

export interface S3File {
  ID: string
  Filename: string
  FileLink: string
}

export async function createApplication(): Promise<Application | null> {
  const resp = await httpclient.post<Application>(`/applications`)
  return resp?.payload || null
}

// submit new draft application
export async function submitApplicationDraft(project: string): Promise<string> {
  const resp = await httpclient.post<string>(`/applications/drafts`, project)
  return resp?.payload || ''
}

// save new application without any submission
export async function saveApplicationDraft(
  project: any
): Promise<{ applicationID: string; submissionID: string } | null> {
  const resp = await httpclient.post<{ applicationID: string; submissionID: string }>(
    `/applications/drafts`,
    project
  )
  return resp?.payload || null
}

export async function getApplications(): Promise<Applications[] | null> {
  const resp = await httpclient.get<Applications[]>(`/applications`)
  return resp?.payload || null
}

export async function getApplication(id: number | string): Promise<Application | null> {
  const resp = await httpclient.get<Application>(`/applications/${id}`)
  return resp?.payload || null
}

export async function updateApplication(
  id: number | string,
  project: {}
): Promise<Application | null> {
  const resp = await httpclient.put<Application>(`/applications/${id}`, project)
  return resp?.payload || null
}

export async function deleteApplication(id: number | string): Promise<any | null> {
  const resp = await httpclient.delete<any>(`/applications/${id}`)
  return resp?.payload || null
}

export async function createSubmission(applicationID: number | string, data: { [key:string]: any}): Promise<Submission | null> {
  const resp = await httpclient.post<Submission>(`/applications/${applicationID}/submissions`, data)
  return resp?.payload || null
}

export async function updateSubmission(applicationID: number | string, submissionID: number | string, data: { [key:string]: any}): Promise<Submission | null> {
  const resp = await httpclient.put<Submission>(`/applications/${applicationID}/submissions/${submissionID}`, data)
  return resp?.payload || null
}


// when there is application and submit submission draft
export async function submitSubmissionDraft(
  applicationID: number | string,
  submissionID: number | string,
  project: {}
): Promise<Application | null> {
  const resp = await httpclient.post<Application>(
    `/applications/${applicationID}/submissions/${submissionID}/submit`,
    project
  )
  return resp?.payload || null
}

export async function deleteSubmission(
  applicationID: number | string,
  submissionID: number | string
): Promise<any | null> {
  const resp = await httpclient.delete<any>(
    `/applications/${applicationID}/submissions/${submissionID}`
  )
  return resp?.payload || null
}

export interface Job {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  ProjectID: number
  Status: string
  RulesCount: number
  RulesPassed: number
  RulesFailed: number
  RulesSkipped: number
}

export async function getProjectJobs(projectID: number | string): Promise<Job[]> {
  const resp = await httpclient.get<Job[]>(`/applications/${projectID}/jobs`)
  return resp?.payload || []
}

export async function createProjectJob(projectID: number | string): Promise<Job | null> {
  const resp = await httpclient.post<Job>(`/applications/${projectID}/jobs`)
  return resp?.payload || null
}

export async function getZanScore(address: string): Promise<number | undefined> {
  const resp = await axios.post(`https://staging-api.insightic.io/kyt/score`, {
    objectId: `0x${address}`
  })
  return resp?.data?.data?.score?.riskScore
}

export interface JobRunResult {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  JobID: number
  RuleID: number
  RuleName: string
  RuleDescription: string
  RuleParams: { [key: string]: any }
  Status: string
  ErrorMessage: string
  Output: string
}

export async function getJobRunResults(
  projectID: number | string,
  jobID: number | string
): Promise<JobRunResult[]> {
  const resp = await httpclient.get<JobRunResult[]>(
    `/applications/${projectID}/jobs/${jobID}/results`
  )
  return resp?.payload || []
}

export interface AssessmentResultsItem {
  title: string
  information: string
  dataReceived: string
  status: string
}

export interface AssessmentResultsFounder {
  name: string
  item: {
    founder: string
    data: AssessmentResultsItem[]
  }[]
}

export interface AssessmentResults {
  name: string
  item: AssessmentResultsItem[]
}

export async function getAssessmentResults(
  applicationID: number | string
): Promise<AssessmentResults[] | AssessmentResultsFounder[]> {
  const resp = await httpclient.get<AssessmentResults[] | AssessmentResultsFounder[]>(
    `/applications/${applicationID}/assessment`
  )
  return resp?.payload || []
}

export interface PeopleInfo {
  name: string
  birthday: string
  cv: FileObject
  address: string
  twitter: string
  github: string
  linkedin: string
  score: string
}

export interface filesInfo {
  name: string
  objectID: string
}

export interface AccountInformation {
  AccountUUID: string,
  CreatedAt: string,
  DeletedAt: string,
  Email: string,
  FName: string,
  ID: number,
  LName: string,
  PhoneNumber: string,
  UpdatedAt: string,
  Username: string
}

export interface subAccountInformation {
  ID: number,
  CreatedAt: string,
  UpdatedAt: string,
  DeletedAt: string,
  MainAccountID: number,
  MainAccountUUID: string,
  AccountUUID: string,
  Username: string
}

export async function getAccount(): Promise<AccountInformation | null> {
  const resp = await httpclient.get<AccountInformation>(`/accounts`)
  return resp?.payload || null
}

export async function getSubAccount(mainAccountUUID: string | undefined): Promise<subAccountInformation[]> {
  const resp = await httpclient.get<subAccountInformation[]>(`/accounts/${mainAccountUUID}/subaccounts`)
  return resp?.payload || []
}

export async function addSubAccount(mainAccountUUID: string | undefined, subAccountInfo: string): Promise<subAccountInformation[]> {
  const resp = await httpclient.post<subAccountInformation[]>(`/accounts/${mainAccountUUID}/subaccounts`, subAccountInfo)
  return resp?.payload || []
}

export async function deleteSubAccount(mainAccountUUID: string | undefined, subAccountUUID: string | undefined): Promise<any | null> {
  const resp = await httpclient.delete<any | null>(`/accounts/${mainAccountUUID}/subaccounts/${subAccountUUID}/delete`)
  return resp?.payload || []
}

