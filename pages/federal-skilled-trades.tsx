import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const FederalSkilledTrades = () => {
    return (
        <div>
            <TaskBar name={'Federal skilled Trades(FST)'}/>
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
                                The Federal Skilled Trades (FST) program is one of three express entry programs managed by the Express Entry system. Individuals with a skilled trade’s qualification and experience are eligible to apply for the Federal Skilled Trades Program (FSTP), which allows them to become permanent residents of Canada.
                                <br/><br/>
                                Applications for the Federal Skilled Trades Program are evaluated based on an applicant’s ability to become economically established in Canada upon arrival. FST evaluates applicants using the Comprehensive Ranking System (CRS) and invites only the most competitive candidates to apply for permanent residence in Canada. The program aims to attract and retain skilled tradespeople worldwide by offering them permanent residency in Canada.
                                <br/><br/>
                                People with a skilled trades qualification and experience can apply for the Federal Skilled Trades Program (FSTP), which allows them to become permanent citizens of Canada. The Canadian government created this initiative in 2013 in response to a workforce shortfall in skilled trades. The program attempts to attract and retain skilled tradespeople from throughout the world by providing them with permanent residence in Canada.
                                <br/><br/>
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Eligibility:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p>To be eligible for a Canada Immigration permanent resident, candidates must meet the following minimal requirements:</p>
                            <ul className={'list-disc'}>
                                <li>Meet required levels of English or French( CLB:5 speaking & listening ,CLB:4 reading & writing)</li>
                                <li>2 years of full –time work experience(or equivalent) in a skilled trade within 5 years before applying</li>
                                <li>Meet all the job requirements for the skilled trade according to the NOC( expect for provincial certificate )</li>
                                <li>Have a offer ( LMIA approved ) of full –time employment from up to 2 employers for at least 1 year or certificate of qualification in that skilled trade issued by a Canadian provincial or territorial body</li>
                                <li>Work experience does not need to be continuous and must be acquired after obtaining the correspondent qualifications to perform such job.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FederalSkilledTrades;