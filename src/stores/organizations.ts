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
                    name: "BiSwap LP",
                    logo: "/webapp/logos/biswap.jpeg",
                    description: "BiSwap LP is a liquidity pool for the BiSwap DEX",
                    url: "https://biswap.org",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137b",
                    name: "Wolf Game",
                    logo: "/webapp/logos/wolfgame.jpeg",
                    description: "Wolf Game is a game where you play as a wolf",
                    url: "https://wolf.game",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137c",
                    name: "Pool Together",
                    logo: "/webapp/logos/pooltogether.jpeg",
                    description: "Pool Together is a lottery game",
                    url: "https://pooltogether.com",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137d",
                    name: "Olympus",
                    logo: "/webapp/logos/olympus.jpeg",
                    description: "Olympus is a stablecoin",
                    url: "https://olympusdao.finance",
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    author: "John Doe",
                },
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137e",
                    name: "Euler Finance",
                    logo: "/webapp/logos/eulerfinance.png",
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

    return { organizations }
})