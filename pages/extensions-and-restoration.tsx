import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const ExtensionsAndRestoration = () => {
    return (
        <div>
            <TaskBar name={'Extensions and Restoration'}/>
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
                                Extensions and Restoration
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                <i className={'text-gray-800 font-bold'}>Study Permit extensions: </i>An international student may apply for the renewal of their study permit 30 days before the expiry of the current study permit. And the foreign national has complied with all conditions imposed on entry into Canada. An international student could continue to work under implied status once the extension application is submitted before the expiration of the status.
                                <br/><br/>
                                <i className={'text-gray-800 font-bold'}>Work Permit Extensions:</i>  An applicant must have a valid job offer Submit an in-Canada application for an employer-specific work permit that is supported by a Labour Market Impact Assessment (LMIA) or an LMIA-exempt offer of employment, Meet all other standard admissibility criteria.
                                <br/><br/>
                                <i className={'text-gray-800 font-bold'}>Restoration of Status:</i> To apply for restoration of status once work permit has expired, application must be submitted within 90 days of expiration of status.
                                <br/><br/>
                                <i className={'text-gray-800 font-bold'}>Visitor Visa Extension:</i> Applicants must apply before their status expires and have complied with all the conditions that were imposed on entry.
                                <br/><br/>
                                <i className={'text-gray-800 font-bold'}>Bridging Open Work permit:</i> A bridging open work permit (BOWP) allows the individuals to keep working while they wait for the results of their permanent residence application. The individual must be living in Canada, must be the principal applicant on your permanent residence application and have passed the completeness check, must have received the acknowledgement receipt of PR application.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExtensionsAndRestoration;