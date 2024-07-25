import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-300 text-black py-4 md:py-6 px-4 md:px-0" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
            <div className="flex flex-col md:flex-row items-center justify-between px-4">
                {/* Logo Section (Smaller on Mobile) */}
                <div className="flex items-center">
                    <img src="./assets/logo.png" alt="Crystal Saddler Photography" style={{ maxWidth: '80px', height: 'auto' }} className="md:max-w-none md:mr-8" />
                </div>

                {/* Navigation Links (Centered) */}
                <nav className="text-center md:text-left mb-4 md:mb-0 flex-grow">
                    <ul className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                        <li><Link to="/" className="text-black text-sm md:text-base hover:text-gray-300">HOME</Link></li>
                        <li><Link to="/about" className="text-black text-sm md:text-base hover:text-gray-300">ABOUT</Link></li>
                        <li><Link to="/contact" className="text-black text-sm md:text-base hover:text-gray-300">CONTACT</Link></li>
                    </ul>
                </nav>

                {/* Email and LinkedIn Section (Right Aligned) */}
                <div className="text-center md:text-right">
                    <p className="text-sm md:text-base mb-2">crystal@crystalsaddlerphotography.com</p>
                    <a href="https://www.linkedin.com/in/crystal-saddler-38225360/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/linkedin-logo.png" alt="LinkedIn Profile" style={{ maxWidth: '24px', height: 'auto' }} className="inline-block" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
