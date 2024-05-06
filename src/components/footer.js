import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router for SPA navigation

function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-4 md:py-6 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between px-4"> {/* Added padding here */}
                {/* Logo Section (Smaller on Mobile) */}
                <div className="flex items-center">
                    <img src="./assets/logo.png" alt="Crystal Saddler Photography" style={{ maxWidth: '80px', height: 'auto' }} className="md:max-w-none md:mr-8" />
                </div>

                {/* Navigation Links (Centered) */}
                <nav className="text-center md:text-left mb-4 md:mb-0 flex-grow">
                    <ul className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                        <li><Link to="/" className="text-white text-sm md:text-base hover:text-gray-300">Home</Link></li>
                        <li><Link to="/about" className="text-white text-sm md:text-base hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="text-white text-sm md:text-base hover:text-gray-300">Contact Us</Link></li>
                    </ul>
                </nav>

                {/* Email Section (Right Aligned) */}
                <div className="text-center md:text-right">
                    <p className="text-sm md:text-base">crystalsaddlerphotography@yahoo.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
