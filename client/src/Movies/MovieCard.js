import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  console.log("props card", props);
  const { title, director, metascore, stars } = props
  return (
    <div className='save-wrapper'>
      <div className='movie-card'>
        <Link to={`/movies/${props.id}`}>{title}</Link>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className='movie-star'>
            {star}
          </div>
        ))}
      </div>
      <div className='save-button' onClick={() => props.save(props)}>Save</div>
      {/* Still throwing that error message. I'll try to zoom today during project time to see if we can work it out */}
    </div>
  )
}

export default MovieCard
