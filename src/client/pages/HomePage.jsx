import * as React from 'react';
import HeaderSearch from '../components/sections/HeaderSearch';
import MovieGrid from '../components/results/MovieGrid';

export default class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderSearch  updateSearchBy={this.props.updateSearchBy} searchByFlag={this.props.searchByFlag} handleSearch={this.props.handleSearch} />
                <MovieGrid database={this.props.database} updateSortBy={this.props.updateSortBy} sortByFlag={this.props.sortByFlag} />
            </div>
        );
    }
}