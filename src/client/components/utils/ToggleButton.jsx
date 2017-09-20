import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.button.title,
            value: props.button.value,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.updateSearchBy(this.state.value);
    }

    render() {
        return (
            <a onClick={this.handleClick} className={this.props.classes}>
                {this.state.text}
            </a>
        );
    }
}

Toggle.defaultProps = {
    classes: 'btn',
};

Toggle.propTypes = {
    button: PropTypes.object.isRequired,
    classes: PropTypes.string,
};

export default Toggle;
