export default {
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
    overview: [
        {
            title: "Business Model Analysis",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "Business model & Value Proposition",
                    text: "Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",
                    tags: ["Loan", "P2P Trading", "Collateral Control", "Deposits", "Risk Management", "DAO", "Flashloan", "Price Oracle"],
                    regulations: [
                        {
                            text: "ref1",
                            href: "https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"
                        },
                        {
                            text: "ref2",
                            href: "https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"
                        }
                    ]
                },
                {
                    component: "PropDisplayCard",
                    title: "Customer Segments",
                    text: "Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.<br/>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. <br/><a href='https://chain.link/education-hub/flash-loans'>Flash loans</a> applier<br/>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."
                }
            ],
        },
        {
            title: "DAO Governance Analysis",
            props: [
                {
                    component: "PropDisplayKeyValue",
                    title: "Governance Monitoring",
                    values: [
                        {
                            key: "Number of Proposals",
                            value: "83"
                        },
                        {
                            key: "Smart Contract Changes",
                            value: "6 times"
                        },
                        {
                            key: "Grant Changes",
                            value: "12 times"
                        },
                        {
                            key: "Skewness of voting power",
                            value: "high"
                        }
                    ]
                },
                {
                    component: "PropDisplayTable",
                    title: "Important Events",
                    headers: ["Event", "Status", "Date"],
                    rows: [
                        ["Contract Upgrades (eIP 14)", "SUCCEEDED", "Aug 12, 2022"],
                        ["Move All Asset Price Oracles to Chainlink", "SUCCEEDED", "Sep 5, 2022"],
                        ["Update the Interest Rate Model", "SUCCEEDED", "Feb 19, 2023"]
                    ]
                }
            ]
        },
        {
            title: "On-Chain Data Analysis",
            props: [
                {
                    component: "PropDisplayKeyValue",
                    title: "Pools & Volume",
                    values: [
                        {
                            key: "Number of Pools",
                            value: "1555"
                        },
                        {
                            key: "TVL",
                            value: "$113,934"
                        },
                        {
                            key: "Changes",
                            value: "-11.42%"
                        }
                    ]
                },
                {
                    component: "PropDisplayKeyValue",
                    title: "Customer Persona",
                    values: [
                        {
                            key: "Unique Address",
                            value: "288,378"
                        },
                        {
                            key: "Bot Rate",
                            value: "31%"
                        },
                        {
                            key: "Retails / Total (volume)",
                            value: "16%"
                        },
                        {
                            key: "Retails / Total (Acct.)",
                            value: "86%"
                        }
                    ]
                }
            ]
        },
        {
            title: "Team Background Analysis",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "On-Chain Analysis",
                    text: "Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",
                    tags: ["P2P Trading", "Deposits"],
                    regulations: [
                        {
                            text: "https://www.1.com",
                            href: "https://www.1.com"
                        }
                    ]
                },
                {
                    component: "PropDisplayCard",
                    title: "Twitter Analysis",
                    text: "Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"
                },
                {
                    component: "PropDisplayCard",
                    title: "LinkedIn Analysis",
                    text: "Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"
                }
            ]
        }
    ]
}