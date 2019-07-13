import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { getAuthorsList } from "quotes-go";
import { withRouter } from "react-router";


export class AppHeader extends Component {
  state = {
    query: "",
    results: []
  };
  authors = getAuthorsList();

  handleTitleClick = () => {
    this.props.history.push("/");
  };

  handleSearchChange = query => {
    let results = [];

    this.authors.map(author => {
      if (author.name.toLowerCase().includes(query.toLowerCase().trim())) {
        results.push({
          id: author.id,
          title: author.name,
          description: author.shortDesc,
          image: author.avatar
        });
      }
      return null;
    });
    results = results.slice(0, 6);
    this.setState({ query, results });
  };

  render() {
    const { query, results } = this.state;

    return (
      <div
        className="row"
        style={{
          width: "100%",
          height: 55,
          background: "#151f2a",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <div
          className="row"
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={this.handleTitleClick}
        >
          <img
            src={
              "https://lh3.googleusercontent.com/I4fqd_tK0is6Rlr760krUH_ppAcxiMJMgdceXnxb_D2Gp8D4ECQ2p7aU-Z98Q1z3W8w=s360-rw"
            }
            style={{ height: 35 }}
            alt=""
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginLeft: 10,
              color: "white"
            }}
          >
            Quotes Go
          </span>
        </div>

        <Search
          placeholder={"Search Authors"}
          loading={false}
          onResultSelect={(e, value) => {
            const result = value.result;
            this.props.history.push(`/authors/${result.id}`);
            this.setState({ query: "", results: [] });
          }}
          onSearchChange={(e, { value }) => {
            this.handleSearchChange(value);
          }}
          results={results}
          value={query}
          style={{ paddingTop: 6 }}
        />
      </div>
    );
  }
}

export default withRouter(AppHeader);
