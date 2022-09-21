import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import "./topCoin.css";

const CoinItem = ({ coin }) => {
  return (
    <tr className="coinRow">
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="coinName">
            <img src={coin.image} alt={coin.id} className="coinImg" />
            <p>{coin.name}</p>
          </div>
        </Link>
      </td>
      <td className="coinHiddenOnSmall">{coin.symbol.toUpperCase()}</td>
      <td>$ {coin.current_price.toLocaleString()}</td>
      <td className="coinHiddenOnSmall">
        {coin.price_change_percentage_24h > 0 ? (
          <p className="green">
            +{coin.price_change_percentage_24h.toFixed(3)} %
          </p>
        ) : (
          <p className="red">{coin.price_change_percentage_24h.toFixed(3)} %</p>
        )}
      </td>
      <td className="coinHiddenOnMid">
        $ {coin.total_volume.toLocaleString()}
      </td>
      <td className="coinHiddenOnMid">$ {coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
