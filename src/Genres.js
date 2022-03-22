import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from './Filter';

const Genres = ({ selectedGenres, setselectedGenres, genres, setGenres }) => {

    const handleAdd = (genre) => {
        setselectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
    }

    const handleRemove = (genre) => {
        setselectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=53ef5f1fc09cf34375c074568d7f94d8&language=en-US`);

        setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, [])

    return (
        <div className='filter' >
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    key={genre.id}
                    label={genre.name}
                    color="primary"
                    clickable onDelete={() => handleRemove(genre)} />

            ))}
            {genres && genres.map((genre) => (
                <Chip
                    key={genre.id}
                    label={genre.name}
                    clickable onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    )
}

export default Genres