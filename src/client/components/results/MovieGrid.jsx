import React from 'react';
import Movie from './Movie';

class MovieGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMovies() {
        return this.props.movies.map((movie,i) => {
            return <Movie key={i} movie={movie} />
        });
    }

    render() {
        if (!this.props.movies) {
            return (
                <div className="movies-gid-content mt1">
                    <div>Loading...</div>
                </div>

            );
        }

        return (
            <div className="movies-gid-content mt1">
                { this.renderMovies() }
            </div>
        );
    }
}

export default MovieGrid;