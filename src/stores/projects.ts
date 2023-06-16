import { defineStore } from 'pinia'
import httpclient from '@/httpclient'

export interface Project {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: string | null
    Name: string
}

export const projectsStore = defineStore('projects', {
    state: () => {
        return {
            projects: {} as { [key: number]: Project }
        }
    },
    actions: {
        async getProjects(): Promise<{ [key: number]: Project }> {
            const resp = await httpclient.get<Project[]>(`/projects`)
            if (resp?.code === 200) {
                for(const project of resp.payload) {
                    this.projects[project.ID] = project
                }
                return this.projects
            }
            return this.projects
        }
    }
})