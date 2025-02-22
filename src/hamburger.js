import React, { useState } from 'react';

// import './menu.css';

// import ToggleSwitchMode from './toggle-switch-mode';

function Hamburger() {

    // Hamburger Menu State
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Dark Mode and Light Mode
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        // Hamburger Menu 
        <div className="hamburger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="nav-icon"></span>
                <span className="nav-icon"></span>
                <span className="nav-icon"></span>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
                <ul>
                    <li><a href="#about-me" onClick={toggleMenu}>About Me</a></li>
                    <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    <li>
                    {/* // Toggle Switch for Dark Mode and Light Mode */}
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
                        <span className="slider"></span>
                    </label>
                    {/* <ToggleSwitchMode /> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hamburger;
