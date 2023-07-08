import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const StudentVisa = () => {
    return (
        <div>
            <TaskBar name={'Student Visa(Permit)'}/>
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
                                Student Visa(Permit)
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Canada is a country with diverse cultures and accepts international students with warmth and welcoming attitude. Canada is recognized worldwide for its high education standards. Hence, studying in Canada is one of the lucrative options for foreign students to achieve their long term goals of life. Various education options are available for International students from Elementary, High School, College or University (Undergraduate Program) and Graduate or postgraduate (Master’s degree and PhD) programs.
                                <br/><br/>
                                You can study in Canada if you
                            </p>
                            <ul className={'list-disc'}>
                                <li>Proof of language proficiency through an approved English test score as per the program requisites.</li>
                                <li>Prove you have enough money to pay for your tuition fees, living expenses for yourself and any family members who accompany you to Canada and return transportation for yourself and any family members who come with you to CanadaObey the law, have no criminal record and get a Police clearance certificate (if required)</li>
                                <li>Passed the medical exam for good health (if required) and</li>
                                <li>Prove to an officer that you will leave Canada when your study permit expires</li>
                                <li>Must have purchased a special Guaranteed Investment Certificate (GIC) from Scotia bank of $10000CAD to cover your living expenses and first year of your stay in Canada.</li>
                            </ul>
                            <p className={'text-lg'}>
                                Good Dreams Immigration Solutions will help you find a DLI and guide you while choosing the Course program based on your educational background and work experience.
                            </p>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                            >
                                How to get Study permit?
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                The study permit is a document issued by Canadian Government to allow foreign nationals to study at designated learning institutions (DLIs) in Canada. Make sure you have all the documents you need before you apply. You should apply for Study permit before you travel to Canada.
                                <br/><br/>
                                Your study permit is not a visa. You may also need a visitor visa or an electronic travel authorization (eTA). Good Dreams Immigration services will help you to get Study permit and Student visa.
                                <br/><br/>
                                We will help you get your study permit faster if you’re a legal resident in certain countries by applying online through the Student Direct Stream.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StudentVisa;