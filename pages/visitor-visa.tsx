import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const VisitorVisa = () => {
    return (
        <div>
            <TaskBar name={'Visitor Visa'}/>
            <div className={'flex flex-col-reverse md:flex-row gap-8 px-2 md:px-20 py-10 bg-gray-100'}>
                <div className={'flex flex-col gap-8 w-full md:w-[30%]'}>
                    <SideLink/>
                    <ContactCard/>
                </div>
                <motion.div
                    initial={{x: 1000, opacity: 0}}
                    animate={{x: 0, opacity: 1, transition: {duration: 1.5}}}
                    className={'w-full md:w-[70%]'}>
                    <div className={'bg-white p-8 flex flex-col gap-4'}>
                        <div className={'flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Visitor Visa
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Every year, millions of people visit Canada to take advantage of many opportunities the country has to offer such as tourism, visiting family and friends and for temporary work plan. If you
                                want to visit Canada for a short period, you may need a Temporary Resident Visa (TRV). TRV (Canadian visitor visa), is an official document granted by a Canadian visa office that is placed
                                in your passport to demonstrate that you have completed the requirements for temporary residency in Canada (either as a visitor, a student, or a worker). TRV may be issued for single- entry visa, multiple-entry visa, visitor visa.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                To be eligible for a Visitor Visa, you must meet the following fundamental requirements:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>You must have a valid travel document (eg. passport).</li>
                                <li>Must have no criminal or immigration-related convictions.</li>
                                <li>Convince an immigration officer that you have ties to your native country, such as a job, a residence, financial assets, or family.</li>
                                <li>Convince an immigration official that you will leave Canada at the end of your visit and that you have enough money to cover your expenses.
                                    If you are already in Canada and want to stay longer, we can help you to get extension of your visitor visa.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default VisitorVisa;