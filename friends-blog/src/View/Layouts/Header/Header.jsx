import React from 'react';

function Header() {
    function handleClick() {
        // redirect the user to sign-in page or any other action
    }
    return (
        <header>
            <img src="logo.png" alt="Logo" className="logo" />
            <button className="sign-in-button" onClick={handleClick}>Sign In</button>
        </header>
    );
}

export default Header;
