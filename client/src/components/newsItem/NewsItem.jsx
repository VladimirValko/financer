import React from "react";
import "./newsItem.css";

const NewsItem = ({ data }) => {
  const formatedDate = new Date(data.publishedAt);
  const date = formatedDate.toLocaleDateString();

  return (
    <div>
      <div className="newsItem">
        <div className="newsItemImg">
          <img src={data.urlToImage} alt={data.title} className="image" />
        </div>
        <div className="textPart">
          <div className="newsItemTitle">
            <h3>{data.title}</h3>
          </div>
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
    </div>
  );
};

export default NewsItem;
