import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const Lmia = () => {
    return (
        <div>
            <TaskBar name={'LMIA'}/>
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
                                LMIA
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                To legally work in Canada, most temporary foreign workers require a Labour Market Impact Assessment (LMIA), formerly known as a Labour Market Opinion (LMO). A foreign worker may need a positive LIMA to obtain a work permit, depending on the industry.
                                <br/><br/>
                                Obtaining a Labour Market Impact Assessment (LMIA) is critical in obtaining a temporary work permit in Canada. It must be appropriately filed with Employment and Social Development Canada (ESDC)/Service Canada to certify that a company can hire a temporary worker.
                                <br/><br/>
                                The application process for an LMIA can take a few weeks or a few months – but some categories have an express process:
                            </p>
                            <ul className={'list-decimal'}>
                                <li>The most in-demand occupations as determined by the region (ex. skilled trades)</li>
                                <li>Highest-paying occupations (top 10%)</li>
                                <li>Work periods of limited duration (120 days or less)</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Application Requirements for LMIA
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                LMIA applications are mailed to the appropriate Service Canada Processing Centre in hard copy. Applications must include documentation demonstrating that the following criteria have been met:
                            </p>
                            <ul className={'list-decimal'}>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Processing Fee:</i> All LMIA applications include a $1000 CAD processing fee, which is non-refundable even if the outcome is negative. Certain applicants for in-home caregivers under the LMIAs may be exempt from this fee.
                                </li>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Business Legitimacy:</i> Documents proving the employer’s status as a legitimate Canadian business are business legitimacy documents.
                                </li>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Transition Plan:</i> Employers must submit a transition plan outlining how they intend to address the need to hire foreign nationals. Employers are eventually expected to hire Canadian citizens and permanent residents rather than TFWs.
                                </li>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Hiring Process:</i> Before hiring a TFW, employers must prove that they made significant efforts to recruit Canadian citizens and permanent residents to fill the position.
                                </li>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Wages:</i> Applications must include wage information for the TFW. This will distinguish high-wage positions from low-wage positions and ensure that TFWs are paid the same as their Canadian counterparts for labor.
                                </li>
                                <li>
                                    <i className={'font-bold not-italic text-gray-800'}>Workplace Safety:</i> TFWs are entitled to the same workplace health and safety standards as Canadians in comparable positions. As a result, employers must prove that TFWs will be covered by insurance that is at least equivalent to the health coverage provided by the province or territory in which the business is located.
                                </li>
                            </ul>
                            <p>
                                Do you have questions about working in Canada or hiring a foreign worker? Contact us today to see how we can help!
                                <br/><br/>
                                The application process for an LMIA can take a few weeks or a few months – but some categories have an express process: The most in-demand occupations as determined by the region (ex. skilled trades) Highest-paying occupations (top 10%) Work periods of limited duration (120 days or less)
                                <br/><br/>
                                Call us immediately to apply for a Student Visa or Study Permit Extension.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Lmia;