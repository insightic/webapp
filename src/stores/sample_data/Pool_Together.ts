export default {
    guid: "e262d5c2-16f8-47a0-8c70-4019514d137c",
    logo: "/webapp/logos/pooltogether.jpeg",
    name: "Pool Together",
    url: "https://pooltogether.com",
    author: "John Doe",
    rating: "B-",
    description: "Pool Together is a lottery game",
    tags: ["Pool", "NFT"],
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
    ],
    assessmentView: {
        whitepaper: [
            {
                text: '✅ [dex011]',
                footer: 'Tokens symbol is BSW',
                desciptionTitle: 'Ticker Symbol: BSW',
                desciptionText: "contract BSWToken is BEP20('Biswap', 'BSW')"
            },
            {
                text: '✅ [dex012]',
                footer: 'BEP-20 standard',
                desciptionTitle: 'Chain: BNB Chain (BEP-20)',
                desciptionText: "Contract BSWToken is BEP20('Biswap', 'BSW')"
            },
            {
                text: '✅ [dex013]',
                footer: '700000000',
                desciptionTitle: 'Max Supply: 700 000 000 BSW tokens',
                desciptionText: 'The total token supply is 700,000,000'
            },
            {
                text: '❌ [dex014]',
                footer: 'Is ERC20 Token Standard Implemented?',
                desciptionTitle:
                    'No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem',
                desciptionText:
                    'Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface.'
            },
            {
                text: '✅ [dex015]',
                footer: 'How many types of Swap Fee Tiers are mentioned in code?',
                desciptionTitle: 'N.A.',
                desciptionText:
                    'There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1.'
            },
            {
                text: '✅ [dex016]',
                footer: 'What is the swap fee for a single token swap?',
                desciptionTitle:
                    'The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.',
                desciptionText: 'The default swap fee is 1 basis point (0.01%).'
            },
            {
                text: '✅ [dex017]',
                footer: 'How much of the swap fee will be taken by developers by _mintFee()?',
                desciptionTitle:
                    'Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.',
                desciptionText:
                    'The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract.'
            },
            {
                text: '✅ [dex018]',
                footer: 'Is the code Applicable to AMM?',
                desciptionTitle:
                    'The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.',
                desciptionText:
                    'Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection.'
            },
            {
                text: '✅ [dex019]',
                footer: 'Is trading pairs other than those with WBNB allowed?',
                desciptionTitle:
                    'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
                desciptionText:
                    'The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB.'
            },
            {
                text: '✅ [dex0110]',
                footer: 'Is the smart contracts capable to prevent frontrunning attacks?',
                desciptionTitle: 'N.A.',
                desciptionText:
                    'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'
            },
            {
                text: '✅ [dex0111]',
                footer: 'Is on-chain or off-chain price feeds used for the token prices?',
                desciptionTitle: 'N.A.',
                desciptionText:
                    'The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool.'
            },
            {
                text: '✅ [dex0112]',
                footer: 'Does the smart contract implement a decentralized governance mechanism?',
                desciptionTitle:
                    'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
                desciptionText:
                    'No, the Biswap smart contract does not implement a decentralized governance mechanism.'
            },
            {
                text: '✅ [dex0113]',
                footer:
                    'Is there a restriction on the maximum transaction amount or frequency for a given address?',
                desciptionTitle:
                    'No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.',
                desciptionText:
                    'The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address.'
            }
        ],
        regulations: [
            {
                text: '✅ [dex011]',
                footer: 'Tokens symbol is BSW',
                desciptionTitle: 'Ticker Symbol: BSW',
                desciptionText: "contract BSWToken is BEP20('Biswap', 'BSW')"
            },
            {
                text: '✅ [dex012]',
                footer: 'BEP-20 standard',
                desciptionTitle: 'Chain: BNB Chain (BEP-20)',
                desciptionText: "Contract BSWToken is BEP20('Biswap', 'BSW')"
            },
            {
                text: '✅ [dex013]',
                footer: '700000000',
                desciptionTitle: 'Max Supply: 700 000 000 BSW tokens',
                desciptionText: 'The total token supply is 700,000,000'
            },
            {
                text: '❌ [dex014]',
                footer: 'Is ERC20 Token Standard Implemented?',
                desciptionTitle:
                    'No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem',
                desciptionText:
                    'Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface.'
            }
        ],
        industryStandard: [
            {
                text: '✅ [dex011]',
                footer: 'Tokens symbol is BSW',
                desciptionTitle: 'Ticker Symbol: BSW',
                desciptionText: "contract BSWToken is BEP20('Biswap', 'BSW')"
            }
        ],
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