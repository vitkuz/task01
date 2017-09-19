import React from 'react';

const Footer = (props) => {
    return (
        <footer className="section footer mt1">
            <div className="section-content">
                {props.footerText}
            </div>
        </footer>
    );
}

export default Footer;