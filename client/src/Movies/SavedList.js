import React from 'react';
import { Link } from "react-router-dom";

export default function SavedList(props) {
  console.log("propsss", props);
  return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			{props.list.map((movie) => (
				<span className="saved-movie">{movie.title}</span>
			))}
			<div className="home-button">
				<Link to="/">Home</Link>
			</div>
		</div>
	);
}
