import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchQuery, makeSearch } from '../../actions/actions';

const DIRECTORS = ['Steven Spielberg', 'Martin Scorsese', 'Alfred Hitchcock', 'Stanley Kubrick'];

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.searchQuery,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.quickDirectorSearch = this.quickDirectorSearch.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    quickDirectorSearch(e) {
        e.preventDefault();
        this.props.setSearchQuery(e.target.innerText);
    }
    handleInputChange(e) {
        this.props.setSearchQuery(e.target.value);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.makeSearch('search', this.props.searchQuery);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.makeSearch('popular');
    }
    render() {
        return (
            <form action="" onSubmit={this.handleFormSubmit}>
                <div className="input-group">
                    <input type="text" onChange={this.handleInputChange} value={this.props.searchQuery} className="form-control" placeholder="Search..." />
                    <span className="input-group-addon" id="basic-addon2">fake api</span>
                    <div className="help mt1">
                        Quick search:&nbsp;
                        {
                            DIRECTORS.map(linkText => <span key={linkText} role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">{linkText}</span>)
                        }
                    </div>
                </div>
                <div className="dflex dflex-justify mt1">
                    <div className="toggle-search-type">
                        <a role="button" tabIndex="0" onClick={this.handleClick} className="btn">
                            Load popular
                        </a>
                    </div>
                    <div>
                        <button className="btn btn-default">Submit</button>
                    </div>
                </div>

            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchBy: state.searchBy,
        searchQuery: state.searchQuery,
        directors: state.directors,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeSearch,
        setSearchQuery,
    }, dispatch);
}

Search.propTypes = {
    makeSearch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

