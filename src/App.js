import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css';
import Movies from './Movies';
import Row from './Row';
import Header from './Header';
import Home from './Home';
import Discover from './Discover';
import SearchGenres from './SearchGenres';
import MovieDetails from './MovieDetails';
import FavouriteMovieList from './FavouriteMovieList';
import axios from './axios';



const App = (fetchUrl) => {

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US&page=1";

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [favourites, setFavourites] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setData(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const addToFavourite = (movie) => {
    /*console.log('hey')
    setFavourite([...favourite, movie]);*/
    const newFavouriteMovie = [...favourites, movie];
    setFavourites(newFavouriteMovie);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover handleClick={addToFavourite} />} />
          <Route path='/search-genres' element={<SearchGenres />} />
          <Route path='/movie-details/:title' render={(props) => <MovieDetails {...props}
          movies={movies}
          />} />
          <Route path='/search-movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
