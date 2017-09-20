import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';
import Filters from '../filtering/Filters';


function sortBy(key, reverse) {
    const moveSmaller = reverse ? 1 : -1;
    const moveLarger = reverse ? -1 : 1;

    return function (a, b) {
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
        console.log('before sorting', sorted);

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
        console.log('after sorting',sorted);

        return sorted.map((movie, i) => {
            return <Movie key={movie.title} movie={movie} />
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
        console.log('render');
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
    database: PropTypes.array.isRequired,
    sortByFlag: PropTypes.string.isRequired,
    updateSortBy: PropTypes.func.isRequired,
};

export default MovieGrid;
