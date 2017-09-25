import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';
import Filters from '../filtering/Filters';


function sortBy(key, reverse) {
    const moveSmaller = reverse ? 1 : -1;
    const moveLarger = reverse ? -1 : 1;

    return function sort(a, b) {
        if (a[key] < b[key]) {
            return moveSmaller;
        }
        if (a[key] > b[key]) {
            return moveLarger;
        }
        return 0;
    };
}

class MovieGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            database: props.database,
            sortBy: props.sortByFlag,
        };
    }

    renderMovies() {
        const sorted = [...this.state.database];

        switch (this.props.sortByFlag) {
            case 'year':
                sorted.sort(sortBy('year'));
                break;
            case 'rating':
                sorted.sort(sortBy('rating'));
                break;
            default:
                break;
        }

        return sorted.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
        });
    }

    render() {
        if (!this.state.database) {
            return (
                <div className="movies-gid-content mt1">
                    <div>Loading...</div>
                </div>

            );
        }

        return (
            <section className="section movies mt1">
                <div className="section-content">

                    <Filters updateSortBy={this.props.updateSortBy} />

                    <div className="row movies-gid-content mt1">
                        { this.renderMovies() }
                    </div>
                </div>
            </section>
        );
    }
}

MovieGrid.propTypes = {
    database: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortByFlag: PropTypes.string.isRequired,
    updateSortBy: PropTypes.func.isRequired,
};

export default MovieGrid;
