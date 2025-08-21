import React from 'react';

const Footer = ({developer = "kavi", version = "1.0.0"}) => {
    return (
        <footer data-testid="footer" className="text-center">
            <p>Developed by {developer}</p>
            <p>Version: {version}</p>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
export default Footer;