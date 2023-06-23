import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

const SideLink = () => {
    return (
        <motion.div
            initial={{x: -500 , opacity: 0}}
            animate={{x: 0, opacity: 1, transition: {duration: 1}}}
        >
            <ul className={'bg-white border-l border-t border-r border-gray-500 flex flex-col'}>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'permanent-resident'}>Permanent Resident(PR)</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'entrepreneurship-visa-program'}>Entrepreneurship Visa Program</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'student-visa'}>Student Visa</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'super-visa'}>Super Visa</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'visitor-visa'}>Visitor Visa</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'family-sponsorship'}>Family Sponsorship</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'work-permit'}>Work Permit</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'lmia'}>LMIA</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'business-visitor'}>Business Visitor</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'denied-entry'}>Denied Entry</Link>
                <Link className={'flex items-center justify-center p-4 text-xl border-b hover:bg-red-800 hover:text-white duration-300 transition-all border-gray-500 text-gray-500'} href={'extensions-and-restoration'}>Extensions and Restoration</Link>
            </ul>
        </motion.div>
    );
};

export default SideLink;