export default {
    guid: "e262d5c2-16f8-47a0-8c70-4019514d137e",
    logo: "/webapp/logos/eulerfinance.png",
    name: "Euler Finance",
    url: "https://euler.finance",
    author: "John Doe",
    rating: "B-",
    description: "Euler Finance is a DeFi protocol",
    tags: ["Loan", "P2P Trading", "Collateral Control", "Deposits", "Risk Management", "DAO", "Flashloan", "Price Oracle"],
    status: "In Progress",
    dueAt: "2023-05-25T00:00:00.000Z",
    overviewView: [
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
                    title: "Overview",
                    text: "Euler is a team of software engineers and quantitative analysts specialising in the research and development of financial applications."
                },
                {
                    component: "PropDisplayKeyValue",
                    title: "Team",
                    values: [
                        {
                            key: "CEO",
                            value: "Michael Bentley https://twitter.com/euler_mab"
                        },
                        {
                            key: "Marketing",
                            value: "Alicia Katz https://twitter.com/aliciakatz"
                        },
                        {
                            key: "Research",
                            value: "river0x https://twitter.com/river0x_"
                        },
                        {
                            key: "Engineer",
                            value: "Lee https://twitter.com/lmount_"
                        }
                    ]
                },
                {
                    component: "PropDisplayCard",
                    title: "LinkedIn Analysis",
                    text: "to be updated"
                }
                {
                    component: "PropDisplayCard",
                    title: "Twitter Analysis",
                    text: "to be updated"
                }
            ]
        }
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
                title: 'The DAO voting is highly centralized.',
                text: '10 votings events are led by a single address (> 50% weight). Request the VASP t...',
                type: 'danger'
            },
            {
                title: 'The DAO voting is highly centralized.',
                text: 'Request the VASP to conduct KYC for addresses, unless reducing their voting weig...',
                type: 'danger'
            },
            {
                title: 'Core contract has been modified recently.',
                text: 'Suggest the VASP to submit at least two security audit reports that covers the u...',
                type: 'danger'
            },
            {
                title: 'A new developer address added.',
                text: 'Request the VASP to conduct KYC for the new developer. No contract modification ...',
                type: 'warn'
            }
        ],
        tasks: [
            {
                title: 'Add security audit report',
                text: 'Suggest the VASP to submit at least another security audit report within 45 days...',
                type: 'danger'
            },
            {
                title: 'Update code and whitepapers',
                text: 'Suggest the VASP to link Github account or submit a new code base.',
                type: 'warn'
            },
            {
                title: 'Check the interaction of the wallets',
                text: 'The deployed contract has attracted many newly wallets. Require VASP to validate...',
                type: 'primary'
            }
        ]
    }
}