import { SettingsRemoteSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import AddFavourites from './AddFavourites';
import axios from './axios'
import './Row.css'
import SingleMovie from './SingleMovie';

function Row({ movie, favorite, title, fetchUrl, props }) {
    const [movies, setMovies] = useState([]);
    const [favourite, setFavourite] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        const favourite = JSON.parse(localStorage.getItem('favourite'));
        if (favourite) {
            setFavourite(favourite);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite));
    }, [favourite]);

    const addToFavourite = (movie) => {
        console.log(favourite);
        setFavourite([...favourite, movie])
    }

    console.log(movies);
    console.log(favourite);


    return (
        <div className='row'>
            <h2>{title}</h2>
            <button>Favorite({favourite.length})</button>
            <div onClick={() => props.handleFavouritesClick(movie)} className="row-posters">
                {movies && movies.map(movie => (
                    <SingleMovie movie={movie} key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} favouriteComponent={AddFavourites} />

                ))}
            </div>

        </div >
    )
}

export default Row