import React from 'react';
import github from '../../assets/images/2048px-Octicons-mark-github.svg.png';
import linkedin from '../../assets/images/LI-In-Bug.png';
import twitter from '../../assets/images/logo-rond-twitter.png';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <p className="github-logo">
                <a href="https://github.com/symlara/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github-logo" className="github-pic"/>
                </a>
              </p>
            </div>

            <div>
                <p className="linkedIn-logo">
                <a href="https://www.linkedin.com/in/aaliyah-symlar-931213102" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin-logo" className="linkedin" />
                </a>
                </p>
            </div>

            <div>
                <p>
                <a href="https://twitter.com/asymlar" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter-logo" className="twitter" />
                </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;