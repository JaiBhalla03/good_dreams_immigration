import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const DeniedEntry = () => {
    return (
        <div>
            <TaskBar name={'Denied Entry'}/>
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
                                Denied Entry
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Inadmissible means when a person is barred from entering into Canada.
                                A Canadian immigration officer will decide if you can enter Canada when you:
                                • apply for a visa or an Electronic Travel Authorization (eTA) or
                                • when you arrive at a port of entry.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                There are different reasons for inadmissibility:
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-disc'}>
                                <li>Security</li>
                                <li>Human or international rights violations</li>
                                <li>Criminality</li>
                                <li>Organized criminality</li>
                                <li>Health grounds</li>
                                <li>Financial reasons</li>
                                <li>Misrepresentation</li>
                                <li>Noncompliance with Immigration Refugee and Protection Act.</li>
                                <li>Inadmissible family member</li>
                            </ul>
                            <p className={'text-lg'}>
                                In such inadmissibility cases, foreign nationals need to prove the reasons of inadmissibility by providing detailed information about the visa application, complete paperwork to convince the visa officers. We, at Good Dreams we will help you to appeal your case with professional guidance according to Immigration Rules and Regulations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DeniedEntry;