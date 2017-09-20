import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: props.selected };
        this.changeActive = this.changeActive.bind(this);
    }
    getToggleClassName(i) {
        if (this.state.selected === i) {
            return 'active';
        }
        return '';
    }
    changeActive(i) {
        this.setState({ selected: i });
    }
    renderButtons() {
        return this.props.buttons.map((button, index ) => {
            <Toggle updateSearchState={this.props.updateParent}
                    key={index}
                    index={index}
                    text={button.title}
                    addClass={this.getToggleClassName(index)}
                    updateGroup={this.changeActive} />

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
    selected: 0,
};

ToggleGroup.propTypes = {
    selected: PropTypes.number,
};

export default ToggleGroup;
