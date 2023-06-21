import React, {useEffect} from 'react';
import Image from "next/image";
import taskImage from "@/images/taskImage.jpg";
import {motion, useAnimation} from "framer-motion";
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import mapImage from '../images/maps.png';
import {GoLinkExternal} from "react-icons/go";
import {useInView} from "react-intersection-observer";

const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const mapVariants = {
        visible: {opacity: 1, y: 0, transition: {duration: 1.5}},
        hidden: {opacity: 0, y: -400},
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div>
            <motion.div className={'h-72 relative'}
                        initial={{y:-200, opacity: 0}}
                        animate={{y:0, opacity: 1, transition: {duration: 1}}}
            >
                <Image src={taskImage} alt={''} className={'object-cover h-full w-full'}/>
                <div className={'absolute flex flex-col justify-center pl-20 gap-4 text-white top-0 h-full w-full bg-black bg-opacity-[50%]'}>
                    <motion.h1
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 1.5}}}
                        className={'font-semibold text-5xl'}>Contact Us</motion.h1>
                    <motion.div
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 2}}}
                        className={'text-xl flex gap-1 items-center'}>
                        <Link href={'/'} className={'hover:underline'}>Home</Link>
                        <AiOutlineRight className={'mt-2'}/>
                        <Link href={'/resources'} className={'text-gray-400 mt-1 hover:underline'}>Contact Us</Link>
                    </motion.div>
                </div>
            </motion.div>
            <div className={'bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-center py-4 md:py-10 flex items-center'}>
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1, transition: {duration: 1}}}
                    className={'w-full md:w-[80%] rounded-md bg-white p-4 md:p-8 shadow shadow-lg shadow-gray-500'}
                >
                    <div className={'h-full w-full flex flex-col gap-4 justify-center items-center'}>
                        <h1 className={'relative text-center text-2xl md:text-4xl font-semibold md:font-bold text-red-800 inline'}>
                            Keep in touch with us!
                            <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-1 animate-pulse'}></span>
                        </h1>
                        <form className={'h-[80%] w-full md:w-[90%] px-2 md:px-8 py-4 flex flex-col gap-4'}>
                            <div className={'flex flex-col md:flex-row justify-between gap-4'}>
                                <input placeholder={'Name'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                                <input placeholder={'Email'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                            </div>
                            <div className={'flex flex-col md:flex-row justify-between gap-4'}>
                                <input placeholder={'Phone Number'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                                <input placeholder={'Inquiry About'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                            </div>
                            <textarea placeholder={'Your Message'} className={'p-2 h-24 border border-red-800 resize-none focus:outline-none'}/>
                            <button className={'w-36 md:w-48 p-3 text-md md:text-xl font-semibold border border-red-800 text-red-800 mx-auto hover:bg-red-800 hover:text-white hover:border-white duration-500 transition-all'}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
            <div ref={ref} className={''}>
                <motion.div
                    animate={controls}
                    initial={'hidden'}
                    variants={mapVariants}
                    className={'relative group'}
                >
                    <Image src={mapImage} alt={''} className={'w-full h-96 md:h-full object-cover'}/>
                    <div className={'flex items-center justify-center absolute top-0 w-full h-full bg-black bg-opacity-[50%] group-hover:bg-opacity-[80%] duration-300 transition-all'}>
                        <a href={'https://www.google.com/maps/place/11556+84b+Ave,+Delta,+BC+V4C+2T6,+Canada/@49.1559117,-122.9064395,17z/data=!4m6!3m5!1s0x5485d911b58116f9:0x68f799d76a535a7b!8m2!3d49.1571993!4d-122.9029955!16s%2Fg%2F11c1bf1lr4?entry=ttu'}
                           className={'hidden group-hover:flex gap-2 duration-300 transition-all text-xl font-semibold hover:underline text-white hover:text-blue-500 cursor-pointer'}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            Views in Maps
                            <GoLinkExternal size={30}/>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;