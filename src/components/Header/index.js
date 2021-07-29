import React from 'react';
 import Nav from "../Nav";
 import './header.css';
 
function Header(props) {
    const { currentTab, setCurrentTab} = props;

    return (
        <header>
            <div>
                <h1><a href="/" className="header">Aaliyah's React Portfolio</a></h1>
            </div>

            <div>
                <Nav currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header>
    );
 }

 export default Header;