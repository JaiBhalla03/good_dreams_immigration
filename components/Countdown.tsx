import React, {useEffect} from 'react';
import Image from 'next/image';
import countdownImage from '../images/countdownImage.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Countdown = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const componentVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, y: 500 },
    };
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <div ref={ref} className={'h-screen md:h-96'}>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={componentVariants}
                className={'h-full relative'}>
                <Image src={countdownImage} alt={''} className={'object-cover h-full w-full'} />
                <div className={'absolute top-0 h-full w-full bg-black bg-opacity-[50%]'}>
                    <div className={'flex flex-col gap-4 md:gap-0 md:flex-row justify-around text-white px-10 pt-10 md:pt-28'}>
                        <div className={'flex flex-col items-center justify-center gap-1 md:gap-2'}>
                            <div className={'text-4xl font-bold'}>2000+</div>
                            <div className={'text-2xl font-semibold'}>Happy Client</div>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-1 md:gap-2'}>
                            <div className={'text-4xl font-bold'}>100%</div>
                            <div className={'text-2xl font-semibold'}>Satisfaction</div>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-1 md:gap-2'}>
                            <div className={'text-4xl font-bold'}>4.5*</div>
                            <div className={'text-2xl font-semibold'}>Reviews</div>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-1 md:gap-2'}>
                            <div className={'text-4xl font-bold'}>700+</div>
                            <div className={'text-2xl font-semibold'}>Students</div>
                        </div>
                        <div className={'flex flex-col items-center justify-center gap-1 md:gap-2'}>
                            <div className={'text-4xl font-bold'}>180+</div>
                            <div className={'text-2xl font-semibold'}>Universities</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Countdown;
