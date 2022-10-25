import React, { useState, useEffect } from "react";
import NewsItem from "../../components/newsItem/NewsItem";
import TrendingCoins from "../../components/trengingCoins/TrendingCoins";
import TopCoinsStat from "../../components/topCoinsStat/TopCoinsStat";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import { hardcodedNewsData } from "../../components/hardcodedNewsData/HardcodedNewsData";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [news, setNews] = useState([]);
  // NEWS API does not allowed to work anywhere besides localhost in free mode
  // so for deployment build it's replaced with hardcoded data which is an API response

  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=true`;

  useEffect(() => {
    const getNews = async () => {
      const apiNews = await axios.get(
        `https://newsapi.org/v2/everything?q=Crypto&from=2022-10-25&sortBy=popularity&apiKey=67d2c0e4c9f046bbb4ad55012fc182bc`
      );
      setNews(apiNews.data.articles);
      console.log(apiNews.data.articles);
    };
    // getNews();

    const getCoins = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setCoins(res.data);
        })
        .catch((err) => console.error(err));
    };
    getCoins();
  }, []);

  return (
    <>
      <div className="homeWrapper">
        <div>
          <h1>Latest Crypto News</h1>
        </div>
        <div className="news">
          {hardcodedNewsData?.slice(0, 6).map((item) => (
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
