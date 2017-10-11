import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Toggle from './ToggleButton';

const ToggleGroup = (props) => {
    return (
        <div>
            {
                props.searchBy.map(button => (
                    <Toggle
                      key={button.type}
                      button={button}
                      classes={button.active ? 'btn active' : 'btn'} />
                ))
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        searchBy: state.searchBy,
    };
}

ToggleGroup.propTypes = {
    searchBy: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ToggleGroup);
