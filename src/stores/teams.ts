import { defineStore } from 'pinia'
import httpclient from '@/httpclient'

export interface Team {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  Name: string
}

export const teamsStore = defineStore('teams', {
  state: () => {
    return {
      teams: [] as Team[]
    }
  },
  actions: {
    async getTeams(): Promise<Team[]> {
      const resp = await httpclient.get<Team[]>('/teams')
      if (resp?.code === 200) {
        this.teams = resp.payload
        return this.teams
      }
      return this.teams
    }
  }
})
