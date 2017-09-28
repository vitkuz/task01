import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const url = `/movies/${props.movie.id}`;

    return (
        <div className="col-md-3 mb1">
            <div className="movie">
                <div className="movie-picture">
                    <Link to={url}>
                        <img src={props.movie.img} alt="Movie Poster" />
                    </Link>
                </div>
                <div className="movie-description">
                    <div className="movie-description-year">
                        Year: {props.movie.year}
                    </div>
                    <div className="movie-description-title mb1">
                        <h3><Link to={url}>{props.movie.title}</Link></h3>
                    </div>
                    <div className="movie-description-category">Cat: {props.movie.category}</div>
                    <div className="movie-description-rating">Rating: {props.movie.rating}</div>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
      movie: PropTypes.shape({ img: PropTypes.string,
      id: PropTypes.number,
      year: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired,
};

export default Movie;
