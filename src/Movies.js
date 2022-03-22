import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Movie.css'
import SingleMovie from './SingleMovie';
import useGenres from './useGenres';

const Movies = ({ movie }) => {
    const [movies, setMovies] = useState([]);
    const [selectedGenres, setselectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const base_url = "https://image.tmdb.org/t/p/original";

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US&with_genres=${genreforURL}`);
    };

    useEffect(() => {
        fetchMovies();
    })

    console.log(movies);
    return (
        <div className='row'>
            <div className="row-posters">
                {movies && movies.map(movie => (
                    <SingleMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} />
                ))}
            </div>
        </div>

    )
}


export default Movies