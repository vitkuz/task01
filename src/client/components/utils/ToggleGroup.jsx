import React from 'react';
import Toggle from './ToggleButton';

class ToggleGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: props.selected };
        this.changeActive = this.changeActive.bind(this);
    }

    getToggleClassName(i) {
        if ( this.state.selected === i) {
            return 'active';
        } else {
            return '';
        }
    }

    changeActive(i) {
        this.setState({selected:i});
    }

    renderButtons() {
        return this.props.buttons.map((button, index ) => {
            if ((this.props.buttons.length-1) === index) {
                return <Toggle updateSearchState={this.props.updateParent} key={index} index={index} text={button.title} addClass={this.getToggleClassName(index)} updateGroup={this.changeActive} />
            } else {
                return <Toggle updateSearchState={this.props.updateParent} key={index} index={index} text={button.title} addClass={this.getToggleClassName(index)+' mr1'} updateGroup={this.changeActive} />
            }

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

export default ToggleGroup;
