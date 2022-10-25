import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopCoin from "./TopCoin";
import "./topCoinsStat.css";

const TopCoinsStat = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="topCoinsContainer">
      <div className="topCoinsWrapper">
        <table className="topCoinsTable">
          <thead>
            <tr className="tHeadR">
              <th></th>
              <th className="thNum">#</th>
              <th className="thCoin">Coin</th>
              <th className="hiddenOnSmall"></th>
              <th>Price</th>
              <th className="hiddenOnSmall">24H</th>
              <th className="hiddenOnMid">24H Volume</th>
              <th className="hiddenOnMid">Market</th>
              <th>Last 7 days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              ?.slice(0, 10)
              .filter((value) => {
                if (searchText === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <TopCoin coin={coin} key={coin.id} />
              ))}
          </tbody>
        </table>
      </div>
      <div className="seeAllBtn">
        <Link to="/allCoins">
          <button>Show all coins</button>
        </Link>
      </div>
    </div>
  );
};

export default TopCoinsStat;
