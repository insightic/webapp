import { ref } from 'vue'
import { defineStore } from 'pinia'

export const organizationsStore = defineStore('organizations', () => {
    const organizations = ref([
        {
            name: "Team 1",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137c",
            projects: [
                {
                    name: "BiSwap LP",
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137a",
                    description: "BiSwap LP is a liquidity pool for the BiSwap DEX",
                    url: "https://biswap.org",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    name: "Wolf Game",
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137b",
                    description: "Wolf Game is a game where you play as a wolf",
                    url: "https://wolf.game",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    name: "Pool Together",
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137c",
                    description: "Pool Together is a lottery game",
                    url: "https://pooltogether.com",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    name: "Olympus",
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137d",
                    description: "Olympus is a stablecoin",
                    url: "https://olympusdao.finance",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    name: "Euler Finance",
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137e",
                    description: "Euler Finance is a DeFi protocol",
                    url: "https://euler.finance",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                }
            ]
        },
        {
            name: "Team 2",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137d",
            projects: [
            ]
        },
        {
            name: "Team 3",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137e",
            projects: [
            ]
        },
    ])

    return { organizations }
})