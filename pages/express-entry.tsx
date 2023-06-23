import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const ExpressEntry = () => {
    return (
        <div>
            <TaskBar name={'Express Entry'}/>
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
                                Express Entry
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                This Express entry program is used to manage applications for Permanent Residency of skilled workers. This system will allow IRCC to manage efficiently the number and type of skilled worker applications by creating a pool of qualified candidates from which Canadian employers, Provinces and territories may recruit and select skilled immigrants.
                                <br/><br/>
                                The federal government evaluates if an interested candidate is eligible for an Express Entry program once the individual uploads an online profile. Candidates who meet the Express Entry eligibility requirements are accepted into the pool and ranked using the Comprehensive Ranking System (CRS).Top selected candidates receive an ITA( Invitation to apply ),an invitation by IRCC to foreign nationals who are qualified for permanent residency. An ITA does not guranteePR. When ITA is received the candidate will have 60 days to submit an application for permanent residence. Once IRCC received the PR application, client will receive Acknowledge of Receipt (AOR). The date when the AOR is received and the profile is created is the date from where the intended processing is expected to complete within 3 months.
                            </p>
                            <p className={'font-bold text-gray-800'}>
                                Those who are not invited to apply for PR after a year, may then re-submit their file to re-enter the pool depending upon the eligibility at the time of application.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExpressEntry;