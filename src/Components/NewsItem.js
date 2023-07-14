import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, content, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "92%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2023/07/08/1600x900/c3b1b54af979401cb87d165ae5a0783fjpg_1652663198052_1688784023896.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{content}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn sm"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
