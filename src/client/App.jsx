import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveFilter, setSearchBy, makeDirectorSearch, makeTitleSearch } from './actions/actions';

// Page components
import HeaderSearch from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import MovieGrid from './components/results/MovieGrid';

import Footer from './components/sections/Footer';

import PageNotFound from './pages/PageNotFound';

function withProps(Component, props) {
    return function (matchProps) {
        return <Component {...props} {...matchProps} />;
    };
}

class App extends React.Component {
    constructor() {
        super();
        this.setActiveFilter = this.setActiveFilter.bind(this);
        this.updateSearchBy = this.updateSearchBy.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.makeDirectorSearch('Quentin Tarantino');
        }, 3000);
    }
    setActiveFilter(flag) {
        this.props.setActiveFilter(flag);
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
                                searchByFlag: this.props.searchBy,
                                handleSearch: this.handleSearch,
                            })} />
                        <Route
                          exact
                          path="/movies/:id"
                          component={withProps(HeaderMovie, {
                                database: this.props.searchResults,
                            })} />
                        <Redirect exact from="/" to="/movies" />
                        <Route
                          path="*"
                          component={PageNotFound} />
                    </Switch>
                    <Route
                      path="/movies"
                      component={withProps(MovieGrid, {
                            sortByFlag: this.props.sortBy,
                            setActiveFilter: this.setActiveFilter,
                            database: this.props.searchResults,
                            filters: this.props.filters,
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
        searchBy: state.searchBy,
        filters: state.filters,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeDirectorSearch,
        makeTitleSearch,
        setSearchBy,
        setActiveFilter,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
