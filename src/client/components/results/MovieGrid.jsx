import React from 'react';
import Movie from './Movie';
import Filters from '../filtering/Filters';

function sortBy(key, reverse) {

    var moveSmaller = reverse ? 1 : -1;
    var moveLarger = reverse ? -1 : 1;

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

function sortByYear(a, b) {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
}

class MovieGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            database:this.props.database,
            sortBy:this.props.sortByFlag,
        };
    }

    renderMovies() {

        const sorted = [...this.state.database];
        console.log('before sorting',sorted);

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
            return <Movie key={movie.title} movie={movie}/>
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

                    <div className="movies-gid-content mt1">
                        { this.renderMovies() }
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGrid;
