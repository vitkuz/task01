import React from 'react';

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.handleDateClick = this.handleDateClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
    }

    handleDateClick(e) {
        this.props.byDate();
    }

    handleRatingClick(e) {
        this.props.byRating();
    }

    render() {
        return (

            <section className="section sorting mt1">
                <div className="section-content">
                    <div>{this.props.movies.length - 1} movies found</div>
                    <div>
                        <span>Sort by </span>
                        <span><a role='filter' onClick={this.handleDateClick}>release date</a></span> |&nbsp;
                        <span><a role='filter' onClick={this.handleRatingClick}>rating</a></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Filters;