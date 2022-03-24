import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/index.css'
import 'tachyons';

function Nav (props) {
    // const { currentTab, setCurrentTab } = props;
    

    return (
    <div>
        <nav>
    <ul className="flex-row" id="nav">
        <li>
            <Link className="navActive mx-2" to="/about">About</Link>
        </li>
        
        <li>
            <Link className="navActive mx-2" to="/portfolio">Portfolio</Link>
        </li>

        <li>
            <Link className="navActive mx-2" to="/contact">Contact</Link>
        </li>

        <li>
            <Link className="navActive mx-2" to="/resume">Resume</Link>
        </li>
    </ul>
        </nav>
      
    </div>
    );
}

export default Nav;