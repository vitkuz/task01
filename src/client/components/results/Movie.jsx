import React from 'react';

const Movie = () => {
    return (
        <div className="movie">
            <div className="movie-picture">
                <img src={this.props.movie.img} alt="Movie Poster"/>
            </div>
            <div className="movie-description">
                <div className="movie-description-year">
                    {this.props.movie.year}
                </div>
                <div className="movie-description-title">
                    <h3>{this.props.movie.title}</h3>
                </div>
                <div className="movie-description-category">{this.props.movie.category}</div>
            </div>

        </div>
    );
}

export default Movie;
