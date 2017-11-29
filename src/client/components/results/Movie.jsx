import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const url = `/movies/${props.movie.id}`;
    const posterURL = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;

    return (
        <div className="col-md-3 mb1">
            <div className="movie">
                <div className="movie-description-rating">{props.movie.vote_average}</div>
                <div className="movie-picture">
                    <Link to={url}>
                        <img src={posterURL} alt="Movie Poster" />
                    </Link>
                </div>
                <div className="movie-description">
                    <div className="movie-description-year">
                        Year: {props.movie.release_date}
                    </div>
                    <div className="movie-description-title mb1">
                        <h3><Link to={url}>{props.movie.title}</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
      movie: PropTypes.shape({ id: PropTypes.number,
      release_date: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired,
};

export default Movie;
