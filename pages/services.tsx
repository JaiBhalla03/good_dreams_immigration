import React from 'react';
import Image from "next/image";
import taskImage from "@/images/taskImage.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import ServicesCard from "@/components/ServicesCard";
import {services} from '../utils/servicesDetails';


const Services = () => {
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
                        className={'font-semibold text-5xl'}>Services</motion.h1>
                    <motion.div
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 2}}}
                        className={'text-xl flex gap-1 items-center'}>
                        <Link href={'/'} className={'hover:underline'}>Home</Link>
                        <AiOutlineRight className={'mt-2'}/>
                        <Link href={'/resources'} className={'text-gray-400 mt-1 hover:underline'}>Services</Link>
                    </motion.div>
                </div>
            </motion.div>
            <div className={'bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:py-5'}>
                <div className={'pt-2 w-full md:pt-6 px-2 md:px-8 bg-white pb-8 flex flex-col md:flex-row gap-8'}>
                    <div className={'w-full flex flex-col items-center'}>
                        <motion.h1
                            initial={{x:-200, opacity: 0}}
                            animate={{x:0, opacity: 1, transition: {duration: 1.5}}}
                            className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                        >
                            Services we provide
                            <span className={'absolute -bottom-2 start-1/2 -translate-x-1/2 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                        </motion.h1>
                        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 mt-8'}>
                            {
                                services.map((service)=>(
                                    <ServicesCard
                                        linkUrl={service.linkUrl}
                                        imageUrl={service.image}
                                        heading={service.heading}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;