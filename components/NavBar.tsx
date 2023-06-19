import React, {useEffect, useRef, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";
import logoImage from '../images/logo.png'

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isJobsOpen, setIsJobsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`bg-white z-10 px-8 flex justify-between h-24 duration-700 transition-all w-full ${
                hasScrolled ? 'shadow-xl' : ''
            } ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 sticky top-0'}`}
        >
            <div className="flex w-full h-full justify-between">
                <div className="flex items-center text-2xl cursor-pointer">
                    <Link href="/">
                        <Image src={logoImage} alt={''} height={75}/>
                    </Link>
                </div>
                <ul className="hidden md:flex gap-8 font-bold text-gray-800 text-lg">
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Home</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Services</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>About Us</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Resources</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Blogs</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Contact Us</span>
                    </li>
                </ul>
            </div>
            <div className="md:hidden">
                <div className="h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={handleMobileMenuToggle}>
                    {isMobileMenuOpen ? (
                        <FiX size={30} className="text-gray-800" />
                    ) : (
                        <FiMenu size={30} className="text-gray-800" />
                    )}
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className="pt-10 w-full bg-white text-4xl italic absolute top-16 left-0 w-full h-screen shadow-lg flex flex-col items-center">
                    <li className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>New Feeds</span>
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleEventsToggle}>
                        <span>Events</span>
                        {isEventsOpen && (
                            <div className="bg-gray-100 text-sm px-2 py-1 rounded mt-2">
                                <p>Event 1</p>
                                <p>Event 2</p>
                                <p>Event 3</p>
                            </div>
                        )}
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleJobsToggle}>
                        <span>Jobs</span>
                        {isJobsOpen && (
                            <div className="bg-gray-100 text-sm px-2 py-1 rounded mt-2">
                                <p>Job 1</p>
                                <p>Job 2</p>
                                <p>Job 3</p>
                                <p>Job 4</p>
                            </div>
                        )}
                    </li>
                    <li onClick={otherClicks} className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Talk to us</span>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
