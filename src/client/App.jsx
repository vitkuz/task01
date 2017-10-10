import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeDirectorSearch, makeTitleSearch } from './actions/actions';

// Page components
import HeaderSearch from './components/sections/HeaderSearch';
import HeaderMovie from './components/sections/HeaderMovieSingle';
import MovieGrid from './components/results/MovieGrid';

import Footer from './components/sections/Footer';

import PageNotFound from './pages/PageNotFound';

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.makeDirectorSearch('Quentin Tarantino');
        }, 2000);
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route
                          exact
                          path="/movies"
                          component={HeaderSearch} />
                        <Route
                          exact
                          path="/movies/:id"
                          component={HeaderMovie} />
                        <Redirect exact from="/" to="/movies" />
                        <Route
                          path="*"
                          component={PageNotFound} />
                    </Switch>
                    <Route
                      path="/movies"
                      component={MovieGrid} />
                    <Footer />
                </div>
            </Router>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeDirectorSearch,
        makeTitleSearch,
    }, dispatch);
}

App.propTypes = {
    makeDirectorSearch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
