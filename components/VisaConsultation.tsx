import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const VisaConsultation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const componentVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
    };
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <div ref={ref} className={'relative h-80 flex justify-center bg-gray-100 px-20'}>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={componentVariants}
                className={'absolute -top-32 bg-white p-8 h-96 w-[80%] shadow shadow-md shadow-black '}
            >

            </motion.div>
        </div>
    );
};

export default VisaConsultation;