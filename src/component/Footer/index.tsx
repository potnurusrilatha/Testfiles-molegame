import React from 'react';

const Footer = ({developer="kavi" version="1.0.0"}) => {
    return (
        <footer data-testid="footer" className="text-center">
            <p>Developed by Kavi</p>
            <p>Version: {process.env.REACT_APP_VERSION || '1.0.0'}</p>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
export default Footer;