import React, { useState, useEffect } from 'react'
import Row from './Row'
import requests from './Requests';
import './Discover.css'
import axios from './axios';
import useGenres from './useGenres';
import { Favorite } from '@material-ui/icons';
import FavouriteMovieList from './FavouriteMovieList';

const Discover = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([]);
    const [selectedGenres, setselectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);
    const [favourites, setFavourites] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl, genreforURL]);

    console.log(movies);
    return (
        <div className='discover-movies'>
            <div className="discover">
                <FavouriteMovieList favourites={movies} />
                <Row title="Trending now" fetchUrl={requests.fetchTrending} movies={movies} />
                <Row title="Comedies" fetchUrl={requests.fetchComedies} />
                <Row title="Romance" fetchUrl={requests.fetchRomance} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
                <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            </div>

        </div>

    )
}

export default Discover