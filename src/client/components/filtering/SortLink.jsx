import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchBy } from '../../actions/actions';

class SortLink extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.setSearchBy({
            active: this.props.active,
            type: this.props.type,
            title: this.props.title,
            sortDir: !this.props.sortDir,
        });
    }
    render() {
        return (
            <a role="button" tabIndex="0" className={`sort-link ${this.props.active} ${this.props.sortDir}`} onClick={this.onClickHandler}>{this.props.title}</a>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchBy,
    }, dispatch);
}

SortLink.propTypes = {
    setSearchBy: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sortDir: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(SortLink);
