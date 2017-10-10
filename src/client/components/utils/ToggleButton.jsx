import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchBy } from '../../actions/actions';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.button.title,
            type: props.button.type,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.setSearchBy({type: this.state.type});
    }

    render() {
        return (
            <a role="button" tabIndex="0" onClick={this.handleClick} className={this.props.classes}>
                {this.state.text}
            </a>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setSearchBy,
    }, dispatch);
}

Toggle.defaultProps = {
    classes: 'btn',
};

Toggle.propTypes = {
    button: PropTypes.shape({ title: PropTypes.string, value: PropTypes.string }).isRequired,
    classes: PropTypes.string,
    setSearchBy: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Toggle);
