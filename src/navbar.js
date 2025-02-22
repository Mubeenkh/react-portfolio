import React, {useState} from 'react';

import ToggleSwitchMode from './toggle-switch-mode';

function Navbar() {

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
                    <ToggleSwitchMode />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
