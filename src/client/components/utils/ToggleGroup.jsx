import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { title: 'posts', value: 'posts'},
                { title: 'comments', value: 'comments'}
            ],
            selected: this.props.searchByFlag,
        };
    }
    getToggleClassName(button) {

        if (button.value === this.props.searchByFlag) {
            return 'btn active';
        } else  {
            return 'btn';
        }

    }

    renderButtons() {
        return this.state.buttons.map((button) => {
            return <Toggle key={button.value} button={button}
                           classes={this.getToggleClassName(button)}
                           updateSearchBy={this.props.updateSearchBy} />

        });
    }

    render() {
        return (
            <div>
                { this.renderButtons() }
            </div>

        );
    }
}

ToggleGroup.defaultProps = {
    selected: 'comments',
};

ToggleGroup.propTypes = {
    selected: PropTypes.func,
};

export default ToggleGroup;
