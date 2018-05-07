import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route, Link } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log("addToSavedList invoked");
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    const addToSavedList = this.addToSavedList;
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path="/" component={MovieList} />
        {/* <Route path="/movies/:id" component={Movie} /> */}
        <Route path="/movies/:id" render={ props => (
          <Movie {...props} addSaved={addToSavedList} />
        ) } />
      </div>
    );
  }
}
