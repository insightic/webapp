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
                    url: "https://biswap.org",
                    author: "John Doe",
                    rating: "B-",
                    description: "BiSwap LP is a liquidity pool for the BiSwap DEX",
                    tags: ["DEX", "Liquidity Pool"],
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
                    props: [
                        {
                            title: "Business Model Analysis",
                            props: [
                                {
                                    component: "PropDisplayCard",
                                    title: "Business model & Value Proposition",
                                    text: "Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",
                                    tags: ["Business Model", "Value Proposition"],
                                    regulations: [
                                        {
                                            text: "ref1",
                                            href: "https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"
                                        },
                                        {
                                            text: "ref2",
                                            href: "https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"
                                        }
                                    ]
                                },
                                {
                                    component: "PropDisplayCard",
                                    title: "Customer Segments",
                                    text: "Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses. Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. Flash loans applier. Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."
                                }
                            ],
                        },
                        {
                            title: "DAO Governance Analysis",
                        },
                        {
                            title: "On-Chain Data Analysis",
                        },
                        {
                            title: "Team Background Analysis",
                            props: [
                                {
                                    component: "PropDisplayCard",
                                    title: "On-Chain Analysis",
                                    text: "Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi."
                                },
                                {
                                    component: "PropDisplayCard",
                                    title: "Twitter Analysis",
                                    text: "Retail investors who need to swap tokens Institutiona funds who conduct AMM business VASPs who IDO"
                                },
                                {
                                    component: "PropDisplayCard",
                                    title: "LinkedIn Analysis",
                                    text: "Retail investors who need to swap tokens Institutiona funds who conduct AMM business VASPs who IDO"
                                }
                            ]
                        },
                    ]
                },
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
                {
                    guid: "e262d5c2-16f8-47a0-8c70-4019514d137e",
                    logo: "/webapp/logos/eulerfinance.png",
                    name: "Euler Finance",
                    url: "https://euler.finance",
                    author: "John Doe",
                    rating: "B-",
                    description: "Euler Finance is a DeFi protocol",
                    tags: ["DeFi", "NFT"],
                    status: "In Progress",
                    dueAt: "2023-05-25T00:00:00.000Z",
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