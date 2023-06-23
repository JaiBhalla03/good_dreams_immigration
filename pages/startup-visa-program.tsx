import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const StartupVisaProgram = () => {
    return (
        <div>
            <TaskBar name={'Startup-visa-program'}/>
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
                                Startup visa program
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                The Canadian Start up-Up Visa is an outstanding immigration route for eligible entrepreneurs to start or
                                expand a business in Canada. Accepted applicants will be granted unconditional, irreversible Permanent
                                Residence status in Canada based on their plans to start a business in the country. It’s not like specific
                                company initiatives that give out temporary permits. The visa is permanent and irrevocable for the entire
                                family under this program.
                                <br/><br/>
                                To be eligible for the Start-up Visa Program, you must:
                            </p>
                            <ul className={'list-disc'}>
                                <li>Have a qualifying business</li>
                                <li>Get a letter of support from a designated organization</li>
                                <li>Meet the language requirements</li>
                                <li>Bring enough money to settle</li>
                            </ul>
                            <p className={'text-lg font-bold text-gray-800'}>
                                Must have a letter of support from a designated organization (a business group that has been approved to invest in or support possible start-ups) :
                            </p>
                            <ul className={'list-disc'}>
                                <li>You must show that you have received funding from a venture capital firm, an angel investor organization, or a business incubator.</li>
                                <li>If the applicant is accepted into the Canadian business incubator program, no investment is required.</li>
                                <li> Minimum investment of $200,000 CAD if the investment comes from one or more designated Canadian venture capital funds.</li>
                                <li> Minimum investment of $75,000 CAD if the investment comes from two or more Canadian angel investor groups.</li>
                                <li>You must propose your company idea to the organization and persuade them that it is worthwhile to support.</li>
                                <li>The strategy to pitching a business idea must be unique.</li>
                                <li>If your pitch is accepted, the organization will provide you a letter of support, which you must submit with your start-up visa application.</li>
                                <li>Minimum Canadian Language Benchmark (CLB) 5 level in either English or French.</li>
                            </ul>
                            <p className={'text-lg font-bold text-gray-800'}>
                                Evidence of funds:
                            </p>
                            <p>
                                On arrival in Canada, you must have sufficient settlement funds to sustain yourself and any dependents in Canada. The amount you will require is determined by the size of your family as per current LICO for urban areas with population of 500,000 and more.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StartupVisaProgram;