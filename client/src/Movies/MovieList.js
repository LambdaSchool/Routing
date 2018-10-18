import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"; /*Importing the link component (replacement for anchor tag) from react router dom*/
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <Link to={`/movies/${movie.id}`}><MovieCard key={movie.id} movie={movie} /></Link> /*Wrapped in a link tag that makes the MovieDetails component a link, and setting the link to lead to /movies/${movie.id} which will generate the movie a unique link at id*/
        ))}
      </div>
    );
  }
}
