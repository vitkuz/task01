import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { title: 'title', value: 'title' },
                { title: 'director', value: 'director' },
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
    searchByFlag: PropTypes.string.isRequired,
    updateSearchBy: PropTypes.func.isRequired,
};

export default ToggleGroup;
