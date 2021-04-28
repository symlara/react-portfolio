import React from 'react';

function Nav (props) {
    const {
      setCurrentCategory,
      currentCategory,
    //   contactSelected,
      setContactSelected
    } = props;


    return (
        <nav className="flex-row px-1">
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false)}>
                        About Me
                    </a>
                </li>
               
            </ul>
        </nav>
    )
}

export default Nav;