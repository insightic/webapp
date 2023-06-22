import httpclient from "./httpclient"

export interface Project {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: string | null
    Name: string
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

export async function getProjects(): Promise<Project[]> {
    const resp = await httpclient.get<Project[]>(`/projects`)
    return resp?.payload || []
}

export async function getProject(id: number | string): Promise<Project | null> {
    const resp = await httpclient.get<Project>(`/projects/${id}`)
    return resp?.payload || null
}

export async function getProjectJobs(projectID: number | string): Promise<Job[]> {
    const resp = await httpclient.get<Job[]>(`/projects/${projectID}/jobs`)
    return resp?.payload || []
}

export async function createProjectJob(projectID: number | string): Promise<Job | null> {
    const resp = await httpclient.post<Job>(`/projects/${projectID}/jobs`)
    return resp?.payload || null
}