import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeNotification } from '../../actions/actions';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = { getClass: 'animated bounceIn' };
        this.fadingDone = this.fadingDone.bind(this);
    }
   componentDidMount() {
       setTimeout(() => {
           const elm = this.notification;
           elm.addEventListener('animationend', this.fadingDone);
           this.setState({ getClass: 'animated fadeOut' });
       }, 5000);
   }
    componentWillUnmount() {
        const elm = this.notification;
        elm.removeEventListener('animationend', this.fadingDone);
    }
    fadingDone() {
        console.log('!!!!');
        this.props.removeNotification(this.props.id);
    }
    render() {
        return (
            <div className={this.state.getClass} ref={(ref) => { this.notification = ref; }}>
                {this.props.message}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeNotification,
    }, dispatch);
}

Notification.propTypes = {
    removeNotification: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(Notification);
