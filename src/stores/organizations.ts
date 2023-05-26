import { ref } from 'vue'
import { defineStore } from 'pinia'

export const organizationsStore = defineStore('organizations', () => {
    const organizations = ref([
        {
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137c",
            name: "Team 1",
            projects: [
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137a",
                    logo: "/webapp/logos/biswap.jpeg",
                    name: "BiSwap LP",
                    rating: "B-",
                    description: "BiSwap LP is a liquidity pool for the BiSwap DEX",
                    url: "https://biswap.org",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137b",
                    logo: "/webapp/logos/wolfgame.jpeg",
                    name: "Wolf Game",
                    rating: "B-",
                    description: "Wolf Game is a game where you play as a wolf",
                    url: "https://wolf.game",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137c",
                    logo: "/webapp/logos/pooltogether.jpeg",
                    name: "Pool Together",
                    rating: "B-",
                    description: "Pool Together is a lottery game",
                    url: "https://pooltogether.com",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137d",
                    logo: "/webapp/logos/olympus.jpeg",
                    name: "Olympus",
                    rating: "B-",
                    description: "Olympus is a stablecoin",
                    url: "https://olympusdao.finance",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137e",
                    logo: "/webapp/logos/eulerfinance.png",
                    name: "Euler Finance",
                    rating: "B-",
                    description: "Euler Finance is a DeFi protocol",
                    url: "https://euler.finance",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                }
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