import React from "react";
import "./Article.css";

const Article = ({ imgUrl, date, title, text }) => {
  return (
    <div className="gpt3__blog-containr_article">
      <div className="gpt3__blog-container-article_image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Article;
