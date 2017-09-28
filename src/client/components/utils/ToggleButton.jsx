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
            <a role="button" tabIndex="0" onClick={this.handleClick} className={this.props.classes}>
                {this.state.text}
            </a>
        );
    }
}

Toggle.defaultProps = {
    classes: 'btn',
};

Toggle.propTypes = {
    button: PropTypes.shape({ title: PropTypes.string, value: PropTypes.string }).isRequired,
    classes: PropTypes.string,
    updateSearchBy: PropTypes.func.isRequired,
};

export default Toggle;
