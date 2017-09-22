import * as React from 'react';
import HeaderMovie from '../components/sections/HeaderMovieSingle';
import MovieGrid from '../components/results/MovieGrid';

export default class MovieSinglePage extends React.Component {

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