import React, { useState, useEffect } from 'react'
import './Discover.css'
import requests from './Requests';
import axios from './axios';
import SingleMovie from './SingleMovie';
import Genres from './Genres';
import useGenres from './useGenres';
import './SearchGenres.css'

const SearchGenres = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [selectedGenres, setselectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const base_url = "https://image.tmdb.org/t/p/original";

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US&with_genres=${genreforURL}`);

        setGenres(data.genres);
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, [fetchUrl, genreforURL])

    return (
        <div className="filter-container">
            <Genres selectedGenres={selectedGenres} setselectedGenres={setselectedGenres} genres={genres} setGenres={setGenres} />
            <div className="row-posters">
                {movies && movies.map(movie => (
                    <SingleMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} />
                ))}
            </div>
        </div>
    )
}

export default SearchGenres