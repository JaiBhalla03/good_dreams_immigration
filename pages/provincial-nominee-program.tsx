import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const ProvincialNomineeProgram = () => {
    return (
        <div>
            <TaskBar name={'Provincial Nominee Program(PNP)'}/>
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
                                Provincial Nominee Program(PNP)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Provinces and territories in Canada can nominate people who want to immigrate to Canada and live in a specific province through the Provincial Nominee Programs (PNP). Under the PNP, Canada aims to welcome around 80,000 immigrants every year. All provinces and territories in Canada have their own Provincial
                                <br/><br/>
                                Nominee Program (PNP) tailored to their own economic and demographic requirements. Because program requirements and application procedures differ widely between provinces, interested applicants should check with each to see if they are eligible.
                                <br/><br/>
                                Each province has its own set of criteria for determining who is eligible. PNPs use Expressions of Interest (EOI) methods similar to Express Entry and hold frequent lotteries to invite the highest-scoring individuals. To apply, you do not need to have an Express Entry profile. You can apply to a PNP stream directly.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                Territories and Provinces
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-gray-800 font-bold'}>How to apply for a Provincial Nominee Program in Canada</p>
                            <p>All final immigration decisions in Canada are made by the federal government, not the provincial governments. As a result, PNPs require two steps. First, you must apply to the government for a provincial nomination. If the province approves your application, you must apply to the federal government for Canadian permanent resident status.</p>
                            <p className={'text-gray-800 font-bold'}>To apply for your chosen PNP, follow these simple steps:</p>
                            <ul className={'list-disc'}>
                                <li>Check whether you’re eligible: Use the PNP Live Tracker to keep track of available PNPs and determine whether you are eligible for any of the several alternatives.</li>
                                <li>Fill out the form to apply for the PNP: Fill out an application and mail it to the appropriate province or territory.</li>
                                <li>Receive your Provincial Nomination Certificate: If your application is complete and you are eligible, you will receive an official Provincial Nomination certificate, allowing you to move to the next round.</li>
                                <li>Submit your application for permanent residence: To become a permanent resident of Canada, you must apply to the federal government. You could apply using Express Entry if you were nominated through an Express Entry-aligned PNP. Otherwise, you’ll have to fill out a paper application.</li>
                            </ul>
                            <p>Some PNP streams are first-come, first-served, while others require potential applicants to fill out an Expression of Interest form first. Furthermore, while specific PNP streams function independently of the federal Express Entry immigration system (called “base” streams), others are coordinated with Express Entry.</p>
                            <p className={'text-gray-800 font-bold'}>How to apply for a Provincial Nominee Program in Canada</p>
                            <p>All final immigration decisions in Canada are made by the federal government, not the provincial governments. As a result, PNPs require two steps. First, you must apply to the government for a provincial nomination. If the province approves your application, you must apply to the federal government for Canadian permanent resident status.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProvincialNomineeProgram;