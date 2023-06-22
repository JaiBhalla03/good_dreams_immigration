import React from 'react';
import {Fade, Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import heroImage1 from '../images/heroImage1.jpg';
import heroImage2 from '../images/heroImage2.jpg';
import heroImage3 from '../images/heroImage3.jpg';
import Image from 'next/image';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <motion.button
            whileHover={{scale:1.1, transition: {duration: 0.5}}}
            whileTap={{scale:0.9, transition: {duration: 0.5}}}
            className={'ml-2 bg-white bg-opacity-[30%] p-1 rounded-full'}>
            <AiOutlineLeft className={'text-white'} size={35}/>
        </motion.button>,
        nextArrow: <motion.button
            whileHover={{scale:1.1, transition: {duration: 0.5}}}
            whileTap={{scale:0.9, transition: {duration: 0.5}}}
            className={'mr-2 bg-white bg-opacity-[30%] p-1 rounded-full'}>
            <AiOutlineRight className={'text-white'} size={35}/>
        </motion.button>
    }
    return (
        <div className={'overflow-x-hidden'}>
            <Fade duration={3000} {...properties}>
                <div className="each-slide relative">
                    <Image src={heroImage1} alt={''} className={'w-full object-cover h-full'}/>
                    <div className={'flex flex-col justify-center pl-10 md:pl-32 absolute top-0 bg-black h-full w-full bg-opacity-[50%]'}>
                        <div className={'flex flex-col gap-4 md:gap-6 w-full md:w-2/3'}>
                            <h1 className={'text-3xl md:text-4xl text-white font-semibold'}>Good Dreams Immigration</h1>
                        <p className={'text-4xl md:text-5xl text-white font-bold'}>
                            We will help you ease your immigration process
                        </p>
                            <div className={'flex gap-8'}>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/services'}>Our Services</Link>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/contact'}>Contact Us</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="each-slide relative">
                    <Image src={heroImage2} alt={''} className={'w-full object-cover h-full'}/>
                    <div className={'flex flex-col justify-center pl-10 md:pl-32 absolute top-0 bg-black h-full w-full bg-opacity-[50%]'}>
                        <div className={'flex flex-col gap-4 md:gap-6 w-full md:w-2/3'}>
                            <h1 className={'text-3xl md:text-4xl text-white font-semibold'}>Good Dreams Immigration</h1>
                        <p className={'text-4xl md:text-5xl text-white font-bold'}>
                            We provide professional Canadian Immigration Consultancy Services
                        </p>
                            <div className={'flex gap-8'}>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/services'}>Our Services</Link>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/contact'}>Contact Us</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="each-slide relative">
                    <Image src={heroImage3} alt={''} className={'w-full object-cover h-full'}/>
                    <div className={'flex flex-col justify-center pl-10 md:pl-32 absolute top-0 bg-black h-full w-full bg-opacity-[50%]'}>
                        <div className={'flex flex-col gap-4 md:gap-6 w-full md:w-2/3'}>
                            <h1 className={'text-3xl md:text-4xl text-white font-semibold'}>Good Dreams Immigration</h1>
                        <p className={'text-4xl md:text-5xl text-white font-bold'}>
                            Leading Visa and Immigration Consultancy
                        </p>
                            <div className={'flex gap-8'}>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/services'}>Our Services</Link>
                                <Link className={'p-3 text-xl text-white bg-red-800 hover:bg-red-900 duration-300 transition-all'} href={'/contact'}>Contact Us</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Hero;
