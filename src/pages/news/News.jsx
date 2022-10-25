import React, { useState, useEffect } from "react";
import NewsItem from "../../components/newsItem/NewsItem";
import { Link as ScrollLink } from "react-scroll";
import ReactPaginate from "react-paginate";
import "./news.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const getNews = async () => {
      const apiNews = await axios.get(
        `https://newsapi.org/v2/everything?q=Crypto&from=2022-10-25&sortBy=popularity&apiKey=67d2c0e4c9f046bbb4ad55012fc182bc`
      );
      setNews(apiNews.data.articles);
    };
    getNews();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(news?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, news]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="newsPageWrapper">
      <div className="newsPageTitle">
        <p id="top">Crypto News</p>
      </div>
      <div className="newsItemsWrapper">
        {currentItems &&
          currentItems.map((article, i) => <NewsItem data={article} key={i} />)}
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

export default News;
