import React, { useState, useEffect } from 'react'
import SingleMovie from './SingleMovie';
import AddFavourites from './AddFavourites';

const FavouriteMovie = (movie) => {

    const [favourite, setFavourite] = useState([]);

    const addToFavourite = (movie) => {
        console.log(favourite);
        setFavourite([...favourite, movie])

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
        <div className="favourites">
            <div onClick={() => setFavourite(favourite)} className="favourites-dropdown">
                {favourite && favourite.map(movie => (
                    <SingleMovie movie={movie} key={movie.id} title={movie.title} favouriteComponent={AddFavourites} />

                ))}
            </div>
        </div>
    )
}

export default FavouriteMovie