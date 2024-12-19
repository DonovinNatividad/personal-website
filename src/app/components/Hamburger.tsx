import React, { useState } from 'react';

function Hamburger() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
                    hamburgerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleHamburger}
            ></div>

            {/* Side Menu */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
                    hamburgerOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button
                        onClick={toggleHamburger}
                        className="text-white focus:outline-none"
                    >
                        ✕
                    </button>
                </div>
                <ul className="p-4 space-y-4">
                    <li>
                        <a href="#experience" className="text-lg block hover:text-gray-300">Experience</a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="/Website_Resume.pdf"
                            className="text-lg block hover:text-gray-300"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg block hover:text-gray-300">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg block hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon */}
            <div
                className="fixed top-4 right-4 z-50 h-16 flex flex-col items-center justify-center space-y-2 p-4 cursor-pointer"
                onClick={toggleHamburger}
            >
                <div className="w-8 h-1 bg-gray-800 rounded"></div>
                <div className="w-8 h-1 bg-gray-800 rounded"></div>
                <div className="w-8 h-1 bg-gray-800 rounded"></div>
            </div>
        </>
    );
}

export default Hamburger;
