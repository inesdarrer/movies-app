import './SingleMovie.css'
import { Link } from "react-router-dom";
import React from 'react'
import AddFavourites from './AddFavourites';

const SingleMovie = (props) => {

    return (
        <>
        <Link to={`/movie-detail/${props.id}`}>        
        <div className='row-poster'>
            <div
                onClick={() => props.handleClick(props.movie)}
                className='fav-container'>
                <AddFavourites />
            </div>
            <img
                onClick={()=> props.handleDetails(props.movie)}
                src={props.poster}
                alt={props.title}   
            />
        </div>
        </Link>
        

        </>
        
        

    )

}

export default SingleMovie