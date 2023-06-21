import React, {useEffect} from 'react';
import Aboutcard from "@/components/Aboutcard";
import {FaCcVisa} from "react-icons/fa";
import {MdFlight} from "react-icons/md";
import {HiClipboardDocumentList} from "react-icons/hi2";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {motion} from 'framer-motion';

const AboutCards = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();


    const cardVariants1 = {
        visible: {opacity: 1, scale:1, transition: {delay: 0.5}},
        hidden: {opacity: 0, scale: 0},
    }
    const cardVariants2 = {
        visible: {opacity: 1, scale:1, transition: {delay: 1}},
        hidden: {opacity: 0, scale: 0},
    }
    const cardVariants3 = {
        visible: {opacity: 1, scale:1, transition: {delay: 1.5}},
        hidden: {opacity: 0, scale: 0},
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className={'bg-gray-100 flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-20 w-full gap-4 justify-between py-4 md:py-5'}>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={cardVariants1}
            >
                <Aboutcard
                    icon={FaCcVisa}
                    heading={'VISA'}
                    description={'Over 10 million people visit Canada to take advantage of the many opportunities. Specific entry ' +
                        'requirements will apply depending on where you live and the reason for your visit.'}
                />
            </motion.div>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={cardVariants2}
            >
                <Aboutcard
                    icon={MdFlight}
                    heading={'IMMIGRATION'}
                    description={'Immigration procedures include express entry, business entry, and so on. Find out whether you are ' +
                        'eligible to immigrate in one of these classes.'}
                />
            </motion.div>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={cardVariants3}
            >
                <Aboutcard
                    icon={HiClipboardDocumentList}
                    heading={'CITIZENSHIP'}
                    description={'If you meet all of the requirements for citizenship, you are eligible to take the citizenship test. ' +
                        'As a Canadian citizen, you have certain rights and benefits.'}
                />
            </motion.div>
        </div>
    );
};

export default AboutCards;