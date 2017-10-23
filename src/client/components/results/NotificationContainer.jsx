import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Notification from './Notification';

class NotificationContainer extends React.Component {
    renderNotification() {
        return this.props.notifications.map((notification) => {
            return <Notification key={notification.id} id={notification.id} message={notification.message} />;
        });
    }

    render() {
        return (
            <section className="section movies mt1">
                <div className="section-content">
                    {this.renderNotification()}
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        notifications: state.notifications,
    };
}

NotificationContainer.propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(NotificationContainer);
