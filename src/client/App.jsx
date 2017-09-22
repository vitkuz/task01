import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components

import Footer from './components/sections/Footer';

import HomePage from './pages/HomePage';
import MovieSinglePage from './pages/MovieSinglePage';
import PageNotFound from './pages/PageNotFound';
import database from '../dummydata/data';

function fetchByTitle(value) {
    value = value || 'Attack on titan';
    fetch(`https://netflixroulette.net/api/api.php?title=${value}`)
        .then((response) => {
            // console.log(response.json());
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });
}

function fetchByDirector(value) {
    value = value || 'Quentin Tarantino';
    fetch(`http://netflixroulette.net/api/api.php?director=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
        });
}

function withProps(Component, props) {
    return function(matchProps) {
        return <Component {...props} {...matchProps} />;
    };
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy: 'rating',
            searchBy: 'title',
            database,
        };
        this.updateSortBy = this.updateSortBy.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    updateSortBy(flag) {
        this.setState({ sortBy: flag });
    }

    updateSearchBy(flag) {
        this.setState({ searchBy: flag });
    }

    handleSearch(value) {
        switch (this.state.searchBy) {
            case 'title':
                fetchByTitle(value);
                break;
            case 'director':
                fetchByDirector(value);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={withProps(HomePage, {
                            updateSearchBy: this.updateSearchBy,
                            searchByFlag: this.state.searchBy,
                            handleSearch: this.handleSearch,
                            sortByFlag: this.state.sortBy,
                            updateSortBy: this.updateSortBy,
                            database: this.state.database,
                        })} />
                        <Route exact path="/movie/:id" component={withProps(MovieSinglePage, {
                            sortByFlag: this.state.sortBy,
                            updateSortBy: this.updateSortBy,
                            database: this.state.database,
                        })} />
                        <Route component={PageNotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

        );
    }
}

export default App;
