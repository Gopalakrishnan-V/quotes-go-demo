import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { isMobile } from "react-device-detect";

export class QuotesList extends Component {
  render() {
    const { quotes, next, hasMore, handleAuthorOnClick } = this.props;
    return (
      <InfiniteScroll
        dataLength={quotes.length}
        next={next}
        hasMore={hasMore}
        className="column dark-bg"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {quotes.map((quote, index) => {
          const { text, author } = quote;
          return (
            <div
              className={"column"}
              key={index}
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
                marginBottom: 20,
                paddingTop: 30,
                paddingBottom: 30,
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "80%" : "20%",
                borderRadius: 20,
                border: "1px solid #ffffff11"
              }}
            >
              <img
                src={author.avatar}
                alt=""
                className="author-avatar"
                style={{ cursor: "pointer" }}
                onClick={() => handleAuthorOnClick(author.id)}
              />
              <span
                className="quote-text"
                style={{ marginLeft: 25, marginRight: 25, marginTop: 20 }}
              >
                {text}
              </span>
              <span
                style={{ marginTop: 15, cursor: "pointer" }}
                onClick={() => handleAuthorOnClick(author.id)}
              >
                - {author.name}
              </span>
            </div>
          );
        })}
      </InfiniteScroll>
    );
  }
}

export default QuotesList;
