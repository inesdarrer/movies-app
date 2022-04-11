import axios from './axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './MovieDetails.css'

const MovieDetails = ({movies}) => {
  let {title } = useParams();
  const detail = movies;
  console.log(title);

  const {overview} = detail;

  return (
    <div className="details">
     <h1>Movie Details</h1>
     <h2>{title}</h2>
        </div>
    
  );
}

export default MovieDetails