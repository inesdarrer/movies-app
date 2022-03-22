import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import SingleMovie from './SingleMovie';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters">
                {movies && movies.map(movie => (
                    <SingleMovie key={movie.id} poster={`${base_url}${movie.poster_path}`} title={movie.title} />
                ))}
            </div>
        </div>
    )
}

export default Row