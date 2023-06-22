import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const EntrepreneurshipVisaProgram = () => {
    return (
        <div>
            <TaskBar name={'Enterpreurship Visa Program'}/>
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
                                Federal skilled Trades(FST)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Canada is a country that welcomes aspiring entrepreneurs to come and establish themselves. They’ve also created a specialized entrepreneur program to support similar ventures. If you are a business owner interested in spending your money and immigrating to Canada, you should strongly consider this entrepreneur program. It can also open up a slew of fresh and exciting possibilities for you to examine.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Eligibility Requirements
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>To be eligible for these programs as an entrepreneur, you must have a net worth of at least $500,000 and be willing and able to start, invest in, or acquire a firm in Canada that will generate or preserve jobs.</li>
                                <li>Having at least three years of company management experience in the five years before the date, you submitted your application. This is the full-time assumption of responsibilities and obligations connected to the planning, managing, and controlling material, financial, and human resources, or a specialized process supported by a diploma.</li>
                                <li>You must also confirm and ensure that you have previously run a legal and profitable business. You have the option of being the lone owner or a part owner of the company. However, you must ensure that you have at least 25% of the required capital equity.</li>
                                <li>You should demonstrate that you have prior company management experience. This is based on a full-time employee. You must demonstrate that you worked full-time on the business’s development and that you completed all of the obligations and responsibilities assigned to you. It encompasses material, human resources, financial, and specialized processes management, planning, and control.</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Required Document to be eligible for Canada Entrepreneur Visa
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>Net worth verification report.</li>
                                <li>For owners of business you need to submit Business Registration License, Reference Letter, registration with taxation authorities, Proofs of Shareholding, Business income tax returns, financial statements as well as Article of incorporation.</li>
                                <li>Employment Reference Letter, employment contracts and Pay Slips for senior managerial level</li>
                                <li>Exploratory Visit Document</li>
                                <li>Business plan draft</li>
                                <li>Proof of business ownership</li>
                                <li>Educational Credentials</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EntrepreneurshipVisaProgram;