import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.getToggleClassName = this.getToggleClassName.bind(this);
    }
    getClasses(btn) {
        if (btn.active) {
            return 'btn active';
        }
        return 'btn';
    }
    renderButtons() {
        return this.props.searchBy.map(button => (
            <Toggle
              key={button.type}
              button={button}
              classes={this.getClasses(button)} />
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

ToggleGroup.propTypes = {
    searchBy: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ToggleGroup);
