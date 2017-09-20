import React from 'react';
import Movie from './Movie';

class MovieGrid extends React.Component {
    renderMovies() {
        return this.props.movies.map((movie, i) => {
            return <Movie key={movie.title} movie={movie}/>
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
            <section className="section movies mt1">
                <div className="section-content">
                    <div className="movies-gid-content mt1">
                        { this.renderMovies() }
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGrid;