import React, { useState, useEffect } from "react";
import axios from "axios";
import "./allCoins.css";
import SingleCoinItem from "../../components/singleCoinItem/SingleCoinItem";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ReactPaginate from "react-paginate";

const AllCoins = () => {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 21;

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

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(coins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(coins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, coins]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coins.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="allCoinsWrapper">
      <div>
        <p className="allCryptoTitle" id="top">
          All Crypto Coins
        </p>
      </div>
      <div className="serchWrapper">
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
        {currentItems &&
          currentItems
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
              <Link to={`/coin/${coin.id}`} key={coin.id}>
                <SingleCoinItem coin={coin} className="coin" />
              </Link>
            ))}
      </div>
      <div className="paginationFull">
        <ScrollLink
          activeClass="active"
          to="top"
          spy={true}
          smooth={false}
          duration={200}
        >
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="paginateFull"
          />
        </ScrollLink>
      </div>
      <div className="paginationMobile">
        <ScrollLink
          activeClass="active"
          to="top"
          spy={true}
          smooth={false}
          duration={200}
        >
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="paginateMobile"
          />
        </ScrollLink>
      </div>
    </div>
  );
};

export default AllCoins;
