import './SingleMovie.css'
import { Link } from "react-router-dom";
import React from 'react'
import AddFavourites from './AddFavourites';
import MovieDetails from './MovieDetails';

const SingleMovie = (props) => {
    return (
        <>
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
        </>
        
        

    )

}

export default SingleMovie