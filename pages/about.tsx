import React, {useEffect} from 'react';
import Image from "next/image";
import taskImage from '../images/taskImage.jpg';
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import aboutHome from "@/images/aboutImage.jpg";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutText from "@/components/AboutText";
import Aboutcard from "@/components/Aboutcard";
import {FaCcVisa} from "react-icons/fa";
import {MdFlight} from "react-icons/md";
import {HiClipboardDocumentList} from "react-icons/hi2";
import AboutCards from "@/components/AboutCards";


const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const aboutHeadingVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: 500 },
    };

    const imageVariants = {
        visible: {opacity: 1, y: 0, transition: {duration: 1.5}},
        hidden: {opacity: 0, y: 1000},
    }

    const textVariants = {
        visible: {opacity: 1, x: 0, transition: {duration: 1.5}},
        hidden: {opacity: 0, x: -400},
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);


    return (
        <div className={'overflow-x-hidden'}>
           <motion.div className={'h-72 relative'}
                   initial={{y:-200, opacity: 0}}
                   animate={{y:0, opacity: 1, transition: {duration: 1}}}
           >
               <Image src={taskImage} alt={''} className={'object-cover h-full w-full'}/>
               <div className={'absolute flex flex-col justify-center pl-20 gap-4 text-white top-0 h-full w-full bg-black bg-opacity-[50%]'}>
                   <motion.h1
                       initial={{x:-200, opacity: 0}}
                       animate={{x:0, opacity: 1, transition: {duration: 1.5}}}
                       className={'font-semibold text-5xl'}>About Us</motion.h1>
                   <motion.div
                       initial={{x:-200, opacity: 0}}
                       animate={{x:0, opacity: 1, transition: {duration: 2}}}
                       className={'text-xl flex gap-1 items-center'}>
                       <Link href={'/'} className={'hover:underline'}>Home</Link>
                       <AiOutlineRight className={'mt-2'}/>
                       <Link href={'/about'} className={'text-gray-400 mt-1 hover:underline'}>About</Link>
                   </motion.div>
               </div>
           </motion.div>
           <div ref={ref} className={'bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:pt-16 md:py-5'}>
               <div className={'pt-2 md:pt-6 px-2 md:px-8 bg-white pb-8 flex flex-col md:flex-row gap-8'}>
                   <div className={'w-full md:w-1/2 flex flex-col gap-2 md:gap-0 justify-between'}>
                       <motion.h1
                           animate={controls}
                           variants={aboutHeadingVariants}
                           initial={'hidden'}
                           className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                       >
                           Good Dreams Immigration
                           <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                       </motion.h1>

                       <motion.p
                           animate={controls}
                           variants={textVariants}
                           initial={'hidden'}
                           className={'text-[1rem] md:text-[1.3rem] font-normal text-gray-800'}
                       >
                           A reliable company offering immigration services all over the world is Good Dreams Immigration Solutions Inc. We are dedicated to offering all of our clients from Canada and outside authentic and goal-oriented immigration services. Applications for LMIA, skilled worker permanent residency, family class sponsorships, Super-visas for parents and grandparents, the Home Child Care Provider Programme, business visas, and student visas are among the areas of expertise of Good Dreams in Canada. To make the immigration transfer easier for our clients, we offer personalised step-by-step immigration help. Every client is unique, and each is worked with by a skilled RCIC consultant who uses their in-depth understanding of immigration law to provide expert counsel. Sushil Sharma is a member in good standing of the College of Immigration and Citizenship Consultants (CICC) and RCIC is acknowledged by the Government of Canada. Good Dreams Immigration Services has more than 8 years of experience in Canada creating client relationships at various professional levels. We are committed to assisting clients in realising their immigration objectives and obtaining the finest outcomes. From the moment a client knocks on our door until they successfully accomplish their goal in Canada, they will all be looked after.
                       </motion.p>
                   </div>
                   <motion.div
                       animate={controls}
                       initial={'hidden'}
                       variants={imageVariants}
                       className={'h-full w-full md:w-1/2 rounded-md flex items-center'}
                   >
                       <Image src={aboutHome} alt={''} className={'shadow shadow-lg shadow-gray-500 h-full object-contain rounded-md'}/>
                   </motion.div>
               </div>
           </div>
            <div className={'bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:py-5'}>
                <AboutText/>
            </div>
            <AboutCards/>
        </div>
    );
};

export default About;