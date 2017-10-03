import React from 'react';
import PropTypes from 'prop-types';

class SortLink extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.onClickHandler({
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

export default SortLink;
