import httpclient from "./httpclient"

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

export interface Project {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: string | null
    Name: string
    Twitter: string
    Website: string
    Whitepaper: string
    // WhitepaperFile: string
    NumFounders: number
    Founders: Founder[]
    NumMembers: number
    Members: Member[]
    Objective: string
    Motivation: string
    Assets: string
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
}

export interface Member {
    Name: string
    Role: string
}

export interface NewProject {
    Name: string
    Twitter: string
    Website: string
    Whitepaper: string
    // WhitepaperFile: string
    NumFounders: number
    Founders: Founder[]
    NumMembers: number
    Members: Member[]
    Objective: string
    Motivation: string
    Assets: string
}


export async function createProject(project: NewProject): Promise<Project> {

    const resp = await httpclient.post<Project>(`/projects`, project)
    console.log(project)
    console.log("debug")
    console.log(resp?.payload)
    return resp?.payload || {} as Project
}

export async function getProjects(): Promise<Project[]> {
    const resp = await httpclient.get<Project[]>(`/projects`)
    return resp?.payload || []
}

export async function getProject(id: number | string): Promise<Project | null> {
    const resp = await httpclient.get<Project>(`/projects/${id}`)
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
    JobID: number
    RuleID: number
    RuleName: string
    RuleDescription: string
    RuleParams: { [key: string]: any }
    Status: string
    ErrorMessage: string
    Output: string
}

export async function getJobRunResults(projectID: number | string, jobID: number | string): Promise<JobRunResult[]> {
    const resp = await httpclient.get<JobRunResult[]>(`/projects/${projectID}/jobs/${jobID}/results`)
    return resp?.payload || []
}
