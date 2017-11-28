import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SortLink from './SortLink';

class Filters extends React.Component {
    renderFilters() {
        return this.props.filters.filters.map((filter) => {
            return <SortLink key={filter.title} title={filter.title} type={filter.type} reverse={filter.reverse} />;
        });
    }

    render() {
        return (
            <section className="section sorting mt1">
                <div className="section-content dflex dflex-justify">
                    <div>{} movies found</div>
                    <div>
                        <span>Sort by:</span>
                        { this.renderFilters() }
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters,
    };
}


Filters.propTypes = {
    filters: PropTypes.shape({
        filters: PropTypes.arrayOf(PropTypes.object),
        active: PropTypes.string.isRequired,
        reverse: PropTypes.bool.isRequired }).isRequired,
};

export default connect(mapStateToProps, null)(Filters);
