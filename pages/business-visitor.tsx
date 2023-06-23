import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const BusinessVisitor = () => {
    return (
        <div>
            <TaskBar name={'Business Visitor'}/>
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
                                Business Visitor
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                The B-1 visa is for people who want to temporarily visit Canada for business purposes or conferences, guest lectures, or investment meeting in regards to a business without being a part of the Canadian labor market. The duration can be for some days, weeks, or up to 6 months.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Points that indicate you are a business visitor
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p>To qualify the requirements, you must show proof that-</p>
                            <ul className={'list-disc'}>
                                <li>Your plan to stay in Canada is for less or up to 6 months.</li>
                                <li>You have no plans on entering the Canadian labor Market within that period.</li>
                                <li>Your mainland of business is somewhere outside Canada and so your source of income and profits are.</li>
                                <li>You’ll have to meet all the basic entry requirements such as a valid travel document, enough money to sponsor your stay and return, plan to leave Canada once the business purpose is served and most importantly you must have a certification supporting you’re not a criminal or isn’t a risk to Canadians health and security.</li>
                            </ul>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BusinessVisitor;