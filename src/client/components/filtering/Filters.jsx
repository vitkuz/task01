import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
    }

    handleDateClick() {
        this.props.updateSortBy('year');
    }

    handleRatingClick() {
        this.props.updateSortBy('rating');
    }

    render() {
        return (

            <section className="section sorting mt1">
                <div className="section-content dflex dflex-justify">
                    <div>{} movies found</div>
                    <div>
                        <span>Sort by:</span>

                        <span>
                            <a role="button" onClick={this.handleDateClick}>release date</a>
                        </span> |&nbsp;
                        <span>
                            <a role="button" onClick={this.handleRatingClick}>rating</a>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}

Filters.propTypes = {
    updateSortBy: PropTypes.func.isRequired,
};

export default Filters;
