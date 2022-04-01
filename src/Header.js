import React, { useEffect, useState } from 'react'
import logo from './header/JustWatch-logo-large.webp'
import searchIcon from './header/search.png'
import './Header.css'
import axios from './axios';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SingleMovie from './SingleMovie';
import FavouriteMovie from './FavouriteMovie';
import AddFavourites from './AddFavourites';
import Row from './Row';


const Header = ({ movie, fetchUrl }) => {
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US&query=${searchText}&include_adult=false`
            );
            setMovies(data.results);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        fetchSearch();
    }, []);

    const addToFavourite = (movie) => {
        console.log(favourite);
        setFavourite([...favourite, movie])
    }

    return (
        <div className='header'>
            <div className="header-items">
                <div className='logoContainer'>
                    <NavLink to="/" > <img src={logo} className='logo' alt='' /> </NavLink>
                </div>
                <div className="searchBar">
                    <input onChange={(e) => setSearchText(e.target.value)} className='searchInput' placeholder='Pretražite filmove' />
                    <Button
                        onClick={fetchSearch}
                        variant="contained">
                        <SearchIcon />
                    </Button>

                </div>
                <div className="favourites">
                    <div className="favourites-dropdown">
                        <SingleMovie movies={movies}
                            favoriteComponent={AddFavourites}
                            handleFavouritesClick={addToFavourite} />
                        <FavouriteMovie />
                    </div>
                </div>
            </div>
            <div className="trending">
                {movies &&
                    movies.map((movie) => (
                        <SingleMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} />
                    ))}
            </div>
        </div>
    )
}

export default Header