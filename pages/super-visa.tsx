import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const SuperVisa = () => {
    return (
        <div>
            <TaskBar name={'Super Visa'}/>
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
                                Super Visa
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                A Super Visa is a particular type of visa that allows grandparents or parents to visit their children working or studying in Canada. With a Canada super visa, parents can stay in Canada with their children for up to two years without renewing their visa status.
                                <br/><br/>
                                In 2012, the Canadian government created the Super Visa program to make it easier for immigrants to bring their families to live and work. More than 89000 parents and grandparents of immigrants with permanent residency or citizenship status from various countries have visited Canada since the program began. The top of the list is made up of 36000 Indians.
                                <br/><br/>
                                These figures represent the flexibility rate of the Canada super visa for parents or grandparents and the contribution of Indians living in Canada and their function in this country. As a professional Canadian immigration consultant, we assist our customers in navigating this country of maple leaves to their desired location.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Eligibility criteria for a Super Visa -
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg font-bold text-gray-800'}>The following are the requirements for obtaining a Canada super visa:</p>
                            <ul className={'list-disc'}>
                                <li>The person in question must persuade the immigration officer that they will only visit their children in Canada and return to their home country when the time limit expires.</li>
                                <li>They must give proof of their financial situation, as well as a letter of financial support from their Canadian children or grandchildren.</li>
                                <li>Applicants must produce a letter of invitation from their Canadian-based children or grandchildren.</li>
                                <li>Applicants must show that they have a parental relationship with the person they want to visit in Canada.</li>
                                <li>Applicants must submit a copy of the child’s or grandchild’s income requirements. The income evaluation will be based on one or more of the following factors:</li>
                                <li>A copy of your most recent tax returns</li>
                                <li>The most recent T4 or T1 form</li>
                                <li>Pay stubs from employment insurance</li>
                                <li>Applicants visiting Canada must have a complete medical examination performed by a licensed physician.</li>
                            </ul>
                            <p className={'font-bold text-gray-800'}>
                                Call us immediately to apply for a Student Visa or Study Permit Extension.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SuperVisa;