import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure this path is correct

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Hamburger icon SVG for mobile view
    const HamburgerIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
    );

    // Close icon SVG for mobile view
    const CloseIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    return (
        <nav className="bg-white px-4 sm:px-6 py-3 shadow-md">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-10 mr-3" alt="Logo" />
                    <span className="text-xl font-semibold text-gray-800">Crystal Saddler Photography</span>
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? CloseIcon : HamburgerIcon}
                </button>
                <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:items-center md:flex md:space-x-4 w-full md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
