import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Import components


import Footer from './components/sections/Footer';

import HomePage from './pages/HomePage';
import MovieSinglePage from './pages/MovieSinglePage';
import PageNotFound from './pages/PageNotFound';
import database from '../dummydata/data';

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
}

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            return response.json();
        })
}

function withProps(Component, props) {
    return function(matchProps) {
        return <Component {...props} {...matchProps} />
    }
}



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy: 'rating',
            searchBy: 'comments',
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
            case 'posts':
                fetchPosts(value);
                break;
            case 'comments':
                fetchComments(value);
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
