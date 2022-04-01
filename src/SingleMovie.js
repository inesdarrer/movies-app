import './SingleMovie.css'
import { Link } from "react-router-dom";
import axios from './axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import AddFavourites from './AddFavourites';


const SingleMovie = ({ id, title, poster, movie }) => {

    const [favourite, setFavourite] = useState([]);
    const [showFavourite, setShowFavourite] = useState(['movies']);

    const addToFavourite = (movie) => {
        console.log(favourite);
        const newFavouriteList = [...favourite, movie];
        setFavourite(newFavouriteList)
    }

    useEffect(() => {
        const favourite = JSON.parse(localStorage.getItem('favourite'));
        if (favourite) {
            setFavourite(favourite);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite));
    }, [favourite]);



    return (
        <div className='row-poster'>
            <button>Favorite({favourite.length})</button>
            <div onClick={() => addToFavourite(movie)}
                className='fav-container'>
                <AddFavourites />
            </div>
            <img src={poster} alt={title} />

        </div>
    )

}

export default SingleMovie