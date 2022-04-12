import React, { useState } from 'react'
import Hero from './Hero'
import InfoSection from './InfoSection'
import FavouriteMovieList from './FavouriteMovieList'
import Row from './Row'
import MovieDetails from './MovieDetails'

const Home = () => {
    const [favourites, setFavourites] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";

    const addToFavourite = (movie) => {
        /*console.log('hey')
        setFavourite([...favourite, movie]);*/
        const newFavouriteMovie = [...favourites, movie];
        setFavourites(newFavouriteMovie);
    };
    return (
        <div>
            <Hero />
            <InfoSection />
            <Row />
            <MovieDetails/>
        </div>

    )
}

export default Home