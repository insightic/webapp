import { ref } from 'vue'
import { defineStore } from 'pinia'
import BiSwap_LP from './sample_data/BiSwap_LP'
import Wolf_Game from './sample_data/Wolf_Game'
import Pool_Together from './sample_data/Pool_Together'
import Olympus from './sample_data/Olympus'
import EulerFinance from './sample_data/Euler_Finance'
import Neopin from './sample_data/Neopin'

export const organizationsStore = defineStore('organizations', () => {
  const organizations = ref([
    {
      guid: 'e262d5c2-16f8-47a0-8c70-4019514b137c',
      name: 'Team 1 - DeFi',
      projects: [BiSwap_LP, Wolf_Game, Pool_Together, Olympus, EulerFinance, Neopin]
    },
    {
      guid: 'e262d5c2-16f8-47a0-8c70-4019514b137d',
      name: 'Team 2 - Infra',
      projects: [BiSwap_LP, Wolf_Game, Pool_Together, Olympus, EulerFinance, Neopin]
    },
    {
      guid: 'e262d5c2-16f8-47a0-8c70-4019514b137e',
      name: 'Team 3 - DAO',
      projects: [BiSwap_LP, Wolf_Game, Pool_Together, Olympus, EulerFinance, Neopin]
    }
  ])

  const findOrganization = (organizationGuid: string | undefined) => {
    if (!organizationGuid) return undefined
    return organizations.value.find((organization) => organization.guid === organizationGuid)
  }

  const findProject = (organizationGuid: string | undefined, projectGuid: string | undefined) => {
    if (!organizationGuid || !projectGuid) return undefined
    const organization = findOrganization(organizationGuid)
    if (!organization) return undefined
    return organization.projects.find((project) => project.guid === projectGuid)
  }

  return { organizations, findOrganization, findProject }
})
