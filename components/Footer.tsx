import React from 'react';
import Image from "next/image";
import logo from '../images/logo.png';
import rcic from '../images/rcic.png';
import capic from '../images/capic.jpg';
import {BsTelephoneFill} from "react-icons/bs";
import {AiTwotoneMail} from "react-icons/ai";
import {ImLocation2} from "react-icons/im";

const Footer = () => {
    return (
        <div className={'overflow-x-hidden h-1/2 text-gray-900'}>
            <div className={'flex flex-col md:flex-row justify-between w-full bg-red-800 py-8 px-2 md:px-16'}>
                <div className={'flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-between'}>
                    <div className={'h-48 w-full md:w-auto flex flex-col justify-center'}>
                        <div className={'p-2 shadow shadow-lg flex items-center justify-center shadow-black rounded-md bg-gray-100'}>
                            <Image src={logo} width={300} alt={''}/>
                        </div>
                    </div>
                    <div className={'p-2 flex md:flex-col w-full md:w-auto shadow shadow-lg shadow-black rounded-md bg-gray-100'}>
                        <div className={'h-36 flex flex-col justify-center gap-2 items-center border-b border-gray-400'}>
                            <div className={'flex items-center justify-center text-lg font-semibold text-gray-900'}>RCIC</div>
                            <div className={''}>
                                <Image src={rcic} width={150} alt={''}/>
                            </div>
                        </div>
                        <div className={'h-36 flex flex-col justify-center gap-2 items-center'}>
                            <div className={'flex items-center justify-center text-lg font-semibold text-gray-900'}>CAPIC-ACCPI</div>
                            <div className={''}>
                                <Image src={capic} width={80} alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col justify-around bg-gray-100 rounded-md shadow shadow-lg shadow-black py-4 px-8 mt-8 md:mt-0 w-full md:w-96'}>
                    <h1 className={'text-3xl font-bold'}>Contact Details</h1>
                    <div className={'text-lg border-b border-gray-500 pb-2 font-semibold'}>
                        Sandeep Khangura (RCIC)
                    </div>
                    <div className={'flex gap-2 items-center text-lg border-b border-gray-500 pb-2'}>
                        <BsTelephoneFill size={20}/>
                        <div>+1 778 792 2000</div>
                    </div>
                    <div className={'flex gap-2 items-center text-lg border-b border-gray-500 pb-2'}>
                        <AiTwotoneMail size={20}/>
                        <div>Info@gooddreamsimmigration.com</div>
                    </div>
                    <div className={'flex gap-2 items-center text-lg border-b border-gray-500 pb-2'}>
                        <ImLocation2 size={20}/>
                        <div>11556, 84 B, Avanue, Delta, BC, Canada, V4C2T6</div>
                    </div>
                </div>
            </div>
            <div className={'py-4 px-1 md:px-8 bg-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-200 font-normal shadow-inner shadow-lg shadow-gray-500 border border-gray-600'}>
                <div className={'flex gap-2'}>
                    Copyright © <i className={'font-semibold cursor-pointer hover:underline'}>Good Dream Immigration</i>.
                    <p className={'hidden md:block'}>Developed by Jai Bhalla</p>
                </div>
                <div className={'font-semibold flex gap-1'}>
                    <div className={'non-italic cursor-pointer hover:underline'}>Privacy Policy</div>  /  <div className={'non-italic cursor-pointer hover:underline'}>Terms & Condition</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;