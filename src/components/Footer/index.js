import React from 'react';
import github from '../../assets/images/GitHub_Logo.png';
import linkedin from '../../assets/images/LI-In-Bug.png';
import twitter from '../../assets/images/2021 Twitter logo - black.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/symlara/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github-logo" className="github-pic"/>
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/aaliyah-symlar-931213102" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin-logo" className="linkedin" />
                </a>
            </div>

            <div>
                <a href="https://twitter.com/asymlar" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter-logo" className="twitter" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;