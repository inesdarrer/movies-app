import { Movie, SettingsRemoteSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import AddFavourites from './AddFavourites';
import axios from './axios'
import FavouriteMovie from './FavouriteMovie';
import MovieDetails from './MovieDetails';
import './Row.css'
import SingleMovie from './SingleMovie';
import {Link} from 'react-router-dom'

function Row({ movie, favorite, title, fetchUrl, props }) {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);

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
        const favouriteMovies = JSON.parse(localStorage.getItem('favourite-movies'));
        if (favouriteMovies) {
            setFavourites(favouriteMovies);
        }
    }, [])


    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourite-movies', JSON.stringify(items));
    }

    const addToFavourite = (movie) => {
        /*console.log('hey')
        setFavourite([...favourite, movie]);*/
        const newFavouriteMovie = [...favourites, movie];
        setFavourites(newFavouriteMovie);
        saveToLocalStorage(newFavouriteMovie);
    };

    const removeFromFavourite = (movie) => {
        const newFavouriteMovie = favourites.filter((favourite) => favourite.id !== movie.id);

        setFavourites(newFavouriteMovie);
        saveToLocalStorage(newFavouriteMovie);
    }

    console.log(movies);
    console.log(favourites);


    return (
        
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">
                {movies && movies.map(movie => (
                    <Link to={`/movie-details/${movie.title}`}>
                    <SingleMovie 
                    key={movie.id} 
                    poster={`${base_url}${movie.poster_path}`} 
                    title={movie.title} 
                    movie={movie}
                    handleClick={addToFavourite}
                    overview={movie.overview}
                    /> 
                    
                    </Link>
                  
                ))}
            </div>
            <div className='row'>
                <h2>Favourites</h2>
                <div className="row-posters">
                    {favourites && favourites.map(movie => (
                        <FavouriteMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} movie={movie}
                            handleClick={removeFromFavourite}
                            
                        />
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Row