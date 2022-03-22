import axios from 'axios';
import React, { useState, useEffect } from 'react'


const MovieDetails = ({ id }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US`
        );

        setData(data);
        // console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className='movie-container' key={data.id}>
                <div>
                    <img className='movie-image' src={data.poster_path} alt='' />
                </div>
                <div>
                    <h1 className='title'>{data.title}</h1>
                    <h2>{data.original_title}</h2>
                    <p>{data.description}</p>
                    <p>
                        <strong>Release date:</strong> {data.release_date}
                    </p>
                    <p>
                        <strong>Producer:</strong> {data.producer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails