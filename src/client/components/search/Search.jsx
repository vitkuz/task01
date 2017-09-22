import React from 'react';
import PropTypes from 'prop-types';

import ToggleGroup from '../utils/ToggleGroup';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({query: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.handleSearch(this.state.query);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleFormSubmit}>
                <div className="input-group">
                    <input type="text" onChange={this.handleInputChange} value={this.state.query} className="form-control" placeholder="Search..." />
                    <span className="input-group-addon" id="basic-addon2">fake api</span>
                </div>
                <div className="dflex dflex-justify mt1">
                    <div className="toggle-search-type">
                        <ToggleGroup updateSearchBy={this.props.updateSearchBy} searchByFlag={this.props.searchByFlag} />
                    </div>
                    <div>
                        <button className="btn btn-default">Submit</button>
                    </div>
                </div>

            </form>
        );
    }
}

export default Search;
