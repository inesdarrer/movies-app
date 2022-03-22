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
import Filter from './Filter';
import Row from './Row';
import requests from './Requests';
import Header from './Header';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Home from './Home';
import Discover from './Discover';
import SearchGenres from './SearchGenres';
import SingleMovie from './SingleMovie';
import MovieDetails from './MovieDetails';

const App = () => {

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US&page=1";

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

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
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/search-genres' element={<SearchGenres />} />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
          <Route path='/search-movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
