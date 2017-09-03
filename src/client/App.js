import React, {Component} from 'react';
import {fetchMovies} from "./actions/indeх"

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";



class App extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div className="App">
                ReduxApp!!!!!!!!!
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMovies},dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(App)