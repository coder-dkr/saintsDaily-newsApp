import React, { Component,useEffect ,useState,useContext} from 'react'
import NewsCard from './NewsCard'
import { CateContext } from '../contexts/CategoryContext'


export default function NewCardsHolder ()  {
    const [newsData, setnewsData] = useState([
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Petar Jovanović",
      "title": "Bitcoin Price Prediction June 2024 – Here’s Why $100k May Be Next",
      "description": "Bitcoin price started this week relatively slowly, but BTC is still trading around $69k as we explore the bitcoin price… Continue reading Bitcoin Price Prediction June 2024 – Here’s Why $100k May Be Next\nThe post Bitcoin Price Prediction June 2024 – Here’s Wh…",
      "url": "https://readwrite.com/bitcoin-price-prediction-june-2024-heres-why-100k-may-be-next/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Bitcoin-price.jpg",
      "publishedAt": "2024-05-27T14:21:36Z",
      "content": "Bitcoin price started this week relatively slowly, but BTC is still trading around $69k as we explore the bitcoin price forecast and why $100k is “on the table” for June.\r\nBitcoin Price Forecast for … [+3622 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX",
      "description": "Prominent investment management firm VanEck announced that it is about to list Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF)… Continue reading VanEck Set to Launch Spot Bitcoin ETF on Australia’s ASX\nThe post VanEck Set to Launch Spot Bitcoi…",
      "url": "https://readwrite.com/vaneck-set-to-launch-spot-bitcoin-etf-on-australias-asx/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ea85a934-c8fc-4d65-9279-ff85bb79fbae.webp",
      "publishedAt": "2024-06-17T15:43:51Z",
      "content": "Prominent investment management firm VanEck announced that it is about to list\r\n Australia’s first spot Bitcoin (BTC) exchange-traded fund (ETF) listed on the domestic Australian Securities Exchange … [+1968 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin trades above supports, bank collapses are a good omen",
      "description": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…",
      "url": "https://readwrite.com/bitcoin-trades-above-supports-bank-collapses-are-a-good-omen/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp",
      "publishedAt": "2024-06-05T11:32:13Z",
      "content": "Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Olaleye Komolafe",
      "title": "Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocurrencies",
      "description": "TLDR   Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency. Market experts believe Ethereum (ETH) could dip… Continue reading Bitcoin and Ethereum Traders Flee Short-Term Bearish Trends, Rotating Funds To Alternative Cryptocur…",
      "url": "https://readwrite.com/bitcoin-and-ethereum-traders-flee-short-term-bearish-trends-rotating-funds-to-alternative-cryptocurrencies/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/Featured-Image-for-Rebel-Satoshi.jpg",
      "publishedAt": "2024-06-20T03:37:47Z",
      "content": "TLDR  \r\n<ul><li>Bitcoin (BTC) bears expect a prolonged negative trend for the leading cryptocurrency.</li><li>Market experts believe Ethereum (ETH) could dip below the $2,900 price mark.</li><li>Rebe… [+3670 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Ali Rees",
      "title": "Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin",
      "description": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its… Continue reading Japanese investment firm Metaplanet to sell $6m of bonds to buy Bitcoin\nThe post Japanese investment firm Metaplanet to sell $6m …",
      "url": "https://readwrite.com/investment-firm-metaplanet-to-sell-bonds-to-buy-bitcoin/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/buying-bitcoin-EOjGRyFSSt2kLr3TzvPf4A-yRhAHjLMRUO9G2dq9yUp4g.jpeg",
      "publishedAt": "2024-06-24T13:47:08Z",
      "content": "Japanese investment firm Metaplanet is planning to sell one billion yen in bonds to buy Bitcoin, as part of its long-term strategy.\r\nThe move, which was approved by the company’s board of directors t… [+1764 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Winklevoss twins donate $1M in Bitcoin to Trump’s campaign",
      "description": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s… Continue reading Winklevoss twins donate $1M in Bitcoin to Trump’s campaign\nThe post Winklevoss twins donate $1M in Bitcoin to Trump’s c…",
      "url": "https://readwrite.com/winklevoss-twins-donate-1m-in-bitcoin-to-trumps-campaign/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/GQij8RdakAU8Vor-min-scaled.jpeg",
      "publishedAt": "2024-06-21T16:32:19Z",
      "content": "Gemini CEO Tyler Winklevoss and his twin brother Cameron donated $1 million worth of Bitcoin (BTC) each to Donald Trump’s 2024 presidential campaign.\r\nThe presumptive Republican nominee’s campaign re… [+3507 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin and Ethereum ETNs listed on London Stock Exchange",
      "description": "The London Stock Exchange (LSE) has begun trading Bitcoin (BTC) and Ethereum (ETH) exchange-traded notes (ETNs), potentially paving the way… Continue reading Bitcoin and Ethereum ETNs listed on London Stock Exchange\nThe post Bitcoin and Ethereum ETNs listed o…",
      "url": "https://readwrite.com/bitcoin-and-ethereum-etns-listed-on-london-stock-exchange/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/1bf8e383-82ee-4843-b701-549b9475eb3f.webp",
      "publishedAt": "2024-05-28T13:11:16Z",
      "content": "The London Stock Exchange (LSE) has begun trading Bitcoin (BTC) and Ethereum (ETH) exchange-traded notes (ETNs), potentially paving the way for the UK to become Europe’s crypto hub, according to Alex… [+2638 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC",
      "description": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.… Continue reading BlackRock’s Bitcoin ETF overtakes Grayscale’s GBTC\nThe post BlackRock’s Bitcoin ETF overtakes Grayscal…",
      "url": "https://readwrite.com/blackrocks-bitcoin-etf-overtakes-grayscales-gbtc/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/7a340d79-5b46-4ae2-b016-80aff63a33cd.webp",
      "publishedAt": "2024-05-29T14:37:44Z",
      "content": "BlackRock’s spot Bitcoin (BTC) exchange-traded fund (ETF), IBIT, has overtaken Grayscale’s GBTC to become the largest product of its kind.\r\nAccording to data shared by the company, this shift occurre… [+2603 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin futures trading sets another record as crypto confidence climbs",
      "description": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked… Continue reading Bitcoin futures trading sets another record as crypto confidence climbs\nThe post Bitcoin futures trading sets an…",
      "url": "https://readwrite.com/bitcoin-futures-trading-sets-another-record-as-crypto-confidence-climbs/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cf5c9062-2edb-4cce-afff-1410e6d7acce.webp",
      "publishedAt": "2024-06-07T19:56:27Z",
      "content": "According to data shared by CoinGlass, Bitcoin (BTC) traders have set a new record for the highest-ever positions on BTC-tracked futures, with open interest surpassing $37.7 billion on Thursday. This… [+1929 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Alvin Hemedez",
      "title": "Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update",
      "description": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting… Continue reading Why Should You Invest in This Learn-to-Earn Bitcoin Alternative? – Cilinix Crypto Presale Update\nThe p…",
      "url": "https://readwrite.com/why-should-you-invest-in-this-learn-to-earn-bitcoin-alternative-cilinix-crypto-presale-update/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/cilinix-crypto-99btc-presale-update.jpg",
      "publishedAt": "2024-06-15T15:43:59Z",
      "content": "While Bitcoin is still struggling to reach the $70,000 level, retail investors are flocking to this Learn-to-Earn crypto presale, boosting it to $2 million.\r\nThe new 99Bitcoins (99BTC) token is perfo… [+4730 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin and Ethereum stable despite leverage flush",
      "description": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out… Continue reading Bitcoin and Ethereum stable despite leverage flush\nThe post Bitcoin and Ethereum stable despite leverage …",
      "url": "https://readwrite.com/bitcoin-and-ethereum-stable-despite-leverage-flush/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6fa97e87-0b76-4506-b3f6-2f1b460a8732.webp",
      "publishedAt": "2024-06-11T01:47:24Z",
      "content": "Over the weekend, Bitcoin (BTC) and Ethereum (ETH) showed little price movement following a significant $400 million leverage flush out on Friday, which led to a decline in open interest and trading … [+2043 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Louisiana passes pro-Bitcoin, anti-CBDC crypto bill",
      "description": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin… Continue reading Louisiana passes pro-Bitcoin, anti-CBDC crypto bill\nThe post Louisiana passes pro-Bitcoin, anti-CBDC crypto bill appeared fi…",
      "url": "https://readwrite.com/louisiana-passes-pro-bitcoin-anti-cbdc-crypto-bill/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/6f67013b-b8ea-44cb-a656-b32460a85347.webp",
      "publishedAt": "2024-06-26T13:29:43Z",
      "content": "On June 19, Louisiana quietly enacted House Bill 488, a crypto bill known as the “Blockchain Basics Act” or “Bitcoin Rights” bill.\r\nThe legislation, set to take effect on August 1, 2024, marks a sign… [+2341 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Australia’s first spot Bitcoin ETF launches on CBOE exchange",
      "description": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with… Continue reading Australia’s first spot Bitcoin ETF launches on CBOE exchange\nThe post Australia’s first spot Bi…",
      "url": "https://readwrite.com/australias-first-spot-bitcoin-etf-launches-on-cboe-exchange/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/018cda41-fe86-45f3-a035-4c3326ca569a.webp",
      "publishedAt": "2024-06-04T14:39:11Z",
      "content": "Monochrome Asset Management has launched Australia’s first spot Bitcoin Exchange Traded Fund (ETF) on the CBOE exchange, providing investors with a regulated framework to access Bitcoin (BTC).\r\nThe E… [+1568 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin ETF outflows reach $1.3B as price falls",
      "description": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as… Continue reading Bitcoin ETF outflows reach $1.3B as price falls\nThe post Bitcoin ETF outflows reach $1.3B as price fall…",
      "url": "https://readwrite.com/bitcoin-etf-outflows-reach-1-3b-as-price-falls/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/304c4991-be59-40e6-8e3c-bed299286dbc.webp",
      "publishedAt": "2024-06-25T16:32:14Z",
      "content": "Over the past two weeks, United States spot Bitcoin (BTC) exchange-traded funds (ETFs) have experienced outflows totaling $1.3 billion as Bitcoin’s price continues to fall.\r\nFarside Investors reports… [+2047 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Snowden backs Bitcoin after NYSE technical glitch",
      "description": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE),… Continue reading Snowden backs Bitcoin after NYSE technical glitch\nThe post Snowden backs Bitcoin after NYSE technical glitch appeared first on…",
      "url": "https://readwrite.com/snowden-backs-bitcoin-after-nyse-technical-glitch/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/16793c62-15b1-41b6-bf15-8a79580832f7.jpeg",
      "publishedAt": "2024-06-04T15:09:13Z",
      "content": "In the wake of a significant market disruption caused by a technical glitch on the New York Stock Exchange (NYSE), NSA whistleblower Edward Snowden has once again voiced his support for Bitcoin (BTC)… [+2574 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Slashdot.org"
      },
      "author": "EditorDavid",
      "title": "US Justice Department Indicts Creators of Bitcoin-Anonymizing 'Samouri' Wallet",
      "description": "America's Justice Department \"indicted the creators of an application that helps people spend their bitcoins anonymously,\" writes Reason.com:\n\n \nThey're accused of \"conspiracy to commit money laundering.\" Why \"conspiracy to commit\" as opposed to just \"money l…",
      "url": "https://slashdot.org/story/24/06/09/0126246/us-justice-department-indicts-creators-of-bitcoin-anonymizing-samouri-wallet",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2024-06-09T01:35:00Z",
      "content": "They provided a privacy tool that may have enabled other people to do illegal things with their bitcoin\r\nThey were literally going around telling folks that they were gray and black market friendly. … [+516 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Mt. Gox transfers $840M in Bitcoin as repayment deadline nears",
      "description": "The now-defunct crypto exchange Mt. Gox has moved 12,240 BTC, worth approximately $840 million at current prices, into a new… Continue reading Mt. Gox transfers $840M in Bitcoin as repayment deadline nears\nThe post Mt. Gox transfers $840M in Bitcoin as repaym…",
      "url": "https://readwrite.com/mt-gox-transfers-840m-in-bitcoin-as-repayment-deadline-nears/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/3021a8fe-94d0-416d-9322-6e1bbef13520.webp",
      "publishedAt": "2024-05-28T13:20:14Z",
      "content": "The now-defunct crypto exchange Mt. Gox has moved 12,240 BTC, worth approximately $840 million at current prices, into a new wallet address, according to data from blockchain analytics firm Arkham In… [+1473 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Bitcoin plunge below $63k triggers wave of liquidations",
      "description": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position… Continue reading Bitcoin plunge below $63k triggers wave of liquidations\nThe post Bitcoin plunge below $63k triggers wave …",
      "url": "https://readwrite.com/bitcoin-plunge-below-63k-triggers-wave-of-liquidations/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/65e6f8d5-ef84-4b5c-84b6-e3ac21cedb77.webp",
      "publishedAt": "2024-06-24T16:38:30Z",
      "content": "The cryptocurrency market faced significant turbulence as Bitcoin’s (BTC) value fell below $63,000, leading to a surge in long position liquidations.\r\nCoinGlass data shows\r\n that over the past 24 hou… [+2379 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ReadWrite"
      },
      "author": "Olaleye Komolafe",
      "title": "Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite",
      "description": "TLDR Bitcoin’s next move is set to be bullish amid ongoing consolidation. Bonk prepares for further upsides as demand picks… Continue reading Up or Down For Bitcoin Next? Bonk Sees Fresh Interest; Rebel Satoshi Arcade Becomes New Meme Favorite\nThe post Up or …",
      "url": "https://readwrite.com/up-or-down-for-bitcoin-next-bonk-sees-fresh-interest-rebel-satoshi-arcade-becomes-new-meme-favorite/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Rebel-Satoshi-Arcade.jpg",
      "publishedAt": "2024-05-31T08:31:13Z",
      "content": "TLDR\r\n<ul><li>Bitcoins next move is set to be bullish amid ongoing consolidation.</li><li>Bonk prepares for further upsides as demand picks up.</li><li>Rebel Satoshi Arcade is a new memecoin to watch… [+3933 chars]"
      },
      {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin falls as far right candidates gain in EU elections",
        "description": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank… Continue reading Bitcoin falls as far right candidates gain in EU elections\nThe post Bitcoin falls as far right candidates gain in EU elections appe…",
        "url": "https://readwrite.com/bitcoin-price-up-down-institutional-investment/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/01f80a58-cfc7-41a1-8477-31c99d2ed621.webp",
        "publishedAt": "2024-06-12T00:53:13Z",
        "content": "It was a risk-off day in Asia as concerns about the Chinese property market and potential changes to the Bank of Japan’s bond purchase program weighed on investor sentiment.\r\nBitcoin, the leading cry… [+2006 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?",
        "description": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in… Continue reading Bitcoin Price Prediction as BTC Hits $71k – Time To Buy?\nThe post Bitcoin Price Prediction as BTC Hits $71k – Time …",
        "url": "https://readwrite.com/bitcoin-price-prediction-as-btc-hits-71k-time-to-buy/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/binance-delist-2.jpeg",
        "publishedAt": "2024-06-05T14:55:20Z",
        "content": "Bitcoin’s price performance this week has been pretty solid, with the BTC price now hovering around $71,000. After trading in the $67,000 to $68,000 range for several weeks, this surge has reignited … [+4860 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Owen Good",
        "title": "Trump pledges more cryptocurrency support, putting distance between himself and Biden",
        "description": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the… Continue reading Trump pledges more cryptocurrency support, putting distance between himself and Biden\nThe post Trump pledges more cryptocur…",
        "url": "https://readwrite.com/trump-pledges-more-cryptocurrency-support-putting-distance-between-himself-and-biden/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/5gPabAcZQ829oWArrj6otg.jpg",
        "publishedAt": "2024-06-12T21:56:40Z",
        "content": "Donald Trump is doubling down on cryptocurrency support, saying he wants all Bitcoin going forward to be mined in the United States.\r\nIn an all-caps rant posted to Trumps Truth Social platform, the R… [+961 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin",
        "description": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after… Continue reading Ethereum Mass Institutional Adoption An Enormous Tailwind For Kai Cat Coin\nThe post Ethereum Mass Institutional Adopti…",
        "url": "https://readwrite.com/ethereum-mass-institutional-adoption-an-enormous-tailwind-for-kai-cat-coin/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Ethereum-1.jpg",
        "publishedAt": "2024-05-31T03:29:12Z",
        "content": "Ethereum is poised for a major rally, say many cryptocurrency market analysts. The second largest coin by market cap after Bitcoin, a recent May 14th report in Yahoo Finance said Ethereum among other… [+3994 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "Biden Veto Angers Crypto Industry as It Floods 2024 Election With Cash",
        "description": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And it’s just the latest move from a president who’s put himself firmly in the crosshairs of powerf…",
        "url": "https://gizmodo.com/biden-veto-angers-crypto-2024-election-trump-cash-money-1851516813",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/181d3375cd4f63fe5ded9cddb176293f.jpg",
        "publishedAt": "2024-06-03T20:40:00Z",
        "content": "President Joe Biden vetoed a resolution late Friday that passed through both the U.S. House and Senate and was widely supported by the cryptocurrency industry. And its just the latest move from a pre… [+4169 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Olaleye Komolafe",
        "title": "Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves Popular",
        "description": "TLDR Grayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.… Continue reading Grayscale Survey Highlights Bitcoin’s Significance In 2024 US Elections; as New Meme Proves …",
        "url": "https://readwrite.com/grayscale-survey-highlights-bitcoins-significance-in-2024-us-elections-as-new-meme-proves-popular/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/11/RECQ-Investment-potential.jpg",
        "publishedAt": "2024-06-12T16:01:05Z",
        "content": "TLDR\r\n<ul><li>Grayscale’s report reveals Bitcoin’s (BTC) growing influence in the 2024 elections, with more voters considering candidates’ stances on crypto.</li><li>Rebel Satoshi Arcade (RECQ) is a … [+4862 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fort Worth Star-Telegram"
        },
        "author": "Jaida Joyner",
        "title": "Elderly Texas woman withdrew $40K from bank for Bitcoin scam. Citizen, police intervened",
        "description": "A concerned bystander saw the woman depositing large amounts of money into a Bitcoin ATM. Here’s what the scammer did.",
        "url": "https://www.star-telegram.com/news/local/crime/article289280835.html",
        "urlToImage": "https://media.zenfs.com/en/fort_worth_star_telegram_mcclatchy_952/5c230a028d640b6d1938bc3cc8478e85",
        "publishedAt": "2024-06-14T18:50:11Z",
        "content": "A sharp-eyed citizens quick thinking saved an elderly North Texas woman from losing thousands of dollars in a Bitcoin scam, according to police.\r\nOfficers in White Settlement received a call from a c… [+1789 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.",
        "description": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu,… Continue reading Did Altcoin Hunters Miss Meme Coin Season? KAI Cat Says Not Even Close.\nThe post Did Altcoin Hunters Miss Meme Coin Season? KAI…",
        "url": "https://readwrite.com/did-altcoin-hunters-miss-meme-coin-season-kai-cat-says-not-even-close/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/KAI-Cat-Says-Not-Even-Close.jpg",
        "publishedAt": "2024-06-17T03:24:24Z",
        "content": "Meme coins were absolutely soaring earlier this year, but are down in the dumps in June. Altcoins like Shiba Inu, Dogwifhat, Bonk, Pepe, and PopCat were on top of the cryptocurrency leaderboards for … [+3105 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "MicroStrategy raises its bond sale to buy even more bitcoin",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_de419e95-ff2a-4ff9-98d8-6a6c716414a1",
        "urlToImage": null,
        "publishedAt": "2024-06-14T19:47:21Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "CoinDesk",
        "title": "Crypto Investment Products Saw Nearly $2B in Inflows Last Week: CoinShares",
        "description": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment...",
        "url": "https://finance.yahoo.com/video/crypto-investment-products-saw-nearly-163514266.html",
        "urlToImage": "https://media.zenfs.com/en/coindesk_75/6cb7f867b53c51edd13e932a55c899d7",
        "publishedAt": "2024-06-10T16:35:14Z",
        "content": "Crypto investment products took on nearly $2 billion in inflows last week, according to a new report from CoinShares. Bitcoin (BTC) led investment activity at over $1.97 billion of inflows, as U.S.-l… [+231 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Joe Biden campaign engages with crypto industry ahead of US election",
        "description": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is… Continue reading Joe Biden campaign engages with crypto industry ahead of US election\nThe post Joe Biden campaign en…",
        "url": "https://readwrite.com/joe-biden-campaign-engages-with-crypto-industry-ahead-of-us-election/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/91caa6fd-1910-48a0-ab60-fd16436f7829.webp",
        "publishedAt": "2024-05-30T15:51:02Z",
        "content": "President Joe Biden has begun seeking input from the the cryptocurrency industry amid the presidential race. This crypto-friendly approach is a significant departure from when Biden proposed imposing… [+2158 chars]"
        }
      ])
        
    const ApiKeyed = '952f24549e434ae7a323bee25cfd9399'

    const [page, setpage] = useState(1)

    const [pageitemNum, setpageitemNum] = useState(12)

    // const [sluglink, setsluglink] = useState('top-headlines?country=in&category=general&pageSize=12&page=1')


    const updateCategory = useContext(CateContext)

    // useEffect(()=>{
    //     async function FetchData(){
    //     let linkee = `https://newsapi.org/v2/top-headlines?country=in&category=${updateCategory}&pageSize=12&page=${page}&apiKey=${ApiKeyed}`
    //       let a = await fetch(linkee).then(
    //             response => response.json()
    //         ).then(
    //             data => {
    //                 setnewsData(data.articles);
    //                 // setpageitemNum(data.articles.length)
                    
    //             }
    //         )
            
    //         // let slugpre = linkee.split('v2/')[1]
    //         // setsluglink(slugpre.split('&apiKey')[0])
    //         // console.log(sluglink)
    //     }
    //     FetchData()
    // },[page,updateCategory]);

 
    return (
      <>
    <div className=" d-flex justify-content-center flex-wrap">

      {typeof newsData!=="undefined" ?
       newsData.map((news,i)=>(
          <NewsCard key={i} tonewsurl={news.url} newsimagesrc={news.urlToImage} newstitle={news.title} newstext={news.description} />
      )) : <>
        <img src="loading.gif" className='my-4 '/>
        

            </> 
         }

    </div>
    <div className="container w-100 d-flex gap-4 justify-content-lg-between my-4">
    <button onClick={()=>{
        setpage(page-1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    }} type="button" class="btn btn-dark" disabled={page === 0}>Previous</button>
    <button onClick={()=>{
        setpage(page+1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
        }} type="button" class="btn btn-dark" disabled={pageitemNum === 1} >Next</button>
    </div>

      </>
    )
  
}
