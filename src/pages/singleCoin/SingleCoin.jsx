import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import "./singleCoin.css";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  console.log(params);

  const URL = `https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&sparkline=true`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setCoin(response.data))
      .catch((err) => console.log(err));
  }, [URL]);

  console.log(coin);

  return (
    <div className="coinPageWrapper">
      <div className="coinPriceImgWrapper">
        <img src={coin.image?.large} alt={coin.id} />
        <div>
          <p className="coinPrice">{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD) </p>
        </div>
      </div>

      {/* GRID */}
      <div className="gridContainer">
        <div>
          <div className="currentPriceBlock">
            {coin.market_data?.current_price ? (
              <p className="pBold">
                $ {coin.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Days</p>
          </div>
          {/* sparkline */}
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          {/* sparkline */}
          {/* Market-Cap */}
          <div className="marketCapBlock">
            <div>
              <p className="textGray">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="vol24">
              <p className="textGray">Volume 24H </p>
              {coin.market_data?.market_cap ? (
                <p>$ {coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          {/* Market-Cap */}
          {/* 24H hi-low */}
          <div className="hiLowBlock">
            <div>
              <p className="textGray">24H High</p>
              {coin.market_data?.high_24h ? (
                <p>$ {coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="textEnd">
              <p className="textGray">24H Low</p>
              {coin.market_data?.high_24h ? (
                <p>$ {coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          {/* 24H hi-low */}
        </div>
        {/* Market stats */}
        <div>
          <p className="textTitle">Market Stats</p>
          <div className="marketStatsBlock">
            <div className="textStart">
              <p className="textGray">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div className="textCenter">
              <p className="textGray">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div className="textEnd">
              <p className="textGray">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>
          {/* Price change 24h-7days */}
          <p className="textTitle">Price change</p>
          <div className="priceBlock textStart">
            <div className="textStart">
              <p className="textGray">24h</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)} %
                </p>
              ) : null}
            </div>
            <div className="textCenter">
              <p className="textGray">7 days</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_7d.toFixed(2)} %
                </p>
              ) : null}
            </div>
            <div className="textEnd">
              <p className="textGray">14 days</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)} %
                </p>
              ) : null}
            </div>
          </div>
          {/* Price change 24h-7days*/}
          {/* Price change 30d-1year*/}
          <div className="priceBlock text-center">
            <div className="textStart">
              <p className="textGray">30 days</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)} %
                </p>
              ) : null}
            </div>
            <div>
              <p className="textGray">60 days</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)} %
                </p>
              ) : null}
            </div>
            <div className="textEnd">
              <p className="textGray">1 year</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_1y.toFixed(2)} %
                </p>
              ) : null}
            </div>
          </div>
          {/* Price change 30d-1year*/}
        </div>
        {/* Market stats */}
      </div>
      {/* Description */}
      <div className="description">
        {coin.description && (
          <p className="descriptionTitle">About {coin.name}</p>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
      {/* Description */}
      {/* GRID */}
    </div>
  );
};

export default CoinPage;
