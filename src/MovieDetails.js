import axios from './axios';
import React, { useState} from 'react'
import { useParams } from "react-router-dom";
import './MovieDetails.css'
import SingleMovie from './SingleMovie';

const MovieDetails = ({movies}) => {
  const {title} = useParams();
  console.log(movies);
 console.log(title);
 

  return (
    
    <div className="details">
    <h1>Movie Details</h1>
    <h2>{title}</h2>
    <div className='details-container'>
    {movies
    .filter((movie) => movie.title === title)
    .map((movie)=>(
      <div className='details-container' key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={movie.poster}/>
      </div>
    ))}
    </div>

       </div>
    
  );
}

export default MovieDetails