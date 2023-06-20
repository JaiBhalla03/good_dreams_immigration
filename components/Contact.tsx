import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Contact = () => {
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
        <div ref={ref} className={'relative h-96 flex justify-center bg-gray-100 px-4 md:px-20'}>
            <motion.div
                animate={controls}
                initial={'hidden'}
                variants={componentVariants}
                className={'absolute rounded-md -top-48 md:-top-32 bg-white p-4 md:p-8 h-[140%] md:h-[120%] w-[90%] md:w-[80%] shadow shadow-lg shadow-gray-500'}
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
    );
};

export default Contact;