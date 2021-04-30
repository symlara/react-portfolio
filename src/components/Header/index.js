import React from 'react';
 import NavTabs from "../Nav";
 
function Header(props) {
    const { currentPage, setCurrentPage} = props;

    return (
        <header>
            <div>
                <h1>Aaliyah's React Portfolio</h1>
            </div>

            <div>
                <NavTabs currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ></NavTabs>
            </div>
        </header>
    );
 }

 export default Header;