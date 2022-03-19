// IMPORTS //
import React, { useEffect, useState } from "react";

function UserDarkMode() {
    // STATES //
    const [theme, setTheme] = useState(localStorage.theme);

    // Conditional For Color Theme //
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement;

        // Adds/Removes Class of Light/Dark //
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // Saves Preferred Theme For User On Local Machine //
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}

export default UserDarkMode