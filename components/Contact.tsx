import React, {FormEvent, useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {alertcenter_v1beta1} from "googleapis";


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [message, setMessage] = useState('');

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

    const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = {
            name, email, phone, inquiry, message
        }
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const content = await response.json();
        alert(content?.data?.tableRange);
        setName('');
        setEmail('');
        setPhone('');
        setInquiry('');
        setMessage('');
        console.log(form)
    }

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
                    <form
                        className={'h-[80%] w-full md:w-[90%] px-2 md:px-8 py-4 flex flex-col gap-4'}
                        onSubmit={handleSubmit}
                    >
                        <div className={'flex flex-col md:flex-row justify-between gap-4'}>
                            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder={'Name'} name={'name'} id={'name'} type={'text'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={'Email'} name={'email'} id={'email'} type={'email'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                        </div>
                        <div className={'flex flex-col md:flex-row justify-between gap-4'}>
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder={'Phone Number'} name={'phone'} id={'phone'} type={'tel'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                            <input value={inquiry} onChange={(e)=>setInquiry(e.target.value)} placeholder={'Inquiry About'} name={'inquiry'} id={'inquiry'} type={'text'} className={'p-2 h-12 border border-red-800 w-full md:w-1/2 focus:outline-none'}/>
                        </div>
                        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder={'Your Message'} name={'message'} id={'message'} className={'p-2 h-24 border border-red-800 resize-none focus:outline-none'}/>
                        <button className={'w-36 md:w-48 p-3 text-md md:text-xl font-semibold border border-red-800 text-red-800 mx-auto hover:bg-red-800 hover:text-white hover:border-white duration-500 transition-all'}
                                type={'submit'}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;