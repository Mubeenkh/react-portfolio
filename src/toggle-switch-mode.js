import React, { useState } from "react";

function ToggleSwitchMode() {

    // Dark Mode and Light Mode
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        // Toggle Switch for Dark Mode and Light Mode
        <label className="toggle-switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
            <span className="slider"></span>
        </label>
    );
}


export default ToggleSwitchMode;