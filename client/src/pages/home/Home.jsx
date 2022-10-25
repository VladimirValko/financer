import React, { useState, useEffect } from "react";
import NewsItem from "../../components/newsItem/NewsItem";
import TrendingCoins from "../../components/trengingCoins/TrendingCoins";
import TopCoinsStat from "../../components/topCoinsStat/TopCoinsStat";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";

const news = [
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: null,
    title:
      "Cryptoverse: After Merge, ether heads for a $20 billion Shanghai splurge - Reuters",
    description:
      "Cryptoverse: After Merge, ether heads for a $20 billion Shanghai splurge  Reuters",
    url: "https://www.reuters.com/technology/cryptoverse-after-merge-ether-heads-20-billion-shanghai-splurge-2022-09-20/",
    urlToImage:
      "https://www.reuters.com/resizer/UIjhCUJTz8MlNe4Bl9Yi99qEna0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HIDVAZOKRFI2JIH7BSDAMKEB2A.jpg",
    publishedAt: "2022-09-20T05:24:00Z",
    content:
      "Sept 20 (Reuters) - The Merge came, saw and conquered. Not that you'd guess from crypto prices.\r\nThe Ethereum blockchain's mega-upgrade finally went live on Sept. 15, moving it to a less energy-inten… [+4269 chars]",
  },
  {
    source: {
      id: null,
      name: "Techdirt",
    },
    author: "Dark Helmet",
    title: "EA Announces New Anti-Cheat Tech That Operates At The Kernel Level",
    description:
      "It seems anti-cheat technology is the new DRM. By that I mean that, with the gaming industry diving headfirst into the competitive online gaming scene, the concern over piracy has shifted into a concern over cheating making those online games less attractive …",
    url: "https://www.techdirt.com/2022/09/19/ea-announces-new-anti-cheat-tech-that-operates-at-the-kernal-level/",
    urlToImage:
      "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
    publishedAt: "2022-09-20T02:41:15Z",
    content:
      "from the red-flags dept\r\nIt seems anti-cheat technology is the new DRM. By that I mean that, with the gaming industry diving headfirst into the competitive online gaming scene, the concern over pirac… [+3587 chars]",
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: "Suvashree Ghosh",
    title: "Alameda to Repay $200 Million in Crypto to Bankrupt Voyager",
    description:
      "Crypto billionaire Sam Bankman-Fried’s Alameda Research will return about $200 million worth of Bitcoin and Ether it had borrowed from insolvent Voyager Digital Ltd., according to a court filing from Voyager.",
    url: "https://www.bloomberg.com/news/articles/2022-09-20/alameda-to-repay-200-million-in-crypto-to-bankrupt-voyager",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikRLNqYJIqHE/v1/1200x800.jpg",
    publishedAt: "2022-09-20T06:03:39Z",
    content:
      "Crypto billionaire Sam Bankman-Frieds \r\nAlameda Research will return about $200 million worth of Bitcoin and Ether it had borrowed from insolvent Voyager Digital Ltd., according to a court filing fro… [+207 chars]",
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: "Suvashree Ghosh",
    title: "SEC Suit Hints at Case for US Jurisdiction Over Ethereum Network",
    description:
      "The saga over cryptocurrency regulation took another twist courtesy of a comment buried in a Securities and Exchange Commission lawsuit that hints at a case for US jurisdiction over the Ethereum blockchain.",
    url: "https://www.bloomberg.com/news/articles/2022-09-20/sec-suit-hints-at-case-for-us-jurisdiction-over-ethereum-network",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWblpxpL0jF4/v0/1200x800.jpg",
    publishedAt: "2022-09-20T07:46:03Z",
    content:
      "The saga over cryptocurrency regulation took another twist courtesy of a comment buried in a Securities and Exchange Commission lawsuit that hints at a case for US jurisdiction over the Ethereum bloc… [+237 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "Pawan Nahar",
    title: "Bitcoin tops $19K; XRP, Solana & Ethereum zoom up to 10%",
    description:
      "All the top crypto tokens are trading higher. XRP rallied more than 10 per cent, whereas Solana and Ethereum jumped 5 per cent each. Bitcoin and Avalanche added 4 per cent each.",
    url: "https://economictimes.indiatimes.com/markets/cryptocurrency/crypto-prices-today-live-news-bitcoin-dogecoin-ethereum-shibha-inu-cryptocurrency-latest-updates-20-september-2022/articleshow/94316263.cms",
    urlToImage:
      "https://img.etimg.com/thumb/msid-94316255,width-1070,height-580,imgsize-157780,overlay-etmarkets/photo.jpg",
    publishedAt: "2022-09-20T04:02:54Z",
    content:
      "New Delhi: The crypto market moved back in to the green on Tuesday, with Bitcoin again topping the $19,000 mark, whereas Altcoins zoomed up to 10 per cent.\r\nRiskier asset class was back in flavour ah… [+1962 chars]",
  },
  {
    source: {
      id: "cbc-news",
      name: "CBC News",
    },
    author: "Nicole Brockbank",
    title:
      "Luxury cars seized from 23-year-old 'Crypto King' as investors try to recoup millions",
    description:
      'Two McLarens, two BMWs and a Lamborghini make up just a few of the $2 million worth of assets seized from 23-year-old Aiden Pleterski as his investors try to recoup millions of dollars they handed over to the self-described "Crypto King."',
    url: "https://www.cbc.ca/news/canada/toronto/luxury-cars-seized-crypto-king-investors-try-recoup-millions-1.6583982",
    urlToImage:
      "https://i.cbc.ca/1.6584122.1663261083!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_620/aiden-pleterski-private-jet.jpeg",
    publishedAt: "2022-09-20T08:00:00Z",
    content:
      "Two McLarens, two BMWs and a Lamborghini make up just a few of the $2 million worth of assets seized from a 23-year-old from Whitby, Ont., as his investors try to recoup millions of dollars they hand… [+7372 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Steven Zeitchik",
    title:
      "Disgraced crypto founder says he's not on the run. But no one knows where he is. - The Washington Post",
    description:
      "<ol><li>Disgraced crypto founder says he's not on the run. But no one knows where he is.  The Washington Post\r\n</li><li>South Korean prosecutors say Do Kwon ‘obviously on the run’, ask Interpol to issue red notice  TechCrunch\r\n</li><li>Do Kwon at Risk of an I…",
    url: "https://www.washingtonpost.com/business/2022/09/19/cryptocurrency-founder-do-kwon-red-notice/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NACK37RXHEI63OFPBICOLXB5WY.jpg&w=1440",
    publishedAt: "2022-09-20T04:31:00Z",
    content:
      "The person most closely associated with last springs crypto crash appears to be on the run after an arrest warrant was issued for him and investigators have asked for Interpols help to track him down… [+5041 chars]",
  },
  {
    source: {
      id: null,
      name: "PC Gamer",
    },
    author: "Hope Corrigan",
    title: "Crypto giveaway scam sites have tripled in a year",
    description:
      "Apparently a crypto giveaway isn't enough of a red flag on its own.",
    url: "https://www.pcgamer.com/crypto-giveaway-scam-sites-have-tripled-in-a-year/",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/QxRqQD5CR2sZLuD8k4RzyL-1200-80.jpg",
    publishedAt: "2022-09-20T05:01:38Z",
    content:
      "Crypto currencies of all varieties are notorious for being incredibly unpredictable and volatile. (opens in new tab) It's also deeply niche, and especially from the outside it's a difficult market to… [+2599 chars]",
  },
  {
    source: {
      id: null,
      name: "CoinDesk",
    },
    author: "James Rubin, Sam Reynolds",
    title:
      "First Mover Asia: Where in the World Is Do Kwon? Terra Co-Founder’s Absence Highlights the Complications of Extradition; Cryptos Climb Ahead of FOMC",
    description:
      'Kwon, who is no longer in Singapore, says he is not "on the run," although Korean authorities have asked Interpol to issue a "red notice" requesting his arrest; Taiwan is an unlikely hideout.',
    url: "https://www.coindesk.com/markets/2022/09/20/first-mover-asia-where-in-the-world-is-do-kwon-terra-co-founders-absence-highlights-the-complications-of-extradition-cryptos-climb-ahead-of-fomc/",
    urlToImage:
      "https://www.coindesk.com/resizer/kiZ9MhN_-VcxzVeBXFuj-pBmqps=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/BYBMXYOWRJD2FC4JWYSPAYTUJ4.jpg",
    publishedAt: "2022-09-20T00:15:25Z",
    content:
      "Good morning. Heres whats happening:\r\nPrices: Bitcoin, ether and other major cryptos see-saw as the next FOMC meeting nears.\r\nInsights: Where is Terraform Labs co-founder Do Kwon? Taiwan is an unlike… [+10151 chars]",
  },
  {
    source: {
      id: null,
      name: "Blogdumoderateur.com",
    },
    author: "Estelle Raffin",
    title:
      "Metaverse : les usages et facteurs de réussite pour les marques en 2022",
    description:
      "Stéphane Guerry, CEO de Havas Play, aborde les usages qui vont se développer dans le metaverse et les facteurs clés de réussite pour les marques.",
    url: "https://www.blogdumoderateur.com/metaverse-usages-marques-2022/",
    urlToImage:
      "https://f.hellowork.com/blogdumoderateur/2022/09/metaverse-interview-havas-play-1200x628.jpg",
    publishedAt: "2022-09-20T07:08:04Z",
    content:
      "Lors du salon Big Data &amp; AI Paris 2022 qui aura lieu les 26 et 27 septembre prochains, Stéphane Guerry sera un des speakers de la conférence intitulée : Le métavers, nouvelle frontière de la donn… [+7201 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Ranjeetha Pakiam, Chanyaporn Chanjaroen and Zheping Huang",
    title: "Chinese Crypto Tycoon-Backed Bitdeer Buys Asia’s ‘Fort Knox’",
    description:
      "(Bloomberg) -- Chinese crypto billionaire Jihan Wu is expanding into the physical asset space. Most Read from BloombergSouthwest Mexico Struck by 7.5...",
    url: "https://finance.yahoo.com/news/chinese-crypto-tycoon-backed-bitdeer-100835230.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/4wdjuwbIbG82XLrw9aAPog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/892db3f3bcb575314603b5af08883835",
    publishedAt: "2022-09-20T02:41:32Z",
    content:
      "(Bloomberg) -- Chinese crypto billionaire Jihan Wu is expanding into the physical asset space.\r\nMost Read from Bloomberg\r\nWus Bitdeer Technologies Holding Co. spent S$40 million ($28.4 million) buyin… [+2870 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Oliver Knight",
    title:
      "Crypto Market Maker Wintermute Hacked for $160M, OTC Services Unaffected",
    description:
      "Cryptocurrency market maker and liquidity provider Wintermute has lost $160 million in a hack relating to its DeFi business, according to a tweet from the...",
    url: "https://finance.yahoo.com/news/crypto-market-maker-wintermute-hacked-081559634.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/Iz7OCo08lnmdry_EWasrAw--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/caab0873cd7ecb5b34eecd38d058c4cb",
    publishedAt: "2022-09-20T08:15:59Z",
    content:
      "Whats going on in the markets lately? Since the start of this year, weve seen a prolonged bearish trend, and now a cycle of high volatility. Investors can be forgiven for feeling some confusion, or e… [+295 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Ranjeetha Pakiam, Chanyaporn Chanjaroen and Zheping Huang",
    title: "Chinese Crypto Tycoon-Backed Bitdeer Buys Asia’s ‘Fort Knox’",
    description:
      "(Bloomberg) -- Chinese crypto billionaire Jihan Wu is expanding into the physical asset space. Most Read from BloombergSouthwest Mexico Struck by 7.5...",
    url: "https://finance.yahoo.com/news/chinese-crypto-tycoon-backed-bitdeer-024132700.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/OpROTLlhx3rV2abXavQJ7A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/892db3f3bcb575314603b5af08883835",
    publishedAt: "2022-09-20T02:41:32Z",
    content:
      "(Bloomberg) -- Chinese crypto billionaire Jihan Wu is expanding into the physical asset space.\r\nMost Read from Bloomberg\r\nWus Bitdeer Technologies Holding Co. spent S$40 million ($28.4 million) buyin… [+2870 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Sam Reynolds",
    title: "Voyager Seeks to ‘Unwind’ Alameda Loan",
    description:
      "Alameda owes Voyager approximately $200 million in an outstanding crypto loan, from a line of credit that was worth $377 million before the market downturn.",
    url: "https://finance.yahoo.com/news/voyager-seeks-unwind-alameda-loan-040655340.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/7kgoD9sMUkWBt5ZMnY7mDQ--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/8ed07347ee5a1359bf4be18773b75f0b",
    publishedAt: "2022-09-20T04:06:55Z",
    content:
      "Voyager Digital has asked a federal bankruptcy court in New York for an order to unwind a loan it made to crypto quant trading firm Alameda Research that was largely denominated in crypto.<li>The loa… [+1055 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "James Rubin, Sam Reynolds",
    title:
      "First Mover Asia: Where in the World Is Do Kwon? Terra Co-Founder’s Absence Highlights the Complications of Extradition; Cryptos Climb Ahead of FOMC",
    description:
      'Kwon is no longer in Singapore, and Korean authorities have asked Interpol to issue a "red notice" requesting law enforcement to arrest him; Taiwan is an...',
    url: "https://finance.yahoo.com/news/first-mover-asia-where-world-001525973.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/756SWozNTu8enFvQzuWEog--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/c2d2486ecfda11498a631957f592b8b8",
    publishedAt: "2022-09-20T00:15:25Z",
    content:
      "Good morning. Heres whats happening:\r\nPrices: Bitcoin, ether and other major cryptos see-saw as the next FOMC meeting nears.\r\nInsights: Where is Terraform Labs co-founder Do Kwon? Taiwan is an unlike… [+10234 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "News Direct",
    title:
      "Huobi Global strikes deal with AstroPay to extend fiat-to-crypto payments in Latin America",
    description:
      "Huobi Global, one of the world’s leading cryptocurrency exchanges, has partnered with AstroPay, the online payment solution of choice for millions of users...",
    url: "https://finance.yahoo.com/news/huobi-global-strikes-deal-astropay-080923197.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/Ja1VjnwHKMtzXg2Ro7pB7Q--~B/aD0xNDQ7dz00Nzk7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/news_direct/70a2644f1aa1d900fb6264c364f805fa",
    publishedAt: "2022-09-20T08:09:23Z",
    content:
      "Brasília, Brazil --News Direct-- Huobi Global\r\nHuobi Global, one of the worlds leading cryptocurrency exchanges, has partnered with AstroPay, the online payment solution of choice for millions of use… [+3823 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Medha Singh and Lisa Pauline Mattackal",
    title:
      "Cryptoverse: After Merge, ether heads for a $20 billion Shanghai splurge",
    description:
      'The Ethereum blockchain\'s mega-upgrade finally went live on Sept. 15, moving it to a less energy-intensive "proof of stake" (PoS) system with hardly a hiccup...',
    url: "https://finance.yahoo.com/news/cryptoverse-merge-ether-heads-20-052422868.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/f8xu6uNb.EuORGu5Qs1KOA--~B/aD01MzQ7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/5c31d79e4eeb8ed8e5e45876bfdd3e9d",
    publishedAt: "2022-09-20T05:24:22Z",
    content:
      "By Medha Singh and Lisa Pauline Mattackal\r\n(Reuters) - The Merge came, saw and conquered. Not that you'd guess from crypto prices.\r\nThe Ethereum blockchain's mega-upgrade finally went live on Sept. 1… [+3885 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "MRHB DeFi",
    title:
      "MRHB and Gold & Silver Standard (GSS) Partner to Expand Halal DeFi Offerings with Tokenized Precious Metals",
    description:
      "MELBOURNE, Australia, Sept. 19, 2022 (GLOBE NEWSWIRE) -- MRHB.Network, a halal decentralized finance ecosystem, partners with Gold & Silver Standard (GSS...",
    url: "https://finance.yahoo.com/news/mrhb-gold-silver-standard-gss-014800176.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/HhGVQwozasJHC6gFEg9zJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDU4/https://media.zenfs.com/en/globenewswire.com/50c56c122fbfc965bf887da2ad1b59b5",
    publishedAt: "2022-09-20T01:48:00Z",
    content:
      "MELBOURNE, Australia, Sept. 19, 2022 (GLOBE NEWSWIRE) -- MRHB.Network\r\n, a halal decentralized finance ecosystem, partners with Gold &amp; Silver Standard\r\n (GSS), part of the Ainslie Bullion Group, … [+5678 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Pradipta Mukherjee",
    title:
      "India’s WazirX to delist USDC, apply auto convert to Binance’s stablecoin",
    description:
      "WazirX, India’s largest cryptocurrency exchange by trade volume, said it has stopped deposits of stablecoins USDC, USDP and TUSD, and will automatically...",
    url: "https://finance.yahoo.com/news/india-wazirx-delist-usdc-apply-043354286.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/PUwOS5GHsnHWEtpDK..TTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/forkast_news_articles_672/59860b808ab275dd4b38cb80d40d3e29",
    publishedAt: "2022-09-20T04:33:54Z",
    content:
      "WazirX, Indias largest cryptocurrency exchange by trade volume, said it has stopped deposits of stablecoins USDC, USDP and TUSD, and will automatically convert users existing balances to Binances USD… [+1157 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Akshay Chinchalkar",
    title:
      "Ether’s Outlook Darkens in Charts Capturing Hangover After the Merge",
    description:
      "(Bloomberg) -- The fanfare over a revamp of the Ethereum blockchain is still echoing across the cryptoverse but that’s doing little to stem a slide in...",
    url: "https://finance.yahoo.com/news/ether-outlook-darkens-charts-capturing-041940444.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/l54Bycy8QwBFrX2erLhJqg--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/d0768b54911704d74c8aaa800e91b211",
    publishedAt: "2022-09-20T04:19:40Z",
    content:
      "(Bloomberg) -- The fanfare over a revamp of the Ethereum blockchain is still echoing across the cryptoverse but thats doing little to stem a slide in Ether.\r\nMost Read from Bloomberg\r\nThe networks na… [+2243 chars]",
  },
  {
    source: {
      id: null,
      name: "Dutchcowboys.nl",
    },
    author: "Redactie Dutchcowboys, Redactie Dutchcowboys",
    title:
      "Bitcoin Amsterdam: dit is de line-up van het eerste Europese evenement",
    description:
      "Bitcoin Amsterdam. Deze eerste Bitcoin conferentie in onze hoofdstad haalt onder anderen Stella Assange, Adam Beck en Jemima Kelly naar Nederland.",
    url: "https://www.dutchcowboys.nl/events/bitcoin-amsterdam-dit-is-de-line-up-van-het-eerste-europese-evenement",
    urlToImage:
      "https://www.dutchcowboys.nl/uploads/posts/list/btc-cryptovaluta.jpg",
    publishedAt: "2022-09-20T04:45:00Z",
    content:
      "Bitcoin Magazine kondigde in samenwerking met Amsterdam Decentralized, de zinderende line-up van Bitcoin Amsterdam aan. 's Werelds grootste en langstlopende Bitcoin-conferentie strijkt op 12,13 en 14… [+3055 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Jesse Coghlan",
    title:
      "DeFi platform sees strong interest in halal-approved crypto products",
    description:
      "Navigating crypto is made more difficult for those with religious considerations and the founder of an Islamic law compliant DeFi platform has thousands of users seeking approved cryptocurrencies.",
    url: "https://cointelegraph.com/news/defi-platform-sees-strong-interest-in-halal-approved-crypto-products",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNzA4OTFhMWEtMjdjYi00N2IyLTkwMzQtMWNkMjc3ZTM2M2IwLmpwZw==.jpg",
    publishedAt: "2022-09-20T06:22:28Z",
    content:
      "Australian-based crypto platform Marhaba DeFi says there has been a strong take-up of Halal-approved cryptocurrency products on its platform, with aims to release a suite of new products which align … [+4128 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Ciaran Lyons",
    title: "P2E gamers, minors not any safer from the tax man, says Koinly",
    description:
      "Earning an income from play-to-earns is viewed as “running a business” and you will be taxed accordingly, warns Australian crypto tax specialists.",
    url: "https://cointelegraph.com/news/p2e-gamers-minors-not-any-safer-from-the-tax-man-says-koinly",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNjVhZDk1ODktZTk4NC00MTUzLWIzZDItMTkyMTI4NTM5ZDM1LmpwZw==.jpg",
    publishedAt: "2022-09-20T00:04:28Z",
    content:
      "Modern parents are going to need to keep an even closer eye on their kids gaming habits, as some of them may be accumulating a hefty tax bill, according to a crypto tax specialist.\r\nSpeaking to Coint… [+3298 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Ezra Reguerra",
    title: "Hackers take over CoinDCX Twitter account, promote fake XRP ads",
    description:
      "A hacker took over CoinDCX's official Twitter account and has constantly been tweeting XRP scam links.",
    url: "https://cointelegraph.com/news/hackers-take-over-coindcx-twitter-account-promote-fake-xrp-ads",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvMmYxMDMyMWQtZTA4My00YTA3LWI1MmMtMDg1ODZkMjU3NjE0LmpwZw==.jpg",
    publishedAt: "2022-09-20T08:44:07Z",
    content:
      "The official Twitter account of India-based crypto exchange CoinDCX has been hacked and used by the exploiters to post fake XRP promos partnered with phishing links in an attempt to scam the exchange… [+1381 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Brayden Lindrea",
    title:
      "SEC lawsuit claims jurisdiction as ETH nodes are 'clustered' in the US",
    description:
      "SEC lawyers have argued that Ethereum-based transactions “take place” in the U.S. because Ethereum nodes are “clustered more densely” in the U.S. than any other country.",
    url: "https://cointelegraph.com/news/sec-lawsuit-claims-jurisdiction-as-eth-nodes-are-clustered-in-the-us",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNGNiNjliZmMtMDM1MC00YTUxLTlhYmEtNDM0NWZhODk4OTk5LmpwZw==.jpg",
    publishedAt: "2022-09-20T03:25:48Z",
    content:
      "The Securities Exchange Commission (SEC) has made an unprecedented claim that Ethereum transactions take place in the United States as ETH nodes are clustered more densely in the United States than a… [+3059 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Rudy Takala",
    title: "The market isn't surging anytime soon — so get used to dark times",
    description:
      "Global economic conditions suggest that markets — including the cryptocurrency market — have further downside ahead. Don’t bank on a surge to new all-time highs in the months ahead.",
    url: "https://cointelegraph.com/news/the-market-isn-t-surging-anytime-soon-so-get-used-to-dark-times",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvMzkwMzQwNjctMTMyMy00NDE5LWE5ZjctZDViMTQ5MWNlNWVmLmpwZw==.jpg",
    publishedAt: "2022-09-20T00:09:13Z",
    content:
      "Global markets are going through a tough period including the cryptocurrency market. But judging by talk from the peanut gallery, it seems like some observers havent received the memo.\r\nFeel like we'… [+6786 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Brian Quarmby",
    title: "Yield Guild Games: Web3 gaming adoption needs a local touch",
    description:
      "YGG’s head of ecosystem development described subDAOs as “sort of its own economy, that has its own treasury and its own token” with its own characteristics depending on the country it's located in.",
    url: "https://cointelegraph.com/news/yield-guild-games-web3-gaming-adoption-needs-a-local-touch",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvZmE4ODgxYTgtYTc5Ny00MDQ3LWJiMjUtNDRiYzU5OWI3NDY1LmpwZw==.jpg",
    publishedAt: "2022-09-20T03:57:37Z",
    content:
      "The blockchain-based gaming industry will need to look at localized strategies to attract Web3 gamers, says decentralized gaming guild Yield Guild Games (YGG).\r\nSpeaking with Cointelegraph at the 202… [+3700 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Brian Quarmby",
    title:
      "‘FED sledgehammer’ will further batter BTC, ETH prices, says Bloomberg analyst",
    description:
      'With the Merge resulting in a ‘buy the rumor, sell the news event,’ Mike McGlone thinks that ETH might drop to “$1,000, or even get a bit lower" given how hawkish the Fed has been.',
    url: "https://cointelegraph.com/news/fed-sledgehammer-will-further-batter-btc-eth-prices-says-bloomberg-analyst",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNGU3MGIwNWEtYTYxNS00ODMxLTg0NDMtNTRkMTE1Y2MxNmFkLmpwZw==.jpg",
    publishedAt: "2022-09-20T05:49:08Z",
    content:
      "The U.S. Federal Reserves inflation sledgehammer is about to batter the prices of Bitcoin (BTC) and Ether (ETH) down even further, before reaching back to new all-time highs in 2025, according to Blo… [+3282 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Cointelegraph By Stephen Katte",
    title:
      "Nifty News: The Sandbox hosts its first wedding, Hollywood actor auctions photo of eye as NFT and more",
    description:
      "Hollywood star Javier Bardem is set to “donate” a close-up photo of his iris as part of a fundraising campaign aimed at restoring sight to people in the developing world.",
    url: "https://cointelegraph.com/news/nifty-news-the-sandbox-hosts-its-first-wedding-hollywood-actor-auctions-photo-of-eye-as-nft-and-more",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvMzc1MmQ3ZmMtMjE2ZS00YWEzLTk3ZmYtMzExODgwZjFiYTkzLmpwZw==.jpg",
    publishedAt: "2022-09-20T05:52:54Z",
    content:
      "Decentralized blockchain-based metaverse The Sandbox has held its first hybrid digital and real-life wedding on its Metaverse. \r\nThe bride and groom, Singaporean couple Joanne Tham and Clarence Chan,… [+5148 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title: "Indian Exchange WazirX To Delist USDC, USDP And TUSD",
    description:
      "India-based crypto exchange WazirX will delist stablecoins USDC, USDP And TUSD on Sept. 23.",
    url: "https://www.ibtimes.com/indian-exchange-wazirx-delist-usdc-usdp-tusd-3614594",
    urlToImage: "https://d.ibtimes.com/en/full/3469547/nischal-shetty.png",
    publishedAt: "2022-09-20T04:30:47Z",
    content:
      "KEY POINTS\r\n<ul><li>WazirX will introduce Auto-Conversion of USDP, TUSD and USDC into BUSD</li><li>The trading pairs of these stablecoins will be delisted on Sept. 26</li><li>Binance recently did the… [+2296 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Medha Singh and Lisa Pauline Mattackal",
    title:
      "Cryptoverse: After Merge, Ether Heads For A $20 Billion Shanghai Splurge",
    description:
      "The Merge came, saw and conquered. Not that you'd guess from crypto prices.",
    url: "https://www.ibtimes.com/cryptoverse-after-merge-ether-heads-20-billion-shanghai-splurge-3614687",
    urlToImage:
      "https://d.ibtimes.com/en/full/3819557/souvenir-tokens-representing-cryptocurrency-networks-bitcoin-ethereum-dogecoin-ripple-plunge.jpg",
    publishedAt: "2022-09-20T05:57:17Z",
    content:
      "Souvenir tokens representing cryptocurrency networks Bitcoin, Ethereum, Dogecoin and Ripple plunge into water in this illustration taken May 17, 2022. \r\nThe Merge came, saw and conquered. Not that yo… [+3947 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title: "Crypto On Sept. 20: Bitcoin Back Above $19,000, Ether Eyes $1,400",
    description:
      "The trading volume of the world's biggest cryptocurrency surged 8.84% in the last 24 hours, while that of ETH dropped 7.45%.",
    url: "https://www.ibtimes.com/crypto-sept-20-bitcoin-back-above-19000-ether-eyes-1400-3614655",
    urlToImage:
      "https://d.ibtimes.com/en/full/3802769/bitcoin-price-prediction-has-this-crypto-hit.jpg",
    publishedAt: "2022-09-20T06:23:38Z",
    content:
      "KEY POINTS\r\n<ul><li>The best performers were LUNC, USTC, ALGO and AAVE</li><li>The worst performers were RVN, HT, DCR and LINK</li><li>In the last seven days, BTC dropped 13.41%, while ETH's price dr… [+1832 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title:
      "Coinbase To Introduce New Fee Structure – How Will It Affect Transactions?",
    description:
      "Coinbase will implement a new fee structure, which will introduce better incentives for high-volume traders.",
    url: "https://www.ibtimes.com/coinbase-introduce-new-fee-structure-how-will-it-affect-transactions-3614601",
    urlToImage:
      "https://d.ibtimes.com/en/full/3819470/coinbase-fee-schedule.png",
    publishedAt: "2022-09-20T04:28:50Z",
    content:
      "Leading crypto exchange Coinbase will release a new fee schedule Tuesday. It will change the taker and maker fee structures for transactions above $100,000-$1 million.\r\nAccording to an announcement f… [+1724 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title:
      "Pan-African Crypto Exchange Yellow Card Raises $40M In Series B Funding Round",
    description:
      'Chris Maurice, CEO and co-founder of Yellow Card, said that the success of the exchange was a result of "relentless hard work toward a common goal."',
    url: "https://www.ibtimes.com/pan-african-crypto-exchange-yellow-card-raises-40m-series-b-funding-round-3614588",
    urlToImage:
      "https://d.ibtimes.com/en/full/3819321/will-thinned-out-market-basis.jpg",
    publishedAt: "2022-09-20T03:27:45Z",
    content:
      "KEY POINTS\r\n<ul><li>Valar Ventures, Third Prime, Sozo Ventures, and others also participated in the Series B round </li><li>Yellow Card has raised almost $57 million total, including all previous inv… [+2135 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title:
      "Binance Labs' Head Is Optimistic In The Face Of Current Bearish Conditions",
    description:
      "Binance co-founder and Binance Labs head Yi He confirmed that her firm is looking to invest in Web3 projects despite the bearish market.",
    url: "https://www.ibtimes.com/binance-labs-head-optimistic-face-current-bearish-conditions-3614609",
    urlToImage:
      "https://d.ibtimes.com/en/full/3569411/representation-cryptocurrency-binance-seen-this-illustration-taken-august-6-2021.jpg",
    publishedAt: "2022-09-20T04:58:13Z",
    content:
      'KEY POINTS\r\n<ul><li>Yi He thinks the firm should "make investments more aggressively"</li><li>However, she said it shouldn\'t be done "just for the sake of investing"</li><li>She also shared the types… [+2279 chars]',
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Nica Osorio",
    title:
      "Watchdog Warns Against FTX, But Crypto Exchange Claims A 'Scammer' Is Impersonating It",
    description:
      '"We\'re looking into it and communicating with regulators," said FTX.',
    url: "https://www.ibtimes.com/watchdog-warns-against-ftx-crypto-exchange-claims-scammer-impersonating-it-3614467",
    urlToImage:
      "https://d.ibtimes.com/en/full/3564284/ftx-ceo-sam-bankman-fried-poses-picture-unspecified-location-this-undated-handout-picture.jpg",
    publishedAt: "2022-09-20T03:21:35Z",
    content:
      "KEY POINTS\r\n<ul><li>FCA said FTX is not authorized to provide products and services in the U.K.</li><li>It is not registered with FCA</li><li>FTX is a crypto derivatives exchange based in the Bahamas… [+2258 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Nica Osorio",
    title:
      "DOGE Reclaims Its Spot As Tenth Biggest Crypto By Market Capitalization",
    description: "Dogecoin overtook Polkadot in the ranking.",
    url: "https://www.ibtimes.com/doge-reclaims-its-spot-tenth-biggest-crypto-market-capitalization-3614706",
    urlToImage:
      "https://d.ibtimes.com/en/full/3542442/representations-cryptocurrency-dogecoin-are-seen-this-illustration-taken-june-16-2022.jpg",
    publishedAt: "2022-09-20T07:27:59Z",
    content:
      "KEY POINTS\r\n<ul><li>DOGE is mined using proof-of-work</li><li>Approximately 14.4 million DOGE around $841,824 are mined daily</li><li>DOGE was trading up 3.25% at $0.05843</li></ul>\r\nDogecoin, the wo… [+2295 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Parth Dubey",
    title:
      "Decentralized Exchange GMX Suffers $565K Price Manipulation Exploit On AVAX/USD Trading Pair",
    description:
      'Apparently, the attacker successfully capitalized on GMX\'s "minimal spread" and "zero price impact" features to implement the price manipulation exploit.',
    url: "https://www.ibtimes.com/decentralized-exchange-gmx-suffers-565k-price-manipulation-exploit-avax-usd-trading-pair-3614630",
    urlToImage:
      "https://d.ibtimes.com/en/full/3818320/souvenir-tokens-representing-cryptocurrency-networks-bitcoin-ethereum-dogecoin-ripple-plunge.jpg",
    publishedAt: "2022-09-20T05:47:59Z",
    content:
      "Popular decentralized crypto exchange GMX has witnessed a price manipulation exploit on the AVAX/USD trading pair and the attacker successfully managed to steal $565,000 from the Avalanche market.\r\nI… [+2739 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Nica Osorio",
    title:
      "LUNA Classic Intensifies Burning Effort, Destroys Almost 150M Tokens",
    description:
      "The community believes burning tokens would help spike the price of the token — an idea Do Kwon frowned upon since it was proposed by some holders.",
    url: "https://www.ibtimes.com/luna-classic-intensifies-burning-effort-destroys-almost-150m-tokens-3614426",
    urlToImage:
      "https://d.ibtimes.com/en/full/3354503/screen-shot-2021-12-09-6.png",
    publishedAt: "2022-09-20T02:51:55Z",
    content:
      "KEY POINTS\r\n<ul><li>Luna Classic is now in the hands of community holders</li><li>The community has been doing a lot of things to help Luna Classic</li><li>Luna Classic was trading down 3.95% at $0.0… [+2438 chars]",
  },
  {
    source: {
      id: null,
      name: "International Business Times",
    },
    author: "Nica Osorio",
    title:
      "South Korean Prosecutors Ask Interpol To Issue Red Notice For Terra's Do Kwon: Report",
    description:
      "On Monday, the Seoul Southern District Prosecutors' Office said that it had started the process of placing Kwon on Interpol's red notice list since he has not cooperated with the investigations.",
    url: "https://www.ibtimes.com/south-korean-prosecutors-ask-interpol-issue-red-notice-terras-do-kwon-report-3614417",
    urlToImage:
      "https://d.ibtimes.com/en/full/3537549/terra-community-ama-do-kwon-april-2021-1-22-screenshot.png",
    publishedAt: "2022-09-20T02:51:42Z",
    content:
      "KEY POINTS\r\n<ul><li>Terra's Do Kwon is reportedly no longer in Singapore</li><li>South Korean authorities have requested the country's Foreign Ministry to cancel his passport</li><li>Kwon says he is … [+2802 chars]",
  },
  {
    source: {
      id: null,
      name: "AllAfrica - Top Africa News",
    },
    author: "HRW",
    title:
      "Africa: FIFA World Cup - All Sponsors Should Back Remedies for Workers",
    description:
      "[HRW] Beirut -- Global Survey Shows Major Support for Sponsors Backing Migrant Worker Compensation Call",
    url: "https://allafrica.com/stories/202209200092.html",
    urlToImage:
      "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
    publishedAt: "2022-09-20T07:28:30Z",
    content:
      "Beirut — Global Survey Shows Major Support for Sponsors Backing Migrant Worker Compensation Call\r\nFIFA's corporate partners and sponsors of the 2022 World Cup should all press the global football ass… [+8207 chars]",
  },
  {
    source: {
      id: null,
      name: "Business Wire",
    },
    author: null,
    title:
      "Important October 3, 2022 Deadline Reminder: Kessler Topaz Meltzer & Check, LLP Reminds Coinbase Global, Inc. Investors of Securities Fraud Class Action Lawsuit",
    description:
      "RADNOR, Pa.--(BUSINESS WIRE)-- #classaction--Kessler Topaz Meltzer & Check, LLP Reminds Coinbase Global, Inc. Investors of Securities Fraud Class Action Lawsuit",
    url: "https://www.businesswire.com/news/home/20220919005108/en/Important-October-3-2022-Deadline-Reminder-Kessler-Topaz-Meltzer-Check-LLP-Reminds-Coinbase-Global-Inc.-Investors-of-Securities-Fraud-Class-Action-Lawsuit",
    urlToImage:
      "https://mms.businesswire.com/media/20220919005108/en/1574575/23/KTMC-Logo_4C_%282%29_-_Copy.jpg",
    publishedAt: "2022-09-20T00:24:38Z",
    content:
      "RADNOR, Pa.--(BUSINESS WIRE)--The law firm of Kessler Topaz Meltzer &amp; Check, LLP (www.ktmc.com) informs investors two securities class action lawsuits have been filed against Coinbase Global, Inc… [+5264 chars]",
  },
  {
    source: {
      id: null,
      name: "Human Rights Watch",
    },
    author: "Human Rights Watch",
    title: "FIFA World Cup: All Sponsors Should Back Remedies for Workers",
    description:
      "Click to expand Image\n \n\n\n\n\n \n \n \n \n © 2022 Human Rights Watch\n \n\n \n(Beirut) – FIFA’s corporate partners and sponsors of the 2022 World Cup should all press the global football association and the Qatari government to provide compensation and other remedies t…",
    url: "https://www.hrw.org/news/2022/09/20/fifa-world-cup-all-sponsors-should-back-remedies-workers",
    urlToImage:
      "https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2022/09/202209mena_payupfifa_poster.jpg?h=d117a02d&itok=pBtOcrQc",
    publishedAt: "2022-09-20T04:01:00Z",
    content:
      "(Beirut) FIFAs corporate partners and sponsors of the 2022 World Cup should all press the global football association and the Qatari government to provide compensation and other remedies to migrant w… [+7599 chars]",
  },
  {
    source: {
      id: null,
      name: "Mediagazer.com",
    },
    author: null,
    title:
      "After crypto prices crashed, Spotify and other media companies abandoned plans to make podcasts, TV shows, and movies based on NFTs (Lucas Shaw/Bloomberg)",
    description:
      "Lucas Shaw / Bloomberg:\nAfter crypto prices crashed, Spotify and other media companies abandoned plans to make podcasts, TV shows, and movies based on NFTs  —  Good afternoon from Los Angeles, the home of the best team in Major League Baseball.  You can scrol…",
    url: "https://mediagazer.com/220919/p16",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iO_CwOuLXM8k/v0/1200x800.jpg",
    publishedAt: "2022-09-20T02:55:04Z",
    content:
      "Mediagazer presents the day's must-read media news on a single page.\r\nThe media business is in tumult: from the production side to\r\nthe distribution side, new technologies are upending the industry.\r… [+416 chars]",
  },
  {
    source: {
      id: null,
      name: "Canaltech.com.br",
    },
    author: "Kaique Lima",
    title: "6 dicas para evitar golpes envolvendo criptomoedas",
    description:
      "2022 definitivamente não é o ano de ouro para as criptomoedas, com baixas históricas e grande desvalorização. Porém, para alguns investidores que gostam de aplicações de alto risco e alto retorno, esta pode ser uma boa oportunidade para comprar esses ativos d…",
    url: "https://canaltech.com.br/criptomoedas/6-dicas-para-evitar-golpes-envolvendo-criptomoedas-225533/",
    urlToImage:
      "https://t.ctcdn.com.br/ZCHGZPFIsy4EUEnBkqm-6Hy1ewY=/1244x700/smart/i597267.jpeg",
    publishedAt: "2022-09-20T00:20:00Z",
    content:
      "2022 definitivamente não é o ano de ouro para as criptomoedas, com baixas históricas e grande desvalorização. Porém, para alguns investidores que gostam de aplicações de alto risco e alto retorno, es… [+3233 chars]",
  },
  {
    source: {
      id: null,
      name: "Tokenist.com",
    },
    author: "247patrick",
    title:
      "Bitcoin Digital Asset Funds See $17M in Inflows After 5-Week Dry Spell",
    description:
      "After five weeks of outflows, Bitcoin digital asset funds saw inflows totaling $17 million last week.",
    url: "https://tokenist.com/bitcoin-digital-asset-funds-see-17m-in-inflows-after-5-week-dry-spell/?utm_sour",
    urlToImage:
      "https://247wallst.com/wp-content/uploads/2022/03/imageForEntry2-ZMv.jpg",
    publishedAt: "2022-09-20T01:34:49Z",
    content:
      "After five weeks of outflows, Bitcoin digital asset funds saw inflows totaling $17 million last week. On the other hand, Ethereum products continued to see outflows despite the much-hyped Merge upgra… [+3558 chars]",
  },
  {
    source: {
      id: null,
      name: "Tokenist.com",
    },
    author: "247patrick",
    title:
      "Market Dips Ahead of FOMC Meet: BTC and ETH Down 50%+ Over 6 Months",
    description:
      "Bitcoin and Ethereum tanked sharply in the early morning hours as the markets opened ahead of the Federal Reserve’s policy meeting.",
    url: "https://tokenist.com/market-dips-ahead-of-fomc-meet-btc-and-eth-down-50-over-6-months/?utm_source=rs",
    urlToImage:
      "https://247wallst.com/wp-content/uploads/2019/02/imageforentry5-0vd.jpg",
    publishedAt: "2022-09-20T01:34:27Z",
    content:
      "Bitcoin and Ethereum tanked sharply in the early morning hours as the markets opened ahead of the Federal Reserves policy meeting on Sept. 20-21. The drop further exacerbates BTC and ETHs recent down… [+3334 chars]",
  },
  {
    source: {
      id: null,
      name: "Octo.com",
    },
    author: "Emmanuel Lin Toulemonde",
    title:
      "Intégrer au plus tôt la sécurité dans les delivery de Machine Learning",
    description:
      "Cet article fait partie de la série “Accélérer le Delivery de projets de Machine Learning”, traitant de l’application d’Accelerate dans un contexte incluant du Machine Learning. Si vous n’êtes pas familier avec Accelerate, ou si vous souhaitez avoir plus de d…",
    url: "https://blog.octo.com/integrer-au-plus-tot-la-securite-dans-les-delivery-de-machine-learning/",
    urlToImage: "https://blog.octo.com/wp-content/uploads/2022/09/image2.png",
    publishedAt: "2022-09-20T06:00:00Z",
    content:
      "Cet article fait partie de la série Accélérer le Delivery de projets de Machine Learning, traitant de lapplication dAccelerate dans un contexte incluant du Machine Learning. Si vous nêtes pas familie… [+24443 chars]",
  },
  {
    source: {
      id: null,
      name: "Gagadget.com",
    },
    author: "gagadget.com",
    title:
      "Хакеры украли $3 300 000 в криптовалюте из-за уязвимости в генераторе Ethereum-адресов",
    description:
      "Пользователи Ethereum лишились более чем $3 млн из-за уязвимости в Profanity. Это инструмент, с помощью которого пользователи генерируют Ethereum-адреса.",
    url: "https://gagadget.com/ru/168710-hakeryi-ukrali-3300000-v-kriptovalyute-iz-za-uyazvimosti-v-generatore-ethereum-adresov/",
    urlToImage:
      "https://gagadget.com/media/cache/7c/f5/7cf5ca28b97dbe5e0fbc842860236094.jpg",
    publishedAt: "2022-09-20T08:08:52Z",
    content:
      "Ethereum $3 - Profanity. , Ethereum-.\r\nProfanity , Ethereum-, . , , , . , , .\r\nUpdate: Earlier I noticed the 0x6ae attacker hadnt fully drained one of the wallets they interacted with.\r\nAm pleased to… [+297 chars]",
  },
  {
    source: {
      id: null,
      name: "newsBTC",
    },
    author: "Jet Encila",
    title:
      "XRP Braces For Turbulence Amid Looming Fed Hike, Ongoing Ripple-SEC Court War",
    description:
      "It seems now that XRP fell short on capitalizing on hopes that Ripple will finally earn a victory on its long-running legal dispute with the U.S. Securities and Exchange Commission as it swayed between profits and losses on September 19. It can be recalled th…",
    url: "https://www.newsbtc.com/news/xrp-could-lose-30/",
    urlToImage: "https://www.newsbtc.com/wp-content/uploads/2022/08/XRP-2.png",
    publishedAt: "2022-09-20T08:00:54Z",
    content:
      "It seems now that XRP fell short on capitalizing on hopes that Ripple will finally earn a victory on its long-running legal dispute with the U.S. Securities and Exchange Commission as it swayed betwe… [+2774 chars]",
  },
  {
    source: {
      id: null,
      name: "Bitrebels.com",
    },
    author: "Cynthia Madison",
    title: "Is Investing In Ethereum A Good Idea? – Key Aspects To Consider",
    description:
      "Investing in cryptocurrency is an extremely volatile endeavor, no matter how you look at it. The crypto market is highly sensitive to a wide range of factors, so investors have to rely on price speculation to make a profit. Since there’s no such thing as a sa…",
    url: "https://bitrebels.com/business/investing-ethereum-good-idea-key-aspects-consider/",
    urlToImage:
      "https://n3m3n2r6.rocketcdn.me/wp-content/uploads/2022/09/investing-in-ethereum-header-image.jpg",
    publishedAt: "2022-09-20T00:45:12Z",
    content:
      "Investing in cryptocurrency is an extremely volatile endeavor, no matter how you look at it. The crypto market is highly sensitive to a wide range of factors, so investors have to rely on price specu… [+6160 chars]",
  },
  {
    source: {
      id: null,
      name: "Crypto-news-flash.com",
    },
    author: "John Kiguru",
    title:
      "IOTA Login for industry, IoT, organizations and individuals is here – What you need to know - Crypto News Flash",
    description:
      "IOTA and walt.id are set to play a critical role in developing a privacy-preserving, SSI-based login system allowing Web2 and Web3 to securely onboard users.",
    url: "https://www.crypto-news-flash.com/iota-login-for-industry-iot-organizations-and-individuals-is-here-what-you-need-to-know/",
    urlToImage:
      "http://www.crypto-news-flash.com/wp-content/uploads/2019/06/Akarat-Phasura-IOTA.jpg",
    publishedAt: "2022-09-20T06:06:02Z",
    content:
      "<ul><li>IOTA and walt.id are set to play a critical role in developing a privacy-preserving, SSI-based login system allowing Web2 and Web3 to easily and securely onboard users.</li><li>The IOTA commu… [+2830 chars]",
  },
  {
    source: {
      id: null,
      name: "newsBTC",
    },
    author: "Jet Encila",
    title:
      "Dogecoin Surpasses Polkadot – Can DOGE Maintain Its Aggressiveness?",
    description:
      "Traders should definitely keep their eye on Dogecoin (DOGE) as the popular dog meme coin hints at a 30% rally in the coming days. DOGE hints at a 30% rally in the coming days Dogecoin blazes past Polkadot with a wide difference seen at around $576.235 million…",
    url: "https://www.newsbtc.com/news/dogecoin-surpasses-polkadot-can-doge-maintain-its-aggressiveness/",
    urlToImage:
      "https://www.newsbtc.com/wp-content/uploads/2022/09/Dogecoin.png",
    publishedAt: "2022-09-20T06:00:20Z",
    content:
      "Traders should definitely keep their eye on Dogecoin (DOGE) as the popular dog meme coin hints at a 30% rally in the coming days.\r\n<ul><li>DOGE hints at a 30% rally in the coming days</li><li>Dogecoi… [+3042 chars]",
  },
  {
    source: {
      id: null,
      name: "Bitcoinist",
    },
    author: "Eduardo Próspero",
    title:
      "Four Stories From Argentina, Where Bitcoin And Crypto Rule The Land",
    description:
      "In current-day Argentina inflation is no joke and prices change every day. That means it’s fertile ground for bitcoin and crypto adoption. “The central bank has warned repeatedly about the risk of investing in volatile digital currencies, and some adopters ar…",
    url: "https://bitcoinist.com/four-stories-from-argentina-where-bitcoin-rules/",
    urlToImage:
      "https://bitcoinist.com/wp-content/uploads/2022/09/sky-g50a68f52c_1280.jpg",
    publishedAt: "2022-09-20T07:36:38Z",
    content:
      "In current-day Argentina inflation is no joke and prices change every day. That means its fertile ground for bitcoin and crypto adoption. The central bank has warned repeatedly about the risk of inve… [+3476 chars]",
  },
  {
    source: {
      id: null,
      name: "Gadgets360.com",
    },
    author: "Radhika Parashar",
    title:
      "Healthcare, Logistics to See Most Benefits via Blockchain: Crypto-Centric Venture Firm Cypher",
    description:
      "UAE-based crypto-centric investment firm Cypher Capital has highlighted that the blockchain tech can bring most benefits to the healthcare and logistics industries of India. In conversation with Gadgets 360, Vineet Budki, the Managing Partner and CEO of the v…",
    url: "https://gadgets360.com/cryptocurrency/news/healthcare-logistics-see-most-profits-blockchain-says-cypher-capital-3360208",
    urlToImage:
      "https://i.gadgets360cdn.com/large/india_flag_photo_Darshak_Pandya_Pixabay_large_1651490960534.jpg",
    publishedAt: "2022-09-20T06:41:26Z",
    content:
      "India recently secured the fourth position on the 2022 Global Crypto Adoption Index compiled by blockchain research firm Chainalysis. These ranks numbered all the countries based on their varied uses… [+4461 chars]",
  },
  {
    source: {
      id: "le-monde",
      name: "Le Monde",
    },
    author: "Andrea Baronchelli, Hanna Halaburda, Alexander Teytelboym",
    title:
      "« Il y a une absence déconcertante de débat public sur les questions de confidentialité qui entourent les monnaies centrales numériques »",
    description:
      "Les chercheurs Andrea Baronchelli, Hanna Halaburda et Alexander Teytelboym mettent en garde, dans une tribune au « Monde », contre les usages que les Etats qui développent des monnaies numériques de banque centrale pourraient faire des données de transaction.",
    url: "https://www.lemonde.fr/idees/article/2022/09/20/il-y-a-une-absence-deconcertante-de-debat-public-sur-les-questions-de-confidentialite-qui-entourent-les-monnaies-centrales-numeriques_6142365_3232.html",
    urlToImage:
      "https://img.lemde.fr/2020/04/23/428/0/3867/2578/1440/960/60/0/e1bde8d_NZR62UV7YuVjrftkjBSPUZ_S.jpg",
    publishedAt: "2022-09-20T07:00:04Z",
    content:
      "Les monnaies numériques des banques centrales (central bank digital currency - CBDC) sont un phénomène récent, qui a fait son apparition dans des pays des Caraïbes. Les Bahamas ont, en octobre 2020, … [+2763 chars]",
  },
  {
    source: {
      id: null,
      name: "The Daily Hodl",
    },
    author: "Daily Hodl Staff",
    title:
      "Top Crypto Analyst Unveils Bitcoin Bottom Scenario, Updates Outlook on Ethereum and XRP",
    description:
      "A popular crypto strategist and trader is laying out his bullish thesis for Bitcoin (BTC) after the king crypto’s brief descent to the $18,000 level. Pseudonymous crypto analyst Cheds tells his 284,700 Twitter followers that Bitcoin could be printing two doub…",
    url: "https://dailyhodl.com/2022/09/20/top-crypto-analyst-unveils-bitcoin-bottom-scenario-updates-outlook-on-ethereum-and-xrp/",
    urlToImage:
      "https://dailyhodl.com/wp-content/uploads/2022/09/ETH-Alert-Says-Zero.jpg",
    publishedAt: "2022-09-20T07:04:22Z",
    content:
      "A popular crypto strategist and trader is laying out his bullish thesis for Bitcoin (BTC) after the king crypto’s brief descent to the $18,000 level.\r\nPseudonymous crypto analyst Cheds tells his 284,… [+1598 chars]",
  },
  {
    source: {
      id: null,
      name: "Ambcrypto.com",
    },
    author: "Anjali Sriniwasan",
    title: "Top 8 lending protocols in 2022",
    description:
      "Disclaimer: The information shared is for educational purposes only. While AMBCrypto might be compensated for any links shared herein, that does not affect our writer’s evaluations’ in any way. The crypto-market can provide both investors and traders with an …",
    url: "https://ambcrypto.com/top-8-lending-protocols-2022/",
    urlToImage:
      "https://statics.ambcrypto.com/wp-content/uploads/2022/09/josh-appel-NeTPASr-bmQ-unsplash-1000x600.jpg",
    publishedAt: "2022-09-20T07:15:17Z",
    content:
      "Disclaimer: The information shared is for educational purposes only. While AMBCrypto might be compensated for any links shared herein, that does not affect our writers evaluations in any way.\r\nThe cr… [+5660 chars]",
  },
  {
    source: {
      id: null,
      name: "CryptoSlate",
    },
    author: "Oluwapelumi Adejumo",
    title:
      "Crypto promoter Ian Balina labels SEC charge ‘frivolous’, turns down settlement",
    description:
      "Famed crypto promoter Ian Balina has labeled the SEC charges against him as frivolous, saying he is “excited to take this fight public.” Excited to take this fight public. \nThe post Crypto promoter Ian Balina labels SEC charge ‘frivolous’, turns down settleme…",
    url: "https://cryptoslate.com/crypto-promoter-ian-balina-labels-sec-charge-frivolous-turns-down-settlement/",
    urlToImage:
      "https://cryptoslate.com/wp-content/uploads/2022/09/ian-balina-sec.jpg",
    publishedAt: "2022-09-20T02:00:45Z",
    content:
      "Famed crypto promoter Ian Balina has labeled the SEC charges against him as frivolous, saying he is “excited to take this fight public.”\r\nExcited to take this fight public.\r\nThis frivolous SEC charge… [+2449 chars]",
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Dylan Butts",
    title:
      "Crypto research firm founder accused of promoting ICO for compensation",
    description:
      "Self-described crypto influencer charged with violating SEC regulations by trading and promoting an initial coin offering under undisclosed financial terms.",
    url: "https://forkast.news/crypto-research-firm-founder-accused-promote-ico/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/Screenshot-2022-09-20-134532.jpg",
    publishedAt: "2022-09-20T06:24:04Z",
    content:
      "The U.S. Securities and Exchange Commission (SEC) is pressing charges against the founder of a cryptocurrency investment research firm in connection with an alleged backroom deal that saw him promote… [+3635 chars]",
  },
  {
    source: {
      id: "australian-financial-review",
      name: "Australian Financial Review",
    },
    author: "Joshua Oliver",
    title:
      "The lawless world of crypto scams - The Australian Financial Review",
    description:
      "Fraudsters took advantage of the hype during the pandemic to prey on individuals – exposing a gaping hole in consumer protections.",
    url: "https://www.afr.com/technology/the-lawless-world-of-crypto-scams-20220920-p5bji0",
    urlToImage:
      "https://static.ffx.io/images/$zoom_0.3968%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/057eee28247b73fa3f1e7b3b435e075609fcf54b",
    publishedAt: "2022-09-20T02:04:00Z",
    content:
      "Lilis battle to recover her losses and get justice reflects a gaping divide in consumer protections between people who use regulated financial institutions and those who embrace digital currencies.\r\n… [+12986 chars]",
  },
  {
    source: {
      id: null,
      name: "CryptoSlate",
    },
    author: "Christian Nwobodo",
    title:
      "U.S. Treasury requests public comment on curbing crypto-related crimes",
    description:
      "United States Department of the Treasury has called on the public to provide feedback on the role of digital assets in facilitating illicit finance and how the regulator might curtail the associated risks. \nThe post U.S. Treasury requests public comment on cu…",
    url: "https://cryptoslate.com/u-s-treasury-requests-public-comment-on-curbing-crypto-related-crimes/",
    urlToImage:
      "https://cryptoslate.com/wp-content/uploads/2022/09/ustreasury-crypto.jpg",
    publishedAt: "2022-09-20T00:30:19Z",
    content:
      "U.S. Department of the Treasury has called on the public to provide feedback on the role of digital assets in facilitating illicit finance and how the regulator might curtail the associated risks.\r\nO… [+3054 chars]",
  },
  {
    source: {
      id: null,
      name: "Coinjournal.net",
    },
    author: "Charles Thuo",
    title: "CEX.IO review: pros, cons, and how it works",
    description:
      "CEX.IO is a regulated cryptocurrency exchange that offers a commission-free margin trading platform. It allows users to trade through its website, mobile apps, and a wide selection of API solutions.",
    url: "https://coinjournal.net/news/cex-io-review-pros-cons-and-how-it-works/",
    urlToImage:
      "https://coinjournal.net/wp-content/uploads/2022/09/1663326850078-f5652cdd-50ad-4233-b5f5-c7419464998a.jpg",
    publishedAt: "2022-09-20T08:25:14Z",
    content:
      "CEX.IO is a regulated cryptocurrency exchange that offers a commission-free margin trading platform. It allows users to trade through its website, mobile apps, and a wide selection of API solutions.\r… [+4842 chars]",
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Nick Saponaro",
    title: "If the UK wants to become a crypto hub, it must do better",
    description:
      "Britain's internal divisions could thwart its crypt ambitions, writes Nick Saponaro of Divi Labs. Will the UK be eclipsed by crypto-friendly Dubai?",
    url: "https://forkast.news/if-uk-wants-to-be-crypto-hub-it-must-do-better/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/Forkast-Opinion-Images-5.png",
    publishedAt: "2022-09-20T03:02:00Z",
    content:
      "Crypto appears to have started something of a tug of war between the powers that be in the U.K. \r\nRishi Sunak, the former Chancellor of the Exchequer and runner-up in the recent race to become the ne… [+6503 chars]",
  },
  {
    source: {
      id: null,
      name: "PR Newswire UK",
    },
    author: null,
    title: "Invest Ecapitals Inaugurates New Trading Platform",
    description:
      "SOUTHAMPTON, England, Sept. 20, 2022 /PRNewswire/ -- As cryptocurrencies are becoming the new normal of the financial world, various platforms have emerged to connect participants with this landscape. However, due to the unique & volatile nature of digital co…",
    url: "https://www.prnewswire.co.uk/news-releases/invest-ecapitals-inaugurates-new-trading-platform-301627920.html",
    urlToImage: null,
    publishedAt: "2022-09-20T07:58:00Z",
    content:
      "SOUTHAMPTON, England, Sept. 20, 2022 /PRNewswire/ -- As cryptocurrencies are becoming the new normal of the financial world, various platforms have emerged to connect participants with this landscape… [+2566 chars]",
  },
  {
    source: {
      id: null,
      name: "BeInCrypto",
    },
    author: "Eduardo Venegas",
    title:
      "El fundador de Mundo Crypto es galardonado en los Leaders In Fintech Awards 2022",
    description:
      "El CEO de Mundo Crypto, Mani Thawani, recibió el galardón “Emprendedor Cripto del Año” en los Leaders In Fintech Awards 2022 en Dubái, por parte de la publicación Entrepreneur Middle East, por sus iniciativas para impulsar la tecnología blockchain y las cript…",
    url: "https://es.beincrypto.com/fundador-mundo-crypto-galardonado-leaders-fintech-awards-2022/",
    urlToImage:
      "https://s32679.pcdn.co/wp-content/uploads/2022/08/unnamed.jpg.webp",
    publishedAt: "2022-09-20T06:21:23Z",
    content:
      "El CEO de Mundo Crypto, Mani Thawani, recibió el galardón Emprendedor Cripto del Año en los Leaders In Fintech Awards 2022 en Dubái, por parte de la publicación Entrepreneur Middle East, por sus inic… [+2603 chars]",
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Danny Park",
    title:
      "South Korea unlikely to push out crypto regulation before the U.S., authority says",
    description:
      "South Korea’s top financial watchdog Monday said it is difficult for the country to establish laws overseeing the cryptocurrency industry in the country ahead of a common global regulatory framework as cross-border enforcement would be a key determinant of ef…",
    url: "https://forkast.news/south-korea-unlikely-to-push-out-crypto-regulation-before-the-u-s-authority-says/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/bitcoin-korean-won.png",
    publishedAt: "2022-09-20T07:22:57Z",
    content:
      "This comes as South Koreas Financial Services Commission (FSC) recently expressed concern over the countrys ambitious new legislation on cryptocurrencies that is currently under development.\r\nThere m… [+2660 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "milbo",
    title:
      "Crypto's bear market is unlike others before it. This time the Fed's steering the ship",
    description:
      "The cryptocurrency industry has reason to celebrate. While there has been lots and lots of pain, there haven't been the same fears about bitcoin's survival and what happens next. That's thanks in... #terra #sylviajablonski #crypto #assetclass #chiefinvestment…",
    url: "https://biztoc.com/p/viuxwpxn?ref=rss",
    urlToImage: "https://cdn.biztoc.com/og/viuxwpxn.jpg",
    publishedAt: "2022-09-20T07:28:51Z",
    content:
      "The cryptocurrency industry has reason to celebrate. While there has been lots and lots of pain, there haven't been the same fears about bitcoin's survival and what happens next. That's thanks in par… [+1296 chars]",
  },
  {
    source: {
      id: null,
      name: "Finbold.com",
    },
    author: "Paul Luvaga",
    title:
      "Kenya’s central bank governor admits pressure to convert country’s reserves into Bitcoin",
    description:
      "Kenya’s central bank governor Patrick Njoroge has admitted to receiving external pressure from crypto proponents to convert the country’s reserves... Continue reading \nThe post Kenya’s central bank governor admits pressure to convert country’s reserves into B…",
    url: "https://finbold.com/kenyas-central-bank-governor-admits-pressure-to-convert-countrys-reserves-into-bitcoin/",
    urlToImage:
      "https://finbold.com/app/uploads/2022/09/Kenyas-central-bank-governor-admits-pressure-to-convert-countrys-reserves-into-Bitcoin.jpeg",
    publishedAt: "2022-09-20T08:26:16Z",
    content:
      "Kenya’s central bank governor Patrick Njoroge has admitted to receiving external pressure from crypto proponents to convert the country’s reserves into Bitcoin (BTC). \r\nAccording to Njoroge, the idea… [+2209 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "xluettgen",
    title:
      "Bitcoin, Ethereum Nosedive: $445M Liquidated From Crypto Market - Bitcoin (BTC/USD), Ethereum (ETH/USD)",
    description:
      "Bitcoin is currently trading at $19,100, down 14% in the past week and down by around 4% over the past 24 hours. The world’s largest cryptocurrency is now down by a staggering 75% from its... #trillionworld #btc #ethereum #anthonyscaramucci #kevinoleary #newy…",
    url: "https://biztoc.com/p/dfx9nef9?ref=rss",
    urlToImage: "https://cdn.biztoc.com/og/dfx9nef9.jpg",
    publishedAt: "2022-09-20T00:19:46Z",
    content:
      "Bitcoin is currently trading at $19,100, down 14% in the past week and down by around 4% over the past 24 hours. The worlds largest cryptocurrency is now down by a staggering 75% from its all-time hi… [+943 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "nils01",
    title: "SEC Claims All of Ethereum Falls Under US Jurisdiction",
    description:
      "The SEC filed a federal lawsuit Monday against crypto influencer Ian Balina for his failure to register a cryptocurrency as a security before launching a 2018 initial coin offering. In a bold and... #nft #escalation #etherscan #ianbalina #ethereumfallsunderus…",
    url: "https://biztoc.com/p/ci9x8et4?ref=rss",
    urlToImage: "https://cdn.biztoc.com/og/ci9x8et4.jpg",
    publishedAt: "2022-09-20T00:19:05Z",
    content:
      "The SEC filed a federal lawsuit Monday against crypto influencer Ian Balina for his failure to register a cryptocurrency as a security before launching a 2018 initial coin offering. In a bold and pot… [+1392 chars]",
  },
  {
    source: {
      id: null,
      name: "Ambcrypto.com",
    },
    author: "Jacob Thomas",
    title:
      "Seedify: A leading launchpad and incubator reveals its Steampunk-themed PFP Avatar collection",
    description:
      "Seedify is one of the crypto industry’s leading notable launchpads and incubators. They empower innovators and project developers through access to funding, community and partnership building, and a complete support system to help bring premier blockchain gam…",
    url: "https://ambcrypto.com/seedify-a-leading-launchpad-and-incubator-reveals-its-steampunk-themed-pfp-avatar-collection/",
    urlToImage:
      "https://statics.ambcrypto.com/wp-content/uploads/2022/09/ava-1-1000x600.png",
    publishedAt: "2022-09-20T08:15:56Z",
    content:
      "Seedify is one of the crypto industry’s leading notable launchpads and incubators. They empower innovators and project developers through access to funding, community and partnership building, and a … [+6059 chars]",
  },
  {
    source: {
      id: "australian-financial-review",
      name: "Australian Financial Review",
    },
    author: "Aaron Patrick",
    title:
      "Carnegie slams 'scumbag' crpyto traders - The Australian Financial Review",
    description:
      "The high-profile cryptocurrency investor said he had invested in the luna blockchain currency, which collapsed this year to almost zero.",
    url: "https://www.afr.com/technology/carnegie-slams-scumbag-crpyto-traders-20220920-p5bjgs",
    urlToImage:
      "https://static.ffx.io/images/$zoom_0.3321%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_396%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/f6446b70ac450dfcf3429676ea9e7e820dba258e",
    publishedAt: "2022-09-20T01:09:00Z",
    content:
      "Tbh havent gone running in a while, he tweeted on Sunday, need to cut some calories.\r\nMr Kwon said he would share his location with a friend, someone he wanted to meet, or if they were participating … [+1186 chars]",
  },
  {
    source: {
      id: null,
      name: "CryptoSlate",
    },
    author: "Zeynep Geylan",
    title: "Largest Indian exchange WazirX to delist USDC spot pairs, Sept. 26",
    description:
      "India’s largest crypto exchange WazirX has announced that it’ll stop supporting USDC, USDP, and TUSD on September 26 to “enhance liquidity and capital efficiency.” According to the announcement, the exchange will continue to support withdrawals of USDC, USDP,…",
    url: "https://cryptoslate.com/largest-indian-exchange-wazirx-to-delist-usdc-spot-pairs-sept-26/",
    urlToImage: "https://cryptoslate.com/wp-content/uploads/2022/09/wazirx.jpg",
    publishedAt: "2022-09-20T03:30:14Z",
    content:
      "India’s largest crypto exchange WazirX has announced that it’ll stop supporting USDC, USDP, and TUSD on Sept. 26 to “enhance liquidity and capital efficiency.”\r\nAccording to the announcement, the exc… [+3119 chars]",
  },
  {
    source: {
      id: null,
      name: "GlobeNewswire",
    },
    author: "MRHB DeFi",
    title:
      "MRHB and Gold & Silver Standard (GSS) Partner to Expand Halal DeFi Offerings with Tokenized Precious Metals",
    description:
      "MELBOURNE, Australia, Sept. 19, 2022 (GLOBE NEWSWIRE) -- MRHB.Network\r\n, a halal decentralized finance ecosystem, partners with Gold & Silver Standard\r\n (GSS), part of the Ainslie Bullion Group, a leading Australian bullion dealer since 1974, and will be list…",
    url: "https://www.globenewswire.com/news-release/2022/09/20/2518785/0/en/MRHB-and-Gold-Silver-Standard-GSS-Partner-to-Expand-Halal-DeFi-Offerings-with-Tokenized-Precious-Metals.html",
    urlToImage:
      "https://ml.globenewswire.com/Resource/Download/e1e1a0af-3736-414d-8414-c7539ab9caa9?size=1",
    publishedAt: "2022-09-20T01:48:00Z",
    content:
      "MELBOURNE, Australia, Sept. 19, 2022 (GLOBE NEWSWIRE) -- MRHB.Network\r\n, a halal decentralized finance ecosystem, partners with Gold &amp; Silver Standard\r\n (GSS), part of the Ainslie Bullion Group, … [+5678 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "cleaner",
    title:
      "CFTC commissioner visits Ripple offices as decision in SEC case looms",
    description:
      "U.S. Commodity Futures Trading Commission (CFTC) met with Ripple CEO on Monday. The meeting was part of a “learning tour’ involving the XRP token, CFTC said. The decision on how to handle XRP... #learningtour #garygensler #garlinghouse #cftc #ripple",
    url: "https://biztoc.com/p/t9sv3end?ref=rss",
    urlToImage: "https://cdn.biztoc.com/og/t9sv3end.jpg",
    publishedAt: "2022-09-20T02:18:42Z",
    content:
      "U.S. Commodity Futures Trading Commission (CFTC) met with Ripple CEO on Monday. The meeting was part of a learning tour involving the XRP token, CFTC said. The decision on how to handle XRP tokens is… [+599 chars]",
  },
  {
    source: {
      id: null,
      name: "Ambcrypto.com",
    },
    author: "Abiodun Oladokun",
    title: "Fantom: Bullish projections come to a naught because of this",
    description:
      "FTM, the native coin of the Fantom Foundation, saw a hike in its social metrics last week. According to data from Lunarcrush, the alt grew its Galaxy Score to a high of 74 out of 100, which was an indication of a perceived bullishness in the coin’s social and…",
    url: "https://ambcrypto.com/fantom-bullish-projections-come-to-a-naught-because-of-this/",
    urlToImage:
      "https://statics.ambcrypto.com/wp-content/uploads/2022/09/drew-beamer-xU5Mqq0Chck-unsplash-1-1000x600.jpg",
    publishedAt: "2022-09-20T02:30:24Z",
    content:
      "FTM, the native coin of the Fantom Foundation, saw a hike in its social metrics last week. According to data from Lunarcrush, the alt grew its Galaxy Score to a high of 74 out of 100, which was an in… [+2220 chars]",
  },
  {
    source: {
      id: null,
      name: "FX Empire",
    },
    author: "Reuters",
    title:
      "Cryptoverse: After Merge, ether heads for a $20 billion Shanghai splurge",
    description: "By Medha Singh and Lisa Pauline Mattackal",
    url: "https://www.fxempire.com/news/article/cryptoverse-after-merge-ether-heads-for-a-20-billion-shanghai-splurge-1132468",
    urlToImage:
      "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/09/tagreuters.com2022newsml_LYNXMPEI8J0691.jpg",
    publishedAt: "2022-09-20T05:36:32Z",
    content:
      "The Ethereum blockchains mega-upgrade finally went live on Sept. 15, moving it to a less energy-intensive proof of stake (PoS) system with hardly a hiccup.\r\nEven though anticipation of the event had … [+2146 chars]",
  },
  {
    source: {
      id: null,
      name: "GlobeNewswire",
    },
    author: "Axi",
    title: "Axi reveals restructured partner program",
    description:
      "Overhauled Introducing Broker program to reward growth Overhauled Introducing Broker program to reward growth",
    url: "https://www.globenewswire.com/news-release/2022/09/20/2518841/0/en/Axi-reveals-restructured-partner-program.html",
    urlToImage:
      "https://ml-eu.globenewswire.com/Resource/Download/7f6ba8e9-27ad-4e92-b821-a8f1fed636fa?size=1",
    publishedAt: "2022-09-20T07:00:00Z",
    content:
      "SYDNEY, Australia, Sept. 20, 2022 (GLOBE NEWSWIRE) -- Global FX and CFD broker Axi has announced a significant overhaul to its Introducing Broker (IB) program, with a more flexible structure that foc… [+5053 chars]",
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Pradipta Mukherjee",
    title:
      "India’s WazirX to delist USDC, apply auto convert to Binance’s stablecoin",
    description:
      "WazirX, India’s largest cryptocurrency exchange by trade volume, said it has stopped deposits of stablecoins USDC, USDP and TUSD, and will automatically convert users’ existing balances to Binance’s USD-backed stablecoin BUSD at a 1:1 ratio.  See related arti…",
    url: "https://forkast.news/headlines/wazirx-delist-usdc-apply-auto-convert-busd/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/wazirx-1-1260x840.jpg",
    publishedAt: "2022-09-20T04:33:54Z",
    content:
      "WazirX, Indias largest cryptocurrency exchange by trade volume, said it has stopped deposits of stablecoins USDC, USDP and TUSD, and will automatically convert users existing balances to Binances USD… [+1150 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "gustav",
    title:
      "SEC lawsuit claims jurisdiction as ETH nodes are 'clustered' in the US",
    description:
      "U.S. Securities Exchange Commission claims U.S.-based investors participated in an investing pool on Telegram. The SEC claims that at the time, the Ether (ETH) contributions were validated by a... #garygensler #ether #handlane #researchfellow #sajjaddaya #eth…",
    url: "https://biztoc.com/p/kv9yq9it?ref=rss",
    urlToImage: "https://cdn.biztoc.com/og/kv9yq9it.jpg",
    publishedAt: "2022-09-20T08:28:38Z",
    content:
      "U.S. Securities Exchange Commission claims U.S.-based investors participated in an investing pool on Telegram. The SEC claims that at the time, the Ether (ETH) contributions were validated by a netwo… [+1171 chars]",
  },
  {
    source: {
      id: null,
      name: "CryptoSlate",
    },
    author: "Oluwapelumi Adejumo",
    title: "Wintermute reveals $160M hack in DeFi operations",
    description:
      "HacCrypto market maker Wintermute’s CEO Evgeny Gaevoy revealed that the firm was hacked for $160 million in its DeFi operations. \nThe post Wintermute reveals $160M hack in DeFi operations appeared first on CryptoSlate.",
    url: "https://cryptoslate.com/wintermute-ceo-reveals-160m-hack-in-defi-operations/",
    urlToImage:
      "https://cryptoslate.com/wp-content/uploads/2022/09/image_2022-09-20_134216577.png",
    publishedAt: "2022-09-20T08:45:14Z",
    content:
      "HacCrypto market maker Wintermutes CEO Evgeny Gaevoy revealed that the firm was hacked for $160 million in its DeFi operations.\r\nWeve been hacked for about $160M in our defi operations. Cefi and OTC … [+1594 chars]",
  },
  {
    source: {
      id: null,
      name: "BeInCrypto",
    },
    author: "Eduardo Venegas",
    title: "El icónico whisky Jack Daniel’s entrará al metaverso",
    description:
      "El whisky Jack Daniel’s presentó una solicitud de patente ante la Oficina de Patentes y Marcas Registradas de Estados Unidos (USPTO, por sus siglas en inglés) para registrar su icónica bebida en el metaverso, así como productos virtuales en formato de tokens …",
    url: "https://es.beincrypto.com/iconico-whisky-jack-daniels-entrara-metaverso/",
    urlToImage:
      "https://s32679.pcdn.co/wp-content/uploads/2020/11/BIC_btc_diamond_luxury.jpg.webp",
    publishedAt: "2022-09-20T06:28:22Z",
    content:
      "El whisky Jack Daniels presentó una solicitud de patente ante la Oficina de Patentes y Marcas Registradas de Estados Unidos (USPTO, por sus siglas en inglés) para registrar su icónica bebida en el me… [+2665 chars]",
  },
  {
    source: {
      id: null,
      name: "Ambcrypto.com",
    },
    author: "Anjali Sriniwasan",
    title:
      "Safuvest announces $SAFV token presale after raising $100,000 in private round",
    description:
      "Safuvest, a blockchain-powered fintech application has successfully completed its private sale after raising $100,000 from Notable blockchain Investors like Meldstone Capital, Brailie with Skybox VC and also Slowave participating in the round. Safuvest is gea…",
    url: "https://ambcrypto.com/safuvest-announces-safv-token-presale-after-raising-100000-in-private-round/",
    urlToImage:
      "https://statics.ambcrypto.com/wp-content/uploads/2022/09/Screenshot-2022-09-20-at-1.05.45-PM-1000x600.png",
    publishedAt: "2022-09-20T07:45:16Z",
    content:
      "Safuvest, a blockchain-powered fintech application has successfully completed its private sale after raising $100,000 from Notable blockchain Investors like Meldstone Capital, Brailie with Skybox VC … [+2050 chars]",
  },
  {
    source: {
      id: null,
      name: "Lavenir.net",
    },
    author: "Belga",
    title:
      "Mondial 2022 - Les sponsors de la Coupe du monde appelés à soutenir l’indemnisation des ouvriers au Qatar",
    description:
      "Ce mardi 20 septembre, trois organisations internationales exhortent les sponsors de la Fifa à faire pression sur celle-ci et sur le gouvernement qatari pour qu’ils indemnisent les travailleurs.",
    url: "https://www.lavenir.net/sports/2022/09/20/mondial-2022-les-sponsors-de-la-coupe-du-monde-appeles-a-soutenir-lindemnisation-des-ouvriers-au-qatar-RCUMKFPOABE25GNJHXSGQEUPX4/",
    urlToImage:
      "https://www.lavenir.net/resizer/JH4rePLh5JgfJ7-gs28C8IsdxV8=/1200x630/filters:focal(544.5x362.5:554.5x352.5):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/UFVD77VYQZHRHBUO5OR7E7I6TY.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/4JQGGPIZFBBWVLDLXQCNHZ7VVU.jpg",
    publishedAt: "2022-09-20T06:59:47Z",
    content:
      '"Les entreprises achètent les droits de sponsoring de la Coupe du monde parce quelles veulent que leurs marques soient associées à la joie, au fair-play et aux exploits humains spectaculaires accompl… [+2515 chars]',
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Lachlan Keller",
    title:
      "Markets: Bitcoin back above US$19,000 while Ether posts strongest gains since post-Merge",
    description:
      "Bitcoin rose above US$19,000 in early Tuesday morning trading in Asia after falling below that resistance level overnight for the first time in almost two weeks. Ethereum showed signs of shaking off the post-Merge slump as it gained along with the rest of the…",
    url: "https://forkast.news/headlines/markets-bitcoin-19000-ether-post-merge/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/AusETF-1260x840.jpg",
    publishedAt: "2022-09-20T00:54:45Z",
    content:
      "Bitcoin rose above US$19,000 in early Tuesday morning trading in Asia after falling below that resistance level overnight for the first time in almost two weeks. Ethereum showed signs of shaking off … [+1979 chars]",
  },
  {
    source: {
      id: null,
      name: "Forkast.news",
    },
    author: "Lachlan Keller",
    title: "Australia Senator says China’s CBDC may threaten national security",
    description:
      "Amid the worsening relationship with China, one Australian Senator is trying to address possible national security concerns that may arise from Beijing’s Central Bank Digital Currency project.",
    url: "https://forkast.news/australia-senator-chinese-banks-e-cny/",
    urlToImage:
      "https://forkast.news/wp-content/uploads/2022/09/Bragg3-1260x544.png",
    publishedAt: "2022-09-20T06:26:53Z",
    content:
      "Australian Senator Andrew Bragg plans to introduce legislation to monitor Chinese banks operating in the country and their future use of Beijings central bank digital currency (CBDC), known as the e-… [+2601 chars]",
  },
  {
    source: {
      id: null,
      name: "Cointelegraph",
    },
    author: "Ciaran Lyons",
    title:
      "Los jugadores P2E y los menores no están a salvo del fisco, según un ejecutivo de Koinly",
    description:
      'Obtener ingresos de los juegos P2E es "complicado" si no se cuenta con orientación fiscal, aconsejan los especialistas australianos en impuestos de criptomonedas.\n \nLos padres modernos van a tener que vigilar aún más los juegos con los que se distraen sus hij…',
    url: "https://es.cointelegraph.com/news/p2e-gamers-minors-not-any-safer-from-the-tax-man-says-koinly",
    urlToImage:
      "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDkvNjVhZDk1ODktZTk4NC00MTUzLWIzZDItMTkyMTI4NTM5ZDM1LmpwZw==.jpg",
    publishedAt: "2022-09-20T00:16:00Z",
    content:
      "Los padres modernos van a tener que vigilar aún más los juegos con los que se distraen sus hijos, pues algunos de ellos pueden estar acumulando una gran factura fiscal, según un especialista en impue… [+4523 chars]",
  },
  {
    source: {
      id: null,
      name: "CryptoSlate",
    },
    author: "Samuel Wan",
    title: "CryptoSlate Daily wMarket Update – Sept. 19",
    description:
      "The total cryptocurrency market cap saw net inflows totaling $32.1 billion. \nThe post CryptoSlate Daily wMarket Update – Sept. 19 appeared first on CryptoSlate.",
    url: "https://cryptoslate.com/cryptoslate-daily-wmarket-update-sept-19/",
    urlToImage:
      "https://cryptoslate.com/wp-content/uploads/2022/09/image_2022-09-20_130023272.png",
    publishedAt: "2022-09-20T08:00:17Z",
    content:
      "The total cryptocurrency market cap saw net inflows totaling $32.1 billion. As of press time, it stood at $935.61 billion, up 3.5% over the weekend.\r\nBitcoin’s market cap grew 3.6% over the reporting… [+4375 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title: "After Merge, Ether Heads For A $20 Billion Shanghai Splurge",
    description:
      "The Merge came, saw and conquered. Not that you'd guess from crypto prices.",
    url: "https://www.ndtv.com/business/after-merge-ether-heads-for-a-20-billion-shanghai-splurge-3360122",
    urlToImage:
      "https://c.ndtvimg.com/2022-08/topikkqg_cryptocurrency-generic-reuters_625x300_16_August_22.jpg",
    publishedAt: "2022-09-20T06:09:08Z",
    content:
      "Some crypto investors are now turning their attention to the next event that could shake up prices.\r\nThe Merge came, saw and conquered. Not that you'd guess from crypto prices.\r\nThe Ethereum blockcha… [+3933 chars]",
  },
  {
    source: {
      id: null,
      name: "Dailyreckoning.com.au",
    },
    author: "Vern Gowdie, Vern Gowdie",
    title: "Crypto…Is the Pyramid Collapsing?",
    description:
      "Opinions are divided. Are cryptos the future or a fraud? Do cryptos have a genuine financial value? The answer to that questions is…‘it depends\nThe post Crypto…Is the Pyramid Collapsing? appeared first on Daily Reckoning Australia.",
    url: "https://www.dailyreckoning.com.au/cryptois-the-pyramid-collapsing/2022/09/20/",
    urlToImage:
      "https://www.dailyreckoning.com.au/wp-content/uploads/2021/07/Cryptos-Are-Pumping-Again.-Heres-How-1.jpg",
    publishedAt: "2022-09-20T03:10:55Z",
    content:
      "Opinions are divided.\r\nAre cryptos the future or a fraud?\r\nDo cryptos have a genuine financial value?\r\nThe answer to that questions isit depends.\r\nIf you are into porn, illicit drugs, ransomware, mon… [+10019 chars]",
  },
  {
    source: {
      id: null,
      name: "Motley Fool Australia",
    },
    author: "Bernd Struben",
    title: "Dogecoin price gains send it back among top 10 global cryptos",
    description:
      "It remains to be seen how cryptos operating under proof of work protocols will fare over the coming year.\nThe post Dogecoin price gains send it back among top 10 global cryptos appeared first on The Motley Fool Australia.",
    url: "https://www.fool.com.au/2022/09/20/dogecoin-price-gains-send-it-back-among-top-10-global-cryptos/",
    urlToImage:
      "https://www.fool.com.au/wp-content/uploads/2021/04/dogecoin-16_9.jpg",
    publishedAt: "2022-09-20T05:37:58Z",
    content:
      "The Dogecoin (CRYPTO: DOGE) price is up 2% over the past 24 hours to 5.85 US cents.\r\nThat gives the crypto, which sports a Shiba Inu dog as its virtual mascot, a market cap of US$7.75 billion.\r\nAnd t… [+1920 chars]",
  },
  {
    source: {
      id: null,
      name: "Motley Fool Australia",
    },
    author: "Bernd Struben",
    title: "How will the Ethereum merge impact the Bitcoin price?",
    description:
      "The world’s original crypto has been overshadowed in the media in recent weeks by Ethereum’s transition to a proof of stake protocol.\nThe post How will the Ethereum merge impact the Bitcoin price? appeared first on The Motley Fool Australia.",
    url: "https://www.fool.com.au/2022/09/20/how-will-the-ethereum-merge-impact-the-bitcoin-price/",
    urlToImage: "https://www.fool.com.au/wp-content/uploads/2022/05/crypto.jpg",
    publishedAt: "2022-09-20T00:32:37Z",
    content:
      "The Bitcoin (CRYPTO: BTC) price has edged up 1% over the past 24 hours, currently trading for US$19,548 (AU$29,062).\r\nThe worlds top crypto has been overshadowed in the media in recent weeks by the s… [+2202 chars]",
  },
  {
    source: {
      id: null,
      name: "AllAfrica - Top Africa News",
    },
    author: "The Exchange",
    title:
      "The ICT Sector Will Reap Highly From Ruto's Plan to Advance Digital Space",
    description:
      "[The Exchange] President Ruto's administration plan regarding the ICT sector represents a significant move towards a much anticipated economic revolution in Kenya.",
    url: "https://allafrica.com/stories/202209200003.html",
    urlToImage:
      "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
    publishedAt: "2022-09-20T04:24:57Z",
    content:
      "President Ruto's administration plan regarding the ICT sector represents a significant move towards a much anticipated economic revolution in Kenya.\r\n<ul><li>Kenya has not been left behind in the gro… [+9195 chars]",
  },
  {
    source: {
      id: null,
      name: "Post Magazine",
    },
    author: "Bloomberg, Bloomberg",
    title: "Chinese crypto tycoon-backed Bitdeer buys Asia’s ‘Fort Knox’",
    description:
      "Clouding-mining service Bitdeer Technologies, controlled by Chinese cryptocurrency billionaire Jihan Wu, has paid US$28.4 million to buy Le Freeport, a maximum-security vault in Singapore.",
    url: "https://www.scmp.com/tech/tech-trends/article/3193104/chinese-crypto-tycoon-backed-bitdeer-buys-asias-fort-knox",
    urlToImage:
      "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2022/09/20/75c303c2-8732-4ac4-8176-d3be7ec6e322_49a90a12.jpg?itok=xHoH4z2B&v=1663649151",
    publishedAt: "2022-09-20T04:49:33Z",
    content:
      "Published: 12:49pm, 20 Sep, 2022\r\nUpdated: 12:49pm, 20 Sep, 2022",
  },
  {
    source: {
      id: null,
      name: "Askubuntu.com",
    },
    author: "elianabongi",
    title: "File directory not found",
    description:
      'How do I solve this?\nCan\'t open "filename#" for reading, No such file or directory\n40270F316B7F0000:error:80000002:system library:BIO_new_file:No such file or directory:../crypto/bio/bss_file.c:67:calling fopen(ndlpat010#, rb)\n40270F316B7F0000:error:10000080:…',
    url: "https://askubuntu.com/questions/1430272/file-directory-not-found",
    urlToImage:
      "https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon@2.png?v=c492c9229955",
    publishedAt: "2022-09-20T03:40:16Z",
    content:
      'How do I solve this?\r\nCan\'t open "filename#" for reading, No such file or directory\r\n40270F316B7F0000:error:80000002:system library:BIO_new_file:No such file or directory:../crypto/bio/bss_file.c:67:… [+129 chars]',
  },
  {
    source: {
      id: null,
      name: "The Star Online",
    },
    author: "Medha Singh, Lisa Pauline Mattackal",
    title:
      "Cryptoverse: After Merge, ether heads for a $20 billion Shanghai splurge",
    description:
      "(Reuters) - The Merge came, saw and conquered. Not that you'd guess from crypto prices. Read full story",
    url: "https://www.thestar.com.my/tech/tech-news/2022/09/20/cryptoverse-after-merge-ether-heads-for-a-20-billion-shanghai-splurge",
    urlToImage:
      "https://apicms.thestar.com.my/uploads/images/2022/09/20/1744515.jpg",
    publishedAt: "2022-09-20T05:28:00Z",
    content:
      "(Reuters) - The Merge came, saw and conquered. Not that you'd guess from crypto prices.\r\nThe Ethereum blockchain's mega-upgrade finally went live on Sept. 15, moving it to a less energy-intensive \"pr… [+3842 chars]",
  },
  {
    source: {
      id: null,
      name: "Anchor.fm",
    },
    author: "Gary Vaynerchuk",
    title: "The Massive Impact That Toys Have on Business w/ Darran Garnham",
    description:
      "Today's episode of the GaryVee Audio Experience is an interview I did on Founder & CEO of TOIKIDO LTD, Darran Garnham! We discussed Darren's journey into the industry, a history lesson about doing business in a very shady era, how toys are connected to busine…",
    url: "https://anchor.fm/garyvee/episodes/The-Massive-Impact-That-Toys-Have-on-Business-w-Darran-Garnham-e1o2jq5",
    urlToImage:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/2454369/2454369-1660858294166-1fec3937876f7.jpg",
    publishedAt: "2022-09-20T08:00:19Z",
    content:
      "Skip to main content\r\nToday's episode of the GaryVee Audio Experience is Q&amp;A from the VeeFriends Wine Library Meetup this past Sunday! We discuss how to post about multiple topics, why people oft… [+44496 chars]",
  },
  {
    source: {
      id: null,
      name: "Theeventchronicle.com",
    },
    author: "John Morse",
    title: "Trezor Model One vs Model T – Which Wallet To Choose?",
    description:
      "The crypto market is picking great momentum and people are therefore looking for safe wallet options. Standing digital assets is a bit tricky and you need to make sure that hackers are not able to crack into your assets. Hardware wallets come into the picture…",
    url: "https://theeventchronicle.com/trezor-model-one-vs-model-t/",
    urlToImage:
      "https://theeventchronicle.com/wp-content/uploads/2022/09/TREZOR-two-factor.jpg",
    publishedAt: "2022-09-20T07:51:26Z",
    content:
      "The crypto market is picking great momentum and people are therefore looking for safe wallet options. Standing digital assets is a bit tricky and you need to make sure that hackers are not able to cr… [+5553 chars]",
  },
  {
    source: {
      id: null,
      name: "Atom.io",
    },
    author: "mamarino20",
    title: "ambmax เครดิตฟรี ล่าสุด",
    description:
      "ambmax เว็บตรง ✓ คาสิโนออนไลน์ยอดนิยมอันดับ 1 ศูนย์รวมเกมพนันครบวงจร ฝากถอนเร็วทันใจเปิดให้บริการตลอด 24 ชม.",
    url: "https://atom.io/packages/ambmax%20%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%9F%E0%B8%A3%E0%B8%B5%20%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94",
    urlToImage: "http://og.github.com/atom-mark/atom-mark@1200x630.png",
    publishedAt: "2022-09-20T07:50:22Z",
    content:
      "ambmax \r\nAmbmax crypto $10 50%\r\n ambmax 5 fiat cryptocurrency Bitcoin, Ethereum Litecoin !\r\nambmax - \r\n 1,000 rubles \r\n ambmax \r\nambmax \r\n ambmax \r\n ambmax \r\nambmax \r\nAmbmax \r\nambmax 2022\r\n AI 2022 A… [+215 chars]",
  },
];

const Home = () => {
  const [coins, setCoins] = useState([]);

  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=true`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCoins(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [URL]);

  return (
    <>
      <div className="homeWrapper">
        <div>
          <h1>Latest Crypto News</h1>
        </div>
        <div className="news">
          {news.slice(0, 6).map((item) => (
            <NewsItem data={item} key={item.title} className="newsItem" />
          ))}
        </div>
        <div>
          <Link to="/allNews">
            <button className="allNewsBtn">Show All Crypto News</button>
          </Link>
        </div>
        <div className="trendingCoins">
          <TrendingCoins />
        </div>
        <div>
          <h2 className="coinsStatsTitle">Most Popular Coins</h2>
        </div>
      </div>
      <TopCoinsStat coins={coins} />
    </>
  );
};

export default Home;
