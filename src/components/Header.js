import React from 'react'
import '../App.css'

const Header = ({ handleToggleMode }) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button
            onClick={() => handleToggleMode((previusDarkMode) => 
                !previusDarkMode)}
            className='save'>Toggle Mode</button>
        </div>
    )
}

export default Header;
