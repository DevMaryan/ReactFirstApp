import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

export function Movies(props){
    console.log(props)
    return(
        <div id="movies">
            {props.movies.map((movie, i) => {
                return(
                    <div id="box" key={i}>
                        <a href={movie.imbdLink}>
                            <img src={movie.imgUrl} alt=""/>
                            <h3>{movie.name}</h3>
                            <p className="genre">{movie.genre}</p>
                            <span className="date">{movie.date}</span>
                        </a>
                    </div>
                )
            })
            }
        </div>   
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}