import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFilterBy, setSearchBy, makeDirectorSearch, makeTitleSearch } from './actions/actions';

// Page components
import HeaderSearch from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import MovieGrid from './components/results/MovieGrid';

import Footer from './components/sections/Footer';

import PageNotFound from './pages/PageNotFound';
import database from '../dummydata/data';

function withProps(Component, props) {
    return function (matchProps) {
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
    componentDidMount() {
        this.props.makeDirectorSearch('Quentin Tarantino');
    }
    updateSortBy(flag) {
        this.props.setFilterBy(flag);
    }

    updateSearchBy(flag) {
        this.props.setSearchBy(flag);
    }

    handleSearch(value) {
        switch (this.props.searchBy) {
            case 'title':
                this.props.makeTitleSearch(value);
                break;
            case 'director':
                this.props.makeDirectorSearch(value);
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
                        <Route
                          exact
                          path="/movies"
                          component={withProps(HeaderSearch, {
                                updateSearchBy: this.updateSearchBy,
                                searchByFlag: this.state.searchBy,
                                handleSearch: this.handleSearch,
                            })} />
                        <Route
                          exact
                          path="/movies/:id"
                          component={withProps(HeaderMovie, {
                                database: this.state.database,
                            })} />
                        <Redirect exact from="/" to="/movies" />
                        <Route
                          path="*"
                          component={PageNotFound} />
                    </Switch>
                    <Route
                      path="/movies"
                      component={withProps(MovieGrid, {
                            sortByFlag: this.state.sortBy,
                            updateSortBy: this.updateSortBy,
                            database: this.props.searchResults,
                        })} />
                    <Footer />
                </div>
            </Router>

        );
    }
}

function mapStateToProps(state) {
    return {
        searchResults: state.searchResults,
        sortBy: state.sortBy,
        searchBy: state.searchBy,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeDirectorSearch,
        makeTitleSearch,
        setSearchBy,
        setFilterBy,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
