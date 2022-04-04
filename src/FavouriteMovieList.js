import React, { useState, useEffect } from 'react'
import SingleMovie from './SingleMovie';
import AddFavourites from './AddFavourites';
import axios from './axios'

function FavouriteMovieList({ fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [favourite, setFavourite] = useState([]);
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
        const favourites = JSON.parse(localStorage.getItem('favourite'));
        if (favourites) {
            setFavourite(favourites);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourites));
    }, [favourites]);

    /**const addToFavourite = (movie) => {
        console.log(favourites);
        setFavourites(prevFavourite => {
            return [...prevFavourite, movie]
        })
    }**/

    const addToFavourite = (movie) => {
        /*console.log('hey')
        setFavourite([...favourite, movie]);*/
        const newFavouriteMovie = [...favourites, movie];
        setFavourites(newFavouriteMovie);
    };

    console.log(movies);
    console.log(favourites);

    return (
        <div className='row'>
            <h2>Favourites</h2>
            <div className="row-posters">
                {favourites && favourites.map(movie => (
                    <SingleMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} movie={movie}
                        handleClick={addToFavourite}
                    />
                ))}
            </div>
        </div>
    )
}

export default FavouriteMovieList