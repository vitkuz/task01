import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        });
        this.updateGroup();
        this.props.updateSearchState(this.props.text);
    }

    updateGroup() {
        this.props.updateGroup(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick} className={`btn btn-danger ${this.props.addClass}`}>
                { this.props.text }
            </a>
        );
    }
}

Toggle.propTypes = {
    updateSearchState: PropTypes.func,
};

export default Toggle;
