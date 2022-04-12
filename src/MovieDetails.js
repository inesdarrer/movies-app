import axios from './axios';
import React, { useState, useEffect} from 'react'
import './MovieDetails.css'
import MovieDetail from './MovieDetail';
import { useParams } from 'react-router-dom';

const MovieDetails = ({movies}, fetchUrl) => {
  const {id} = useParams();
  const [details, setDetails] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original";


  useEffect(() => {
    async function fetchData() {
        const request = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US`);
        setDetails(request.data.results);
        return request;
    }

    fetchData();
}, [fetchUrl]);

  const showDetails = (movie) =>{
      const movieDetails = [movie];
      setDetails(movieDetails);
  }
console.log(movies);
console.log(id);
 
 
  return (
<>
  <div className='details'>
      <h2>Details</h2>
  <div className='details-container'>
    {movies && movies
    .filter((movie) => movie.id === id)
    .map((movie) => (
      <MovieDetail 
      key={movie.id} 
      id = {movie.id}
      poster={`${base_url}${movie.poster_path}`} 
      title={movie.title} 
      movie={movie}
      handleDetails={showDetails}  
      overview={movie.overview} 
      release_date={movie.release_date}
      vote={movie.vote_average}             
        />
    ))}
  </div>
</div>

</>
    
  );
}

export default MovieDetails