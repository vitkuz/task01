import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    return (
        <div className="movie">
            <div className="movie-picture">
                <img src={props.movie.img} alt="Movie Poster"/>
            </div>
            <div className="movie-description">
                <div className="movie-description-year">
                    {props.movie.year}
                </div>
                <div className="movie-description-title">
                    <h3>{props.movie.title}</h3>
                </div>
                <div className="movie-description-category">{props.movie.category}</div>
            </div>

        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;
