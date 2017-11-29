import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { setActiveFilter } from '../../actions/actions';

class SortLink extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.setActiveFilter({
            active: this.props.type,
        });
    }
    getClasses() {
        const classes = `${this.props.type === this.props.filters.active ? 'sort-active' : ''} ${this.props.filters.reverse}`;
        return classes;
    }
    render() {
        return (
            <a
              role="button"
              tabIndex="0"
              className={`sort-link ${this.getClasses()}`}
              onClick={this.onClickHandler}>{this.props.title}</a>
        );
    }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

SortLink.propTypes = {
    setActiveFilter: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filters: PropTypes.shape({ filters: PropTypes.arrayOf(PropTypes.object),
        active: PropTypes.string,
        reverse: PropTypes.bool }).isRequired,
};

export default connect(mapStateToProps, { setActiveFilter })(SortLink);
