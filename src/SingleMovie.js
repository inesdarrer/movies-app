import './SingleMovie.css'
import { Link } from "react-router-dom";
import axios from './axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import AddFavourites from './AddFavourites';


const SingleMovie = (props, movie) => {
    return (
        <div className='row-poster'>
            <div
                onClick={() => props.handleClick(props.movie)}
                className='fav-container'>
                <AddFavourites />
            </div>
            <img
                src={props.poster}
                alt={props.title}
            />

        </div>
    )

}

export default SingleMovie