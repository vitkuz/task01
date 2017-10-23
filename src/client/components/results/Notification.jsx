import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeNotification } from '../../actions/actions';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {getClass:'animated bounceIn'};
        this.fadingDone = this.fadingDone.bind(this)
    }
    
    fadingDone () {
       console.log('!!!!');
        this.props.removeNotification(this.props.id);
    }
    
   componentDidMount() {
  
       setTimeout(() => {
           const elm = this.refs.message;
           elm.addEventListener('animationend', this.fadingDone);
           this.setState({getClass: 'animated fadeOut'});
           // this.props.removeNotification(this.props.id);
       }, 5000);
       // setTimeout(() => {
       //
       //     this.props.removeNotification(this.props.id);
       // }, 10000);
   }
    
    componentWillUnmount () {
        const elm = this.refs.message
        elm.removeEventListener('animationend', this.fadingDone)
    }
   
    render() {
        return (
            <div className={this.state.getClass} ref="message">
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
