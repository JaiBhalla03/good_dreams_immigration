import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const SelfEmployed = () => {
    return (
        <div>
            <TaskBar name={'Self Employed'}/>
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
                                Self Employed
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Self-Employed Program is specially designed to attract class of persons who may become permanent residents on the basis of their ability to become economically establish in Canada and those who are self-employed persons. To immigrate as a self-employed person, you must:
                            </p>
                            <ul className={'list-decimal'}>
                                <li>Have relevant artistic or athletic experience living in country of origin.</li>
                                <li>be willing and able to be self-employed in Canada</li>
                                <li>meet the program’s selection criteria, and</li>
                                <li>meet medical security and other conditions</li>
                            </ul>
                            <p>
                                The self-employed applicant must demonstrate the intention & ability to establish a business that will create self employment for them and make significant contribution to the Canadian economy. For a successful application, the candidate must also contribute reasonably to one of these fields in Canada through relevant experience and skills. Experience At a minimum, your experience must be:
                            </p>
                            <ul className={'list-disc'}>
                                <li>for cultural activities:
                                    <ul className={'list-decimal'}>
                                        <li>2 one-year periods being self-employed in cultural activities, or</li>
                                        <li>2 one-year periods participating at a world-class level in cultural activities, or</li>
                                        <li>a combination of a one-year period described in (1), and a one-year period described in (2)</li>
                                    </ul>
                                </li>
                                <li>for athletics:
                                    <ul className={'list-decimal'}>
                                        <li>2 one-year periods being self-employed in athletics, or</li>
                                        <li>2 one-year periods participating at a world class level in athletics, or</li>
                                        <li>a combination of a one-year period described in (1) above, and a one-year period described in (2) above</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Selection criteria
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>Experience</li>
                                <li>Education</li>
                                <li>Age</li>
                                <li>Language Abilities</li>
                                <li>adaptability</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Medical, security checks and other requirement
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                You and your family members must have a medical exam and get police certificates.
                                <br/><br/>
                                You must also show that you have enough money to support yourself and your family after you get to Canada.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SelfEmployed;