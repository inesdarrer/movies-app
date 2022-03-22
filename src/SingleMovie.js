import './SingleMovie.css'
import { Link } from "react-router-dom";
import axios from './axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const SingleMovie = ({ id, title, poster, date, vote_average, fetchUrl }) => {

    return (
        <div>
            <Link to={`/movie-details/${id}`}>
                <img className='row-poster' src={poster} alt={title} />
            </Link>
        </div>
    )

}

export default SingleMovie