import React, { Component } from "react";
import { withRouter } from "react-router";
import { getAuthorQuotes } from "quotes-go";
import QuotesList from "../components/QuotesList";

export class AuthorScreen extends Component {
  state = { quotes: [] };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const authorQuotes = getAuthorQuotes(id);

    if (authorQuotes) {
      const { name, shortDesc, avatar } = authorQuotes;
      const quotes = authorQuotes.quotes.map(item => {
        return {
          ...item,
          author: {
            name,
            shortDesc,
            avatar
          }
        };
      });
      this.setState({ quotes });
    }
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
          hasMore={false}
          next={null}
          handleAuthorOnClick={this.handleAuthorOnClick}
        />
      </div>
    );
  }
}

export default withRouter(AuthorScreen);
