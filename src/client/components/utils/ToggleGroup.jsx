import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { title: 'title', value: 'title' },
                { title: 'director', value: 'director' },
            ],
            selected: this.props.searchBy,
        };
    }
    getToggleClassName(button) {
        if (button.value === this.props.searchBy) {
            return 'btn active';
        }
        return 'btn';
    }

    renderButtons() {
        return this.state.buttons.map(button => (
            <Toggle
              key={button.value}
              button={button}
              classes={this.getToggleClassName(button)} />
        ));
    }

    render() {
        return (
            <div>
                { this.renderButtons() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchBy: state.searchBy,
    };
}


ToggleGroup.defaultProps = {
    selected: 'comments',
};

ToggleGroup.propTypes = {
    searchBy: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ToggleGroup);
