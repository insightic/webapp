import httpclient from './httpclient'

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

export async function getPreSignedPutUrl() {
  const data = await httpclient.post(`/preSignedPut`)
  return data?.payload || null
}

export async function getPreSignedGetUrl(id: string, filename: string) {
  const body = { ObjectID: id, DesiredFilename: filename }
  const data = await httpclient.post(`/preSignedGet`, body)
  return data?.payload || null
}

export async function uploadFile(url: string, file: File) {
  const resp = await fetch(url, {
    method: 'PUT',
    body: file
  })
  return resp
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
  WhitepaperFile: WhitepaperFile
  NumFounders: number
  Founders: Founder[]
  NumMembers: number
  Members: Member[]
  Objective: string
  Motivation: string
  Assets: string
}

export interface Submission {
  Content: ProjectContent
  SubmissionID: string
  Results: JobRunResult[]
  Status: string
  CreatedAt: string
}

export interface Application {
  ID: string
  AccountID: string
  Submissions: Submission[],
  Status: string
  CreatedAt: string
  UpdatedAt: string
  DataVersion: string
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

export interface WhitepaperFile {
  ID: string
  Filename: string
  FileLink: string
}

export interface NewProject {
  Name: string
  Twitter: string
  Website: string
  Whitepaper: string
  WhitepaperFile: WhitepaperFile
  WhitepaperFileLink: string
  NumFounders: number
  Founders: Founder[]
  NumMembers: number
  Members: Member[]
  Objective: string
  Motivation: string
  Assets: string
}

export async function createProject(project: NewProject): Promise<Application> {
  const resp = await httpclient.post<Application>(`/projects`, project)
  return resp?.payload || ({} as Application)
}

export async function getProjects(): Promise<Application[]> {
  const resp = await httpclient.get<number[]>(`/projects`)
  const applicationList = [] as Application[]
  for (const applicationId of resp!.payload) {
    const application = await getProject(applicationId)
    if (application) {
      applicationList.push(application)
    }
  }
  return applicationList
}

export async function getProject(id: number | string): Promise<Application | null> {
  const resp = await httpclient.get<Application>(`/projects/${id}`)
  return resp?.payload || null
}

export async function updateProject(
  id: number | string,
  project: NewProject
): Promise<Application | null> {
  const resp = await httpclient.put<Application>(`/projects/${id}`, project)
  return resp?.payload || null
}

export async function deleteProject(id: number | string): Promise<any | null> {
  const resp = await httpclient.delete<any>(`/projects/${id}`)
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
  const resp = await httpclient.get<Job[]>(`/projects/${projectID}/jobs`)
  return resp?.payload || []
}

export async function createProjectJob(projectID: number | string): Promise<Job | null> {
  const resp = await httpclient.post<Job>(`/projects/${projectID}/jobs`)
  return resp?.payload || null
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
  const resp = await httpclient.get<JobRunResult[]>(`/projects/${projectID}/jobs/${jobID}/results`)
  return resp?.payload || []
}
