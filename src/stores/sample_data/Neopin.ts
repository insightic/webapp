export default {
    guid: "e262d5c2-16f8-47a0-8d10-4019514d137a",
    logo: "/webapp/logos/neopin.png",
    name: "Neopin",
    url: "https://biswap.org",
    author: "John Doe",
    rating: "B",
    description: "Neopin is a liquidity pool for the BiSwap DEX",
    tags: ["P2P Trading", "Deposits"],
    status: "In Progress",
    dueAt: "2023-05-25T00:00:00.000Z",
    overview: [
        {
            title: "Business Model Analysis",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "Business model & Value Proposition",
                    text: "NEOPIN is a hybrid financial platform blending centralized finance (CeFi) and decentralized finance (DeFi) to connect traditional finance and Web3 markets. By leveraging the stability, security, and regulatory compliance of CeFi and the transparency and accessibility of DeFi, NEOPIN aims to resolve trust and security issues present in both financial sectors. The platform uses its native NEOPIN token (NPT) and allows users to participate in liquidity pools, earning rewards for their contributions through features like staking, swap, and yield farming. NEOPIN is also exploring additional products, including Play-to-Earn games, Stake-to-Earn, Mine-to-Earn, and NFT services, while prioritizing security and regulatory compliance with systems like KYC and AML.",
                    tags: ["DeFi", "Wallet", "Staking", "Multi-chain"],
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
                    title: "Innovation Analysis",
                    text: "Neopin's approach, focusing predominantly on standard token staking, appears to lack the innovative edge often seen in leading blockchain projects. This could limit their competitiveness in a rapidly evolving industry where novelty often drives user adoption and market value."
                },
                {
                    component: "PropDisplayCard",
                    title: "Customer Segments",
                    text: "<ol><li>New crypto adopters, retail investors: Individuals who have an interest in cryptocurrencies and digital assets. These people are tech-savvy and open to new financial innovations.</li><li>Compliance-focused entities: Companies, institutions, or individuals that prioritize regulatory compliance in their crypto-related dealings, given NEOPIN's emphasis on KYC and AML procedures.</li><li>DeFi Users: Users already participating in decentralized finance who are seeking new platforms or methods to optimize their earnings.</li><li>Crypto Traders: Both short-term and long-term traders who are seeking a platform offering advanced trading functionalities and high liquidity.</li><li>Game developers and companies: developers and companies can launch Play-to-Earn games</li></ol>"
                }
            ],
        },
        {
            title: "On-Chain Data Analysis",
            props: [
                {
                    component: "PropDisplayTable",
                    title: "NPT Activities",
                    headers: ["Blockchain", "# TXs", "Total Tokens", "Risks"],
                    rows: [
                        ["Ethereum", "459", "166,459", "Arbitrage risks"],
                        ["Polygon", "3,119", "211,297", "Low diversity"],
                        ["Klaytn", "169,773", "1,000,000,000", "Operation risks"]
                    ]
                },
                {
                    component: "PropDisplayKeyValue",
                    title: "Transactions Categorization",
                    values: [
                        {
                            key: "Bridgeing ",
                            value: "60%"
                        },
                        {
                            key: "Providing LP",
                            value: "30%"
                        },
                        {
                            key: "Staking",
                            value: "5%"
                        },
                        {
                            key: "Others",
                            value: "5%"
                        }
                    ]
                }
            ]
        },
        {
            title: "Tokenomic",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "Summary",
                    text: "Neopin's tokenomic design, largely based on self-generated tokens and lacking a clear economic utility, raises key uncertainties about the system's stability. Its unclear strategies to address potential token depreciation may affect trust in the long term. Additionally, the prevalent use of its native token, NPT, as a reward mechanism could lead to inflation and devaluation if the token supply significantly exceeds demand."
                },
                {
                    component: "PropDisplayCard",
                    title: "Risks Analysis",
                    text: "The NPT token's undefined role poses risks to Neopin's stability and long-term value. Predictive models indicate potential threats without a strong consumption model.<br/><br/>While Neopin proposes strategies to stabilize token value, the lack of a detailed plan raises doubts about their long-term viability."
                }
            ],
        },
    ]
}