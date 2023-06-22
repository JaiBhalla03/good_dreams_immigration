import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const PermanentResident = () => {
    return (
        <div>
            <TaskBar name={'Permanent Resident(PR)'}/>
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
                                Permanent Resident(PR)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                A permanent resident (PR) of Canada is one that has been granted permission to live, work, and settle in Canada
                                for the rest of their lives as long as they maintain their status. As a permanent resident of Canada, you have
                                the right to benefit from the same social benefits as Canadian citizens if you pay your taxes and follow all
                                government and standard law regulations.
                                <br/><br/>
                                To become a permanent resident, one must apply to Immigration, Refugees, and Citizenship Canada (IRCC) through
                                one of Canada’s many immigration programs.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Benefits
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p>
                                Being a permanent resident of Canada, pay your taxes, and follow federal and provincial laws and regulations. In
                                that case, you are entitled to the same social benefits as Canadian citizens. For example:
                            </p>
                            <ul className={'list-disc'}>
                                <li>Health care</li>
                                <li>Canada Pension Plan</li>
                                <li>Unemployment insurance</li>
                                <li>Freedom to live, study, and work anywhere in Canada</li>
                                <li>Protection under the Canadian Charter of Rights and Freedoms</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PermanentResident;
