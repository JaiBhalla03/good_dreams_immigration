import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const WorkPermit = () => {
    return (
        <div>
            <TaskBar name={'Work Permit'}/>
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
                                Work Permit
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                A work permit is a legal document that allows a foreign national to work in Canada. Working in Canada is also an excellent first step for individuals looking to relocate permanently to the country.
                                <br/><br/>
                                Most foreign national require permission to work in Canada, with a few exceptions. There are 2 types of work permits: Open and Closed Work Permit.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Open Work Permit:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul>
                                <li>Open work permit enables foreign nationals to work for any Canadian employer for a specific time period except for those listed on the ineligible list (who failed the compliance standards of work).</li>
                                <li>Open work permit is not job specific.</li>
                                <li>You do not need LMIA from Employment and Social Development of Canada (ESDC).There are several exceptions to this rule, and foreign workers may apply for a work permit without an LMIA or a job offer.</li>
                            </ul>
                            <p>
                                A recent graduate from a Canadian Designated Learning Institute (DLI) or the spouse of someone who already has a work or study permit in Canada are eligible for open work permit.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Closed Work Permit (Employer specific work permits):
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p>
                                Most foreign national will need a Canadian employment offer accompanied by a Labour Market Impact Assessment to apply for a closed work permit (LMIA). This work permit is linked to specific job, employer and location.
                                <br/><br/>
                                Candidates who are eligible to apply for a work permit must also meet the following requirements:
                            </p>
                            <ul className={'list-disc'}>
                                <li>Show their intention to leave when their work permit expires; and</li>
                                <li>Demonstrate that you have enough money to maintain themselves and their families in Canada and to return home; and </li>
                                <li>Not barred from entering Canada due to a criminal conviction or a physical condition; and intend to work for an eligible employer; and</li>
                                <li>Can present any documentation necessary to confirm their right to enter Canada</li>
                            </ul>
                            <p>
                                All cases are handled by competent immigration consultants. Good Dreams believes in transparency and its value oriented consultancy.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkPermit;