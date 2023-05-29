import BSWToken from "./contracts/BSWToken.sol.txt?raw";
import BiswapERC20 from "./contracts/BiswapERC20.sol.txt?raw";
import BiswapFactory from "./contracts/BiswapFactory.sol.txt?raw";
import BiswapPair from "./contracts/BiswapPair.sol.txt?raw";

export default {
    guid: "e262d5c2-16f8-47a0-8c70-4019514d137a",
    logo: "/webapp/logos/biswap.jpeg",
    name: "BiSwap LP",
    url: "https://biswap.org",
    author: "John Doe",
    rating: "B-",
    description: "BiSwap LP is a liquidity pool for the BiSwap DEX",
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
    assessment: {
        contracts: {
            "BSWToken.sol": BSWToken,
            "BiswapERC20.sol": BiswapERC20,
            "BiswapFactory.sol": BiswapFactory,
            "BiswapPair.sol": BiswapPair
        }
    }
}