import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trendingCoins.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const URL = "https://api.coingecko.com/api/v3/search/trending";

  useState(() => {
    axios
      .get(URL)
      .then((response) => {
        setTrending(response.data.coins);
        console.log(response.data.coins);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="trendingCoinsWrapper">
      <h1 className="trendingCoinsTitle">Trending Coins</h1>
      <div className="trendingCoinsGridContainer">
        {trending.slice(0, 6).map((coin) => (
          <div key={coin.item.id} className="coinItemWrapper">
            <div className="coinItemContainer">
              <div className="coinInfo">
                <img src={coin.item.small} alt={coin.item.id} />
                <div>
                  <p className="coinName">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="coinInBTC">
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="bitcoin"
                />
                <p>{coin.item.price_btc.toFixed(6)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
