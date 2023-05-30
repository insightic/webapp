import Allegiance from './contracts/Allegiance.sol.txt?raw'
import CaveGame from './contracts/CaveGame.sol.txt?raw'
import FarmerGem from './contracts/FarmerGem.sol.txt?raw'
import IControllable1155 from './contracts/IControllable1155.sol.txt?raw'

export default {
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
    overviewView: [
        {
            title: "Business Model Analysis",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "Business model & Value Proposition",
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
                    title: "Customer Segments",
                    text: "Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"
                }
            ],
        },
        {
            title: "Social Media Analysis",
            props: [
                {
                    component: "PropDisplayCard",
                    title: "Twitter Analysis",
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
                    title: "Blog Analysis",
                    text: "Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"
                },
                // {
                //     component: "PropDisplayKeyValue",
                //     title: "Governance Monitoring",
                //     values: [
                //         {
                //             key: "Number of Pools",
                //             value: "1555"
                //         },
                //         {
                //             key: "TVL",
                //             value: "$113,934"
                //         },
                //         {
                //             key: "Changes",
                //             value: "-11.42%"
                //         }
                //     ]
                // },
                // {
                //     component: "PropDisplayTable",
                //     title: "Important Events",
                //     headers: ["Event", "Status", "Date"],
                //     rows: [
                //         ["Contract Upgrades (eIP 14)", "SUCCEEDED", "Aug 12, 2022"],
                //         ["Move All Asset Price Oracles to Chainlink", "SUCCEEDED", "Sep 5, 2022"],
                //         ["Update the Interest Rate Model", "SUCCEEDED", "Feb 19, 2023"]
                //     ]
                // }
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
                            value: "3,234,132"
                        },
                        {
                            key: "7 Days Volume",
                            value: "$76,261,658"
                        },
                        {
                            key: "24 Hrs Volumne",
                            value: "$5,291,480"
                        },
                        {
                            key: "Changes",
                            value: "-61.71%"
                        }
                    ]
                },
                {
                    component: "PropDisplayKeyValue",
                    title: "Customer Persona",
                    values: [
                        {
                            key: "Unique Address",
                            value: "1,2888,378"
                        },
                        {
                            key: "Bot Rate",
                            value: "21%"
                        },
                        {
                            key: "Retails / Total (volume)",
                            value: "26%"
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
        },
    ],
    assessmentView: {
        contracts: {
            "Allegiance.sol": Allegiance,
            "CaveGame.sol": CaveGame,
            "FarmerGem.sol": FarmerGem,
            "IControllable1155.sol": IControllable1155
        }
    },
    actionsView: {
        actions: [
            {
                title: 'Require 1 or more security audit report',
                text: 'Suggest the VASP to submit at least another security audit report within 45 days...',
                type: 'danger'
            },
            {
                title: 'Code has not been updates for long time',
                text: 'Suggest the VASP to link Github account or submit a new code base.',
                type: 'warn'
            },
            {
                title: 'Risky wallets interaction',
                text: 'The deployed contract has attracted many newly wallets. Require VASP to validate...',
                type: 'primary'
            },
            {
                title: 'Code has high similarity to Uniswap',
                text: 'Suggest the VASP to further clarify the differences for not violating Business S...',
                type: 'danger'
            },
            {
                title: 'High botting rate',
                text: "Suggest to review the VASP's solution on bot detection and IP restriction.",
                type: 'warn'
            },
            {
                title: 'Core contract has been modified recently',
                text: 'Dangerous to update the core smart contract code. The audit reports may not be s...',
                type: 'primary'
            },
            {
                title: 'Orderbook Spoofing',
                text: 'There is a high chance that the order book design has no restriction on spoofing...',
                type: 'danger'
            }
        ],
        tasks: [
            {
                title: 'Require 1 or more security audit report',
                text: 'Suggest the VASP to submit at least another security audit report within 45 days...',
                type: 'danger'
            },
            {
                title: 'Code has not been updates for long time',
                text: 'Suggest the VASP to link Github account or submit a new code base.',
                type: 'warn'
            },
            {
                title: 'Risky wallets interaction',
                text: 'The deployed contract has attracted many newly wallets. Require VASP to validate...',
                type: 'primary'
            }
        ]
    }
}