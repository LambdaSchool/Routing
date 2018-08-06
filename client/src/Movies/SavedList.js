import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        ))}
        <Link className="home-button" to="/">
          Home
        </Link>
      </div>
    );
  }
}
