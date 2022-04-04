import React, { useState } from 'react'
import Hero from './Hero'
import InfoSection from './InfoSection'
import FavouriteMovieList from './FavouriteMovieList'
import Row from './Row'

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
            <div className='row'>
                <h2>Favourites</h2>
                <div className="row-posters">
                    {favourites && favourites.map(movie => (
                        <FavouriteMovieList key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} movie={movie}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home