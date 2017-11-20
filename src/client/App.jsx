import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderRoutes } from 'react-router-config';

import { getMoviesFromLocalStorage, randomSearch } from './actions/actions';

// Page components

import Routes from './Routes';


class App extends React.Component {
    componentDidMount() {
        this.props.randomSearch();
        this.props.getMoviesFromLocalStorage();
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    { renderRoutes(Routes) }
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        randomSearch,
        getMoviesFromLocalStorage,
    }, dispatch);
}

export function loadData(store) {
    store.dispatch(randomSearch());
}

App.propTypes = {
    randomSearch: PropTypes.func.isRequired,
    getMoviesFromLocalStorage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
