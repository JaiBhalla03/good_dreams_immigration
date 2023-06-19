import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import {motion} from 'framer-motion';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={'z-30'}>
            {isVisible && (
                <motion.button
                    whileHover={{scale: 1.1, transition: {duration: 0.2}}}
                    whileTap={{scale: 0.9, transition: {duration : 0.2}}}
                    onClick={scrollToTop}
                    className="fixed bottom-2 right-2 bg-white bg-opacity-[40%] hover:bg-opacity-[100%] duration-200 transition-all shadow-gray-800 shadow-sm text-gray-900 rounded-md p-3"
                >
                    <FaArrowUp size={20}/>
                </motion.button>
            )}
        </div>
    );
};

export default GoToTopButton;
