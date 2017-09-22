import * as React from 'react';
import PropTypes from 'prop-types';
import HeaderMovie from '../components/sections/HeaderMovieSingle';
import MovieGrid from '../components/results/MovieGrid';

class MovieSinglePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <HeaderMovie movie={this.props.database[this.props.match.params.id]} />
                <MovieGrid database={this.props.database} updateSortBy={this.props.updateSortBy} sortByFlag={this.props.sortByFlag} />
            </div>
        );
    }
}

MovieSinglePage.propTypes = {
    match: PropTypes.object.isRequired,
    database: PropTypes.array.isRequired,
    updateSortBy: PropTypes.func.isRequired,
    sortByFlag: PropTypes.func.isRequired,
};

export default MovieSinglePage;
