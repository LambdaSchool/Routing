import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    const filteredList = movieList.filter((item) => item.id === id)[0];

    const list = [...saved, filteredList];

    setSaved(list);

  };

  const removeFromSavedList = id => {
    const list = saved.filter((item) => item.id !== id);


    setSaved(list);

  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div></div>
      <div>
        <Route path="/movies/:id" component={Movie}>

        </Route>
        <Route exact path="/" >
          <MovieList movies={movieList}/>
          <Movie addToSavedList={addToSavedList} saved={saved} removeFromSavedList={removeFromSavedList} />
        </Route>
      </div>
    </div>
  );
}
