import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const CanadianExperienceClass = () => {
    return (
        <div>
            <TaskBar name={'Canadian Experience Class(CEC)'}/>
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
                                Canadian Experience Class(CEC)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                In 2008, Immigration, Refugees and Citizenship Canada (IRCC) provided a specialized skilled worker
                                pathway to temporary foreign workers and international graduates seeking permanent residence status
                                introduced the Canadian Experience Class (CEC) program.
                                <br/><br/>
                                Candidates with recent Canadian job experience who wish to immigrate to Canada permanently should apply
                                for the Canadian Experience Class (CEC). It has become one of most popular immigration routes for talented
                                workers in Canada. Also, one of the fastest paths to PR in Canada, requiring only three to four months
                                process!
                                <br/><br/>
                                CEC are managed under the Express Entry System, and interested candidates will be ranked using the
                                Comprehensive Ranking System (CRS). Applicants with competitive CRS scores will be invited to Canadian
                                permanent residence.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Candidate must meet the following conditions to be eligible for the CEC:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>Must have at least 12 months of full-time specialized work experience NOC(O,A,B) in Canada in the last 36 months</li>
                                <li>Have gained the work experience in Canada ( after graduation in case of students) with proper authorization.</li>
                                <li>Work experience gained in Quebec counts</li>
                                <li>No need to prove settlement funds</li>
                                <li>Proof of language proficiency through an approved test (NOC 0,A : CLB 7)/(NOC B : CLB 5)</li>
                            </ul>
                            <p className={'font-bold text-gray-800'}>
                                Notably, self-employment and full-time student job experience are ineligible for the Canadian
                                Experience Class.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CanadianExperienceClass;