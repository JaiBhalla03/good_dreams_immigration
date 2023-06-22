import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const FederalSkilledWorker = () => {
    return (
        <div>
            <TaskBar name={'Federal skilled worker'}/>
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
                                Federal Skilled Worker Program (FSWP)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                The Federal Skilled Worker program is one of the most well-known Express Entry programs. Candidates are
                                chosen based on their CRS score, which is determined by their age, level of education, language skills,
                                adaptability, arranged employment and experience. In general, obtaining resident status under the FSW
                                program takes around a year, although the timetable is heavily dependent on your CRS score and the
                                Canadian immigration plan.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Eligibility:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>1 year of continuous full-time or equivalent paid work experience in a skilled occupation classified as skill level 0, A, or B by the National Occupational Classification (NOC) in the previous 10 years</li>
                                <li>Validated language ability in English or French equivalent to the Canadian Language Benchmark (CLB) 7 in all abilities (reading, writing, listening, and speaking)</li>
                                <li>Score a minimum of 67 out of 100 points on the six selection factors.</li>
                                <li>Proof of funds for applicant and accompanying family</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FederalSkilledWorker;