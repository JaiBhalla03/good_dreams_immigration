import React from 'react';
import contactCardImage from '../images/contactCardImage.jpg'
import Image from "next/image";
import Link from "next/link";

const ContactCard = () => {
    return (
        <div className={'w-full relative'}>
            <Image src={contactCardImage} alt={''} className={'w-full h-72 object-cover'}/>
            <div className={'flex items-center justify-center absolute top-0 bg-black w-full h-full bg-opacity-[50%]'}>
                <div className={'flex flex-col items-center gap-4 text-white text-xl font-semibold'}>
                    <div className={'flex justify-center'}>
                        Appointment Service call us<br/>
                        + 1 778 792 2000
                    </div>
                    <div className={'flex justify-center'}>
                        Monday - Saturday from<br/>
                        9:00 a.m. to 7:00 p.m.
                    </div>
                    <Link href={'/contact'} className={'flex justify-center bg-red-800 p-3 w-[70%]'}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;