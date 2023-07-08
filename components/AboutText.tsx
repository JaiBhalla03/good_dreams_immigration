import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Aboutcard from "@/components/Aboutcard";
import {MdFlight} from "react-icons/md";
import {FaCcVisa} from "react-icons/fa";
import {HiClipboardDocumentList} from "react-icons/hi2";

const AboutText = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();


    const textVariants1 = {
        visible: {opacity: 1, x:0, transition: {delay: 1}},
        hidden: {opacity: 0, x: 1000},
    }
    const textVariants2 = {
        visible: {opacity: 1, x:0, transition: {delay: 1.5}},
        hidden: {opacity: 0, x: 1000},
    }
    const textVariants3 = {
        visible: {opacity: 1, x:0, transition: {delay: 2}},
        hidden: {opacity: 0, x: 1000},
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);


    return (
        <div
            ref={ref}
            className={'overflow-x-hidden pt-2 md:pt-6 px-2 md:px-8 bg-white pb-8 flex flex-col gap-4'}>
            <motion.div
                initial={'hidden'}
                variants={textVariants1}
                animate={controls}
                className={'text-xl md:text-2xl font-semibold text-red-800'}>
                For any immigration inquiry, reach out to us via email text, or phone. We are always here to serve you.
            </motion.div>
            <motion.div
                initial={'hidden'}
                variants={textVariants2}
                animate={controls}
            >
                <div className={'text-xl text-red-800 font-semibold'}>Vision:</div>
                <div className={'text-md md:text-lg font-thin'}>
                    Good Dreams Immigration Solutions is committed to being an easily approachable and affordable Immigration consultant
                    service for all those looking forward to studying, working, visiting, or living permanently in Canada by providing guaranteed
                    customer satisfaction. We provide all our immigration services with high professional standards.
                </div>
            </motion.div>
            <motion.div
                initial={'hidden'}
                variants={textVariants3}
                animate={controls}
            >
                <div className={'text-xl text-red-800 font-semibold'}>
                    Mission:
                </div>
                <div className={'text-md md:text-lg font-thin'}>
                    Our mission is to develop Good Dreams as the client’s most value-oriented, reliable, one-stop immigration source all over the world.
                    We work towards the success of our clients by providing professional immigration solutions to their needs. We make every effort to move our
                    clients successfully towards their Canadian destination goals.
                </div>
            </motion.div>
        </div>
    );
};

export default AboutText;