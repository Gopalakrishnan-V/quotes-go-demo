import React, { Component } from "react";
import { getRandomQuote } from "quotes-go";
import QuotesList from "../components/QuotesList";
import { withRouter } from "react-router";

export class MainScreen extends Component {
  state = {
    quotes: []
  };

  componentDidMount = () => {
    this.addMoreQuotes();
  };

  addMoreQuotes = () => {
    const newQuotes = [];
    for (let i = 0; i < 100; i++) {
      newQuotes.push(getRandomQuote());
    }
    this.setState({ quotes: [...this.state.quotes, ...newQuotes] });
  };

  handleAuthorOnClick = authorId => {
    if (authorId) {
      this.props.history.push(`/authors/${authorId}`);
    }
  };

  render() {
    const { quotes } = this.state;
    return (
      <div className="screen-wrapper">
        <QuotesList
          quotes={quotes}
          hasMore
          next={this.addMoreQuotes}
          handleAuthorOnClick={this.handleAuthorOnClick}
        />
      </div>
    );
  }
}

export default withRouter(MainScreen);
