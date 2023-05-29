import { ref } from 'vue'
import { defineStore } from 'pinia'
import BiSwap_LP from './sample_data/BiSwap_LP'
import EulerFinance from './sample_data/Euler_Finance'

export const organizationsStore = defineStore('organizations', () => {
    const organizations = ref([
        {
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137c",
            name: "Team 1",
            projects: [
                BiSwap_LP,
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137b",
                    logo: "/webapp/logos/wolfgame.jpeg",
                    name: "Wolf Game",
                    url: "https://wolf.game",
                    author: "John Doe",
                    rating: "B-",
                    description: "Wolf Game is a game where you play as a wolf",
                    tags: ["Game", "NFT"],
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137c",
                    logo: "/webapp/logos/pooltogether.jpeg",
                    name: "Pool Together",
                    url: "https://pooltogether.com",
                    author: "John Doe",
                    rating: "B-",
                    description: "Pool Together is a lottery game",
                    tags: ["Game", "NFT"],
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137d",
                    logo: "/webapp/logos/olympus.jpeg",
                    name: "Olympus",
                    url: "https://olympusdao.finance",
                    author: "John Doe",
                    rating: "B-",
                    description: "Olympus is a stablecoin",
                    tags: ["Stablecoin", "NFT"],
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                },
                EulerFinance
            ]
        },
        {
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137d",
            name: "Team 2",
            projects: [
            ]
        },
        {
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137e",
            name: "Team 3",
            projects: [
            ]
        },
    ])

    const findOrganization = (organizationGuid: string | undefined) => {
        if (!organizationGuid) return undefined
        return organizations.value.find(organization => organization.guid === organizationGuid)
    }

    const findProject = (organizationGuid: string | undefined, projectGuid: string | undefined) => {
        if (!organizationGuid || !projectGuid) return undefined
        const organization = findOrganization(organizationGuid)
        if (!organization) return undefined
        return organization.projects.find(project => project.guid === projectGuid)
    }

    return { organizations, findOrganization, findProject }
})