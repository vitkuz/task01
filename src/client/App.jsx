import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderRoutes } from 'react-router-config';

import { randomSearch } from './actions/actions';
import Routes from './Routes';


class App extends React.Component {
    componentDidMount() {
        console.log('Component did mount!');
        this.props.randomSearch();
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
    }, dispatch);
}

App.propTypes = {
    randomSearch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
