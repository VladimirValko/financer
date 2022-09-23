import React from "react";
import "./newsItem.css";

const NewsItem = ({ data }) => {
  const formatedDate = new Date(data.publishedAt);
  const date = formatedDate.toLocaleDateString();

  return (
    <div className="newsItem">
      <div className="newsItemTitle">
        <a href={data.url} target="blank">
          <h3>{data.title}</h3>
        </a>
      </div>
      <div className="newsItemImg">
        <a href={data.url} target="blank">
          <img src={data.urlToImage} alt={data.title} className="image" />
        </a>
      </div>
      <div className="textPart">
        <div className="dateAuthor">
          <p className="author">
            {" "}
            written by <span>{data.author}</span>
          </p>
          <p>{date}</p>
        </div>

        <div className="newsItemDescription">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
