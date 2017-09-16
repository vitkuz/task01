import React from 'react';
import ToggleGroup from './components/utils/ToggleGroup';
import MovieGrid from './components/results/MovieGrid';
import Filters from './components/filtering/filters';
import Search from './components/search/search';

// utils function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function sortByDate(a,b) {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
}

function sortByRating(a,b) {
    if (a.rating < b.rating) {
        return -1;
    }
    if (a.rating > b.rating) {
        return 1;
    }
    return 0;
}

const database = [
    {title: 'title 1', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:1},
    {title: 'title 2', year: '2012', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'222', rating:2},
    {title: 'title 3', year: '2013', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:3},
    {title: 'title 4', year: '2014', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'333', rating:4},
    {title: 'title 5', year: '2015', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'222', rating:5},
    {title: 'title 6', year: '2016', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:6},
    {title: 'title 7', year: '2017', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:7},
    {title: 'title 8', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:8},
    {title: 'title 9', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category:'123', rating:9},
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            database,
            search: '',
            searchBy: '',
        };
        this.update = this.update.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.sortByRate = this.sortByRate.bind(this);
    }

    update(e) {
        this.setState({ search: e.target.value });
    }

    sortByDate() {
        let currentData = [...this.state.database];
        currentData.sort(sortByDate);
        this.setState({database: currentData});
    }

    sortByRate() {
        let currentData = [...this.state.database];
        currentData.sort(sortByRating);
        this.setState({database: currentData});
    }

    render() {
        return (
            <div className="App container">
                <header className="mt1">
                    <h1><span className="glyphicon glyphicon-asterisk" />netflixroulette </h1>
                    <p>Find Your Movie</p>
                    <Search />
                </header>

                <Filters movies={this.state.database} byDate={this.sortByDate} byRating={this.sortByRate} />

                <MovieGrid movies={this.state.database} />

                <footer className="footer mt1">
                    footer / (c) 2018
                </footer>

            </div>
        );
    }
}

export default App;
