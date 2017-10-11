import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchQuery, setSearchBy, makeTitleSearch, makeDirectorSearch } from '../../actions/actions';

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
        e.preventDefault();
        this.props.setSearchBy({ type: 'director' });
        this.props.setSearchQuery(e.target.innerText);
    }
    handleInputChange(e) {
        this.props.setSearchQuery(e.target.value);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const ativeFilter = this.props.searchBy.find((filter) => {
            return filter.active === true;
        });
        switch (ativeFilter.type) {
            case 'title':
                this.props.makeTitleSearch(this.props.searchQuery);
                break;
            case 'director':
                this.props.makeDirectorSearch(this.props.searchQuery);
                break;
            default:
                break;
        }
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
                            this.props.directors.map(linkText => <span key={linkText} role="button" tabIndex="-1" onClick={this.quickDirectorSearch} className="quick-link">{linkText}</span>)
                        }
                    </div>
                </div>
                <div className="dflex dflex-justify mt1">
                    <div className="toggle-search-type">
                        <ToggleGroup />
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
        makeDirectorSearch,
        makeTitleSearch,
        setSearchBy,
        setSearchQuery,
    }, dispatch);
}

Search.propTypes = {
    makeTitleSearch: PropTypes.func.isRequired,
    makeDirectorSearch: PropTypes.func.isRequired,
    searchBy: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchBy: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    directors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

