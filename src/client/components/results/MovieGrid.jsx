import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    renderMovies() {
        const sorted = [...this.props.database];
        const activeFilter = this.props.filters.find((filter) => {
            return filter.active === true;
        });
        sorted.sort(sortBy(activeFilter.type, activeFilter.sortDir));
        return sorted.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
        });
    }

    render() {
        if (!this.props.database) {
            return (
                <div className="section movies-gid-content mt1">
                    <div className="section-content">
                        <div className="loader" />
                    </div>
                </div>
            );
        }
        if (typeof this.props.database === 'string') {
            return (
                <div className="section movies-gid-content mt1">
                    <div className="section-content">
                        Noting found.
                    </div>
                </div>
            );
        }
        return (
            <section className="section movies mt1">
                <div className="section-content">

                    <Filters />

                    <div className="row movies-gid-content mt1">
                        { this.renderMovies() }
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters,
        database: state.searchResults.byId,
    };
}

MovieGrid.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  database: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(MovieGrid);
