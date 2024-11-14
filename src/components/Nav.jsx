/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { UilMoon } from '@iconscout/react-unicons';
import { UilSun } from '@iconscout/react-unicons';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);

        const rootElement = document.documentElement;
        if (savedDarkMode) {
            rootElement.classList.add('dark');
        } else {
            rootElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const rootElement = document.documentElement;
        rootElement.classList.add('transition-mode');

        setTimeout(() => {
            if (!isDarkMode) {
                rootElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                rootElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        }, 0);

        setTimeout(() => {
            rootElement.classList.remove('transition-mode');
        }, 500); // Sesuaikan dengan durasi animasi
        
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="flex justify-between items-center h-12 px-5 bg-[#98d6ea] text-white shadow-md sm:px-12 dark:bg-gray-900 dark:text-white">
            <h3>Reyzen</h3>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <UilMoon size="20" className="text-white" />
                ) : (
                    <UilSun size="20" className="text-white" />
                )}
            </button>
        </nav>
    );
}

export default Header;
