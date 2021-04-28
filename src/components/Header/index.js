import React from 'react';
 
function Header(props) {
    const { currentCategory, setCurrentCategory} = props;

    return (
        <header>
            <div>
                <h1>Aaliyah's React Portfolio</h1>
            </div>
        </header>
    )
 }

 export default Header;