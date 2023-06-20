import React from 'react';
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiFillFacebook, AiFillInstagram, AiFillMail, AiOutlineTwitter} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";

const Info = () => {
    return (
        <div className={'p-2 md:p-0 md:h-10 text-gray-800 bg-gray-200 flex justify-center items-center'}>
            <div className={'flex flex-col items-center md:flex-row gap-4 md:gap-8'}>
                <div className={'group flex gap-2 cursor-pointer items-center'}>
                    <BsFillTelephoneFill size={18} className={'group-hover:text-gray-900 group-hover:scale-105 duration-500 transition-all'}/>
                    <div className={'group-hover:underline group-hover:text-gray-900 duration-500 transition-all font-semibold'}>+919415483472</div>
                </div>
                <div className={'group flex gap-2 cursor-pointer items-center'}>
                    <AiFillMail size={18} className={'group-hover:text-gray-900 group-hover:scale-105 duration-500 transition-all'}/>
                    <div className={'group-hover:underline group-hover:text-gray-900 duration-500 transition-all font-semibold'}>Info@gooddreamsimmigration.com</div>
                </div>
                <div className={'flex gap-2 items-center'}>
                    <IoLogoWhatsapp size={18} className={'hover:scale-110 duration-300 transition-all hover:text-gray-900 cursor-pointer'}/>
                    <AiFillFacebook size={18} className={'hover:scale-110 duration-300 transition-all hover:text-gray-900 cursor-pointer'}/>
                    <AiOutlineTwitter size={18} className={'hover:scale-110 duration-300 transition-all hover:text-gray-900 cursor-pointer'}/>
                    <AiFillInstagram size={18} className={'hover:scale-110 duration-300 transition-all hover:text-gray-900 cursor-pointer'}/>
                </div>
            </div>
        </div>
    );
};

export default Info;