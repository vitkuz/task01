import React from 'react';

// Import components
import MovieGrid from './components/results/MovieGrid';

import HeaderSearch from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import Footer from './components/sections/Footer';


// utils function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log('json', json);
        });
}

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log('json', json);
        });
}

const database = [
    { title: 'title 1', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 9 },
    { title: 'title 2', year: '2012', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '222', rating: 2 },
    { title: 'title 3', year: '2013', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 1 },
    { title: 'title 4', year: '2014', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '333', rating: 4 },
    { title: 'title 5', year: '2015', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '222', rating: 1 },
    { title: 'title 6', year: '2016', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 2 },
    { title: 'title 7', year: '2017', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 7 },
    { title: 'title 8', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 8 },
    { title: 'title 9', year: '2011', img: `http://via.placeholder.com/350x500/${getRandomColor()}`, category: '123', rating: 9 },
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy:'rating',
            searchBy:'comments',
            database,
        };
        this.updateSortBy = this.updateSortBy.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    updateSortBy(flag) {
        console.log('flag', flag);
        this.setState({sortBy: flag});
        console.log(this.state.sortBy);
    }

    updateSearchBy(flag) {
        console.log('flag',flag);
        this.setState({searchBy:flag});
    }

    handleSearch(value) {
        switch (this.state.searchBy) {
            case 'posts':
                fetchPosts(value);
                break;
            case 'comments':
                fetchComments(value);
                break;
            default :
                console.log("!!!!");
        }
    }

    render() {
        return (
            <div className="App">
                <HeaderSearch updateSearchBy={this.updateSearchBy} searchByFlag={this.state.searchBy} handleSearch={this.handleSearch}/>
                <HeaderMovie />
                <MovieGrid database={this.state.database} updateSortBy={this.updateSortBy} sortByFlag={this.state.sortBy} />
                <Footer />

            </div>
        );
    }
}

export default App;
