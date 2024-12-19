"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Badge from './Badge';
import Hamburger from './Hamburger';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    // Effect to determine screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="hamburger">
                    <Hamburger />
                </div>
            ) : (
                <div className="navigation">
                    <ul className="navbar flex flex-col sm:flex-row justify-end items-center m-6 bg-transparent">
                        <div className='fixed top-0 left-0 m-4 flex flex-col space-y-4'>
                            <a href="#">
                                <Image src="/letter-d.png" alt="the letter d" width={50} height={50} />
                            </a>
                            <a target='_blank' href="https://github.com/DonovinNatividad">
                                <div className='flex items-center justify-center'>
                                    <Badge socialMediaName="Github" icon="/githubicon.png"></Badge>
                                </div>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/donovinnatividad">
                                <div className='flex items-center justify-center w-10 h-10 ml-1'>
                                    <Badge socialMediaName="LinkedIn" icon="/linkedin-logo.png"></Badge>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center'>
                            <li><a href="#experience" className='text-lg p-2'>Experience</a></li>
                            <li><a target='_blank' href="/Website_Resume.pdf" className='text-lg p-2'>Resume</a></li>
                            <li><a href="#projects" className="text-lg p-2">Projects</a></li>
                            <li><a href="#contact" className="text-lg p-2">Contact</a></li>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
