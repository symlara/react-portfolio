import React from 'react';
 import Navigation from "../Navigation";
 
function Header(props) {
    const { currentCategory, setCurrentCategory} = props;

    return (
        <header>
            <div>
                <h1>Aaliyah's React Portfolio</h1>
            </div>

            <div>
                <Navigation
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                ></Navigation>
            </div>
        </header>
    );
 }

 export default Header;