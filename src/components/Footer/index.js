import React from 'react';
import github from '../../assets/images/2048px-Octicons-mark-github.svg.png';
import linkedin from '../../assets/images/LI-In-Bug.png';
import twitter from '../../assets/images/logo-rond-twitter.png';
import '../../../src/index.css'
import 'tachyons';

function Footer() {
    return (
        <footer class="pv4 ph3 tc" id="footer">
            <div>
                <p className="github-logo">
                <a class="link near-black hover-silver dib mh3 tc" href="https://github.com/symlara/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github-logo" className="github-pic"/>
                </a>
              </p>
            </div>

            <div>
                <p className="linkedIn-logo">
                <a class="link hover-silver near-black dib mh3 tc" href="https://www.linkedin.com/in/aaliyah-symlar-931213102" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin-logo" className="linkedin" />
                </a>
                </p>
            </div>

            <div>
                <p>
                <a class="link hover-silver near-black dib mh3 tc" href="https://twitter.com/asymlar" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter-logo" className="twitter" />
                </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;