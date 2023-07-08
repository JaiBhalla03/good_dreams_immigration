import React, {useEffect} from 'react';
import Image from "next/image";
import whyHomeImage from '../images/whyHomeImage.jpg';
import {MdHandshake} from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {RiCustomerService2Fill} from "react-icons/ri";
import {AiFillReconciliation} from "react-icons/ai";
import {IoOptions} from "react-icons/io5";

const Why = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const whyHeadingVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: -500 },
    };

    const imageVariants = {
        visible: {opacity: 1, y: 0, transition: {duration: 1.5}},
        hidden: {opacity: 0, y: 1000},
    }

    const textVariants1 = {
        visible: {opacity: 1, x: 0, transition: {duration: 1}},
        hidden: {opacity: 0, x: -400},
    }
    const textVariants2 = {
        visible: {opacity: 1, x: 0, transition: {duration: 2}},
        hidden: {opacity: 0, x: -400},
    }
    const textVariants3 = {
        visible: {opacity: 1, x: 0, transition: {duration: 3}},
        hidden: {opacity: 0, x: -400},
    }
    const textVariants4 = {
        visible: {opacity: 1, x: 0, transition: {duration: 4}},
        hidden: {opacity: 0, x: -400},
    }
    const iconVariants1 = {
        visible: {opacity: 1, y: 0, transition: {duration: 1}},
        hidden: {opacity: 0, y: -1000},
    }
    const iconVariants2 = {
        visible: {opacity: 1, y: 0, transition: {duration: 2}},
        hidden: {opacity: 0, y: -1000},
    }
    const iconVariants3 = {
        visible: {opacity: 1, y: 0, transition: {duration: 3}},
        hidden: {opacity: 0, y: -1000},
    }
    const iconVariants4 = {
        visible: {opacity: 1, y: 0, transition: {duration: 4}},
        hidden: {opacity: 0, y: -1000},
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <div ref={ref} className={'overflow-x-hidden bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:py-16'}>
            <div className={'pt-2 md:pt-6 px-2 md:px-8 bg-white pb-8 flex flex-col-reverse md:flex-row gap-8'}>
                <motion.div
                    animate={controls}
                    initial={'hidden'}
                    variants={imageVariants}
                    className={'w-full md:w-1/2 rounded-md flex items-center'}
                >
                    <Image src={whyHomeImage} alt={''} className={'rounded-md shadow shadow-lg shadow-gray-500 w-full object-contain'}/>
                </motion.div>
                <div className={'w-full md:w-1/2'}>
                    <motion.h1
                        animate={controls}
                        initial={'hidden'}
                        variants={whyHeadingVariants}
                        className={'relative flex gap-2 md:justify-end text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                    >
                        Why Choose Us <div className={'animate-bounce'}>?</div>
                        <span className={'absolute -bottom-2 md:end-0 w-1/3 bg-red-400 h-1 animate-pulse'}></span>
                    </motion.h1>
                    <div className={'flex w-full mt-10 flex-col gap-2 md:gap-4 justify-between'}>
                        <div className={'flex w-full gap-4 items-center'}>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={iconVariants1}
                            >
                                <MdHandshake size={45} className={'text-red-800'}/>
                            </motion.div>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={textVariants1}
                                className={'flex flex-col pb-2 md:pb-4 border-b border-gray-500'}>
                                <h1 className={'text-gray-900 font-bold text-xl md:text-2xl'}>Integrity</h1>
                                <p className={'text-gray-800 font-semibold text-md md:text-xl'}>
                                    Our team upholds integrity by always being truthful and demonstrating consistent moral principles and values.
                                    When it comes to our client's expectations, we are open and honest with them. We serve our customers with dignity.
                                </p>
                            </motion.div>
                        </div>
                        <div className={'flex w-full gap-4 items-center'}>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={iconVariants2}
                            >
                                <RiCustomerService2Fill size={45} className={'text-red-800'}/>
                            </motion.div>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={textVariants2}
                                className={'flex flex-col pb-2 md:pb-4 border-b border-gray-500'}>
                                <h1 className={'text-gray-900 font-bold text-xl md:text-2xl'}>Customer Service</h1>
                                <p className={'text-gray-800 font-semibold text-md md:text-xl'}>
                                    Good Dreams is dedicated to providing the most effective customer service and
                                    satisfaction. We take the time to get to know each client and respect their specific values and interests.
                                </p>
                            </motion.div>
                        </div>
                        <div className={'flex w-full gap-4 items-center'}>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={iconVariants3}
                            >
                                <IoOptions size={45} className={'text-red-800'}/>
                            </motion.div>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={textVariants3}
                                className={'flex flex-col pb-2 md:pb-4 border-b border-gray-500'}>
                                <h1 className={'text-gray-900 font-bold text-xl md:text-2xl'}>Customized Options</h1>
                                <p className={'text-gray-800 font-semibold text-md md:text-xl'}>
                                    We are committed to offering precisely designed solutions, even in the most challenging cases.
                                </p>
                            </motion.div>
                        </div>
                        <div className={'flex w-full gap-4 items-center'}>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={iconVariants4}
                            >
                                <AiFillReconciliation size={45} className={'text-red-800'}/>
                            </motion.div>
                            <motion.div
                                animate={controls}
                                initial={'hidden'}
                                variants={textVariants4}
                                className={'flex flex-col pb-2 md:pb-4 border-b border-gray-500'}>
                                <h1 className={'text-gray-900 font-bold text-xl md:text-2xl'}>Professional Consultants</h1>
                                <p className={'text-gray-800 font-semibold text-md md:text-xl'}>
                                    Our advisors and helpers have received extensive training and will provide the highest immigration
                                    legislation knowledge and competence.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;