import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = (props) => {
    const {id} = useParams();
    console.log(id);

    //console.log(title);
    console.log(props);
    return(
        <div className='details'>
        <div className='details-container'>
          <div className='details-img'>
          <img
               onClick={()=> props.handleDetails(props.movie)}
               src={props.poster}
               alt={props.title}   
                  />
          </div>
          <div className='details-info'>
            <h2>{props.title}</h2>
            <h3>Average vote: {props.vote}</h3>
            <h4>Release date: {props.release_date}</h4>
            <p>Overview: {props.overview}</p>
          </div>
        </div>
      
      </div>
    )
}

export default MovieDetail