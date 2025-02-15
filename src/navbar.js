import React, {useState} from 'react';

function Navbar() {

    // Dark Mode and Light Mode
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        //Navbar
        <nav className="navbar" id="navbar">
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    {/* Toggle Switch for Dark Mode and Light Mode */}
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
                        <span className="slider"></span>
                    </label>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
