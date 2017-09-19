import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(prevState) {
            return {isToggleOn: !prevState.isToggleOn};
        });
        this.updateGroup();
        this.props.updateSearchState(this.props.text);
    }

    updateGroup() {
        this.props.updateGroup(this.props.index);
    }

    render() {

        return (
            <a onClick={this.handleClick} className={'btn btn-danger '+this.props.addClass}>
                { this.props.text }
            </a>
        );
    }
}

export default Toggle;