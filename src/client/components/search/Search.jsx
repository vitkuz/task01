import React from 'react';
import PropTypes from 'prop-types';

import ToggleGroup from '../utils/ToggleGroup';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.searchQuery,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.quickDirectorSearch = this.quickDirectorSearch.bind(this);
    }
    quickDirectorSearch(e) {
        this.props.updateSearchBy('director');
        this.props.setSearchQuery(e.target.innerText);
        this.props.handleSearch(e.target.innerText);
    }
    handleInputChange(e) {
        // this.props.setSearchQuery(e.target.value);
        this.setState({ value: e.target.value });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.setSearchQuery(this.state.query);
        this.props.handleSearch(this.state.query);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleFormSubmit}>
                <div className="input-group">
                    <input type="text" onChange={this.handleInputChange} value={this.state.query} className="form-control" placeholder="Search..." />
                    <span className="input-group-addon" id="basic-addon2">fake api</span>
                    <div className="help mt1">
                        Example:
                        <span role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">Steven Spielberg</span>
                        <span role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">Martin Scorsese</span>
                        <span role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">Alfred Hitchcock</span>
                        <span role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">Stanley Kubrick</span>
                    </div>
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

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    searchByFlag: PropTypes.string.isRequired,
    searchQuery: PropTypes.string.isRequired,
    updateSearchBy: PropTypes.func.isRequired,
};

export default Search;
