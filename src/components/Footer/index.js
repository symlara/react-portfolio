import React from 'react';
import github from '../../assets/images/GitHub_Logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/symlara/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github-logo" className="github-pic"/>
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/aaliyah-symlar-931213102" target="_blank" rel="noopener noreferrer"></a>
            </div>

            <div>
                <a href="https://twitter.com/asymlar" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </footer>
    );
}

export default Footer;