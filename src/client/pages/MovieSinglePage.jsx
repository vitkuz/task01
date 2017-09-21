import * as React from 'react';
import HeaderMovie from '../components/sections/HeaderMovieSingle';
import MovieGrid from '../components/results/MovieGrid';

export default class Posts extends React.Component{
    render(){
        return (
            <div>
                <HeaderMovie />
                <MovieGrid database={this.props.database} updateSortBy={this.props.updateSortBy} sortByFlag={this.props.sortByFlag} />
            </div>
        );
    }
}