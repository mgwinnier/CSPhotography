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
        <nav className="bg-white px-6 sm:px-8 py-4 shadow-md font-glacial">
            <div className="container mx-auto grid grid-cols-3 items-center relative md:flex md:justify-between">
                <div className="flex items-center justify-start md:w-1/3">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? CloseIcon : HamburgerIcon}
                    </button>
                </div>
                <div className="flex items-center justify-center col-start-2 md:col-start-auto md:flex-1">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-24 md:h-32" alt="Logo" />
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-end space-x-8 md:w-1/3">
                    <Link to="/" className="text-gray-800">HOME</Link>
                    <Link to="/about" className="text-gray-800">ABOUT</Link>
                    <Link to="/contact" className="text-gray-800">CONTACT</Link>
                </div>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:hidden w-full mt-4 text-base font-medium`} id="navbar-default">
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link to="/" className="text-gray-800" onClick={() => setIsOpen(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-800" onClick={() => setIsOpen(false)}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-800" onClick={() => setIsOpen(false)}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
