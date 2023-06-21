import React, {useEffect} from 'react';
import Image from "next/image";
import aboutHome from '../images/aboutHomeImage.jpeg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
        <div ref={ref} className={'overflow-x-hidden bg-gray-100 md:h-screen flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:py-16'}>
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
                       className={'text-[1rem] md:text-[1.2rem] font-normal text-gray-800'}
                   >
                       Good Dreams Immigration Solutions Inc. is a trustworthy organization providing immigration services across the globe. We are
                       committed to provide honest and result-oriented immigration services to all our clients from Canada and overseas. Blue Sphere
                       specializes in LMIA applications, skilled worker Permanent residency applications, Family class sponsorships, Super-visa for
                       parents and grandparents, Home Child Care Provider Program, Business visa, and Student visa applications in Canada. We serve
                       our clients with customized step-by-step immigration guidance to ease their immigration transition. Every client has different
                       needs and our competent RCIC consultant works with each client and provides professional guidance using their extensive knowledge
                       and experience of immigration law.
                   </motion.p>
               </div>
               <motion.div
                   animate={controls}
                   initial={'hidden'}
                   variants={imageVariants}
                   className={'h-full w-full md:w-1/2 rounded-md flex items-center'}
               >
                   <Image src={aboutHome} alt={''} className={'shadow shadow-lg shadow-gray-500 w-full object-contain rounded-md'}/>
               </motion.div>
           </div>

        </div>
    );
};

export default About;