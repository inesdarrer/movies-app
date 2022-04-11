import axios from './axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './MovieDetails.css'

const MovieDetails = ({movies}) => {
  let {title } = useParams();
  
  console.log(title);
  return (
    <div className="details">
     <h1>Movie Details</h1>
     {movies.filter((movie) => movie.title === title)
     .map((movie)=>(
       <div className='details-container' key={movie.id}>
         <h2>{title}</h2>
       </div>
     ))}
        </div>
    
  );
}

export default MovieDetails