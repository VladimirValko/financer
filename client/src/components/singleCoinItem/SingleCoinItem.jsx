import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./singleCoinItem.css";

const SingleCoinItem = ({ coin }) => {
  return (
    <div className="coinWrapper">
      <div className="coinNameImg">
        <Link to={`/coin/${coin.id}`}>
          <div>
            <img src={coin.image} alt={coin.id} />
          </div>
        </Link>
      </div>
      <div>
        <p>{coin.name}</p>
      </div>
      <div>
        <p>$ {coin.current_price.toLocaleString()}</p>
      </div>
      <div>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="green">
            +{coin.price_change_percentage_24h.toFixed(2)} %
          </p>
        ) : (
          <p className="red">{coin.price_change_percentage_24h.toFixed(2)} %</p>
        )}
      </div>
    </div>
  );
};

export default SingleCoinItem;
