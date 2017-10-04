import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const url = `/movies/${props.movie.unit}`;

    return (
        <div className="col-md-3 mb1">
            <div className="movie">
                <div className="movie-description-rating">Rating: {props.movie.rating}</div>
                <div className="movie-picture">
                    <Link to={url}>
                        <img src={props.movie.poster} alt="Movie Poster" />
                    </Link>
                </div>
                <div className="movie-description">
                    <div className="movie-description-year">
                        Year: {props.movie.release_year}
                    </div>
                    <div className="movie-description-title mb1">
                        <h3><Link to={url}>{props.movie.show_title}</Link></h3>
                    </div>
                    <div className="movie-description-category">Cat: {props.movie.category}</div>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
      movie: PropTypes.shape({ unit: PropTypes.number,
      release_year: PropTypes.number,
      show_title: PropTypes.string,
      category: PropTypes.string,
      poster: PropTypes.string,
      rating: PropTypes.string,
    }).isRequired,
};

export default Movie;
