import React from 'react';
import PropTypes from 'prop-types';
import SortLink from './SortLink';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }
    handleFilterClick(filter) {
        this.props.setActiveFilter(filter);
    }
    renderFilters() {
        return this.props.filters.map((filter) => {
            return <SortLink key={filter.title} title={filter.title} type={filter.type} active={filter.active} sortDir={filter.sortDir} onClickHandler={this.handleFilterClick} />;
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

Filters.propTypes = {
    setActiveFilter: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filters;
