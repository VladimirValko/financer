import React, { useState, useEffect } from "react";
import axios from "axios";
import "./allCoins.css";
import SingleCoinItem from "../../components/singleCoinItem/SingleCoinItem";

const AllCoins = () => {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    <div className="allCoinsWrapper">
      <div>
        <p className="allCryptoTitle">All Crypto Coins</p>
      </div>
      <div className="serchWrapper">
        <h1 className="searchTitle">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a coin"
            className="searchInput"
          />
        </form>
      </div>
      <div className="coins">
        {coins
          ?.filter((value) => {
            if (searchText === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return value;
            }
          })
          .map((coin) => (
            <SingleCoinItem coin={coin} className="coin" />
          ))}
      </div>
    </div>
  );
};

export default AllCoins;
