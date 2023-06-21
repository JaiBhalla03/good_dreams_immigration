import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import taskImage from '../images/taskImage.jpg'
import LinkCard from "@/components/LinkCard";

const Resources = () => {
    return (
        <div>
            <motion.div className={'h-72 relative'}
                        initial={{y:-200, opacity: 0}}
                        animate={{y:0, opacity: 1, transition: {duration: 1}}}
            >
                <Image src={taskImage} alt={''} className={'object-cover h-full w-full'}/>
                <div className={'absolute flex flex-col justify-center pl-20 gap-4 text-white top-0 h-full w-full bg-black bg-opacity-[50%]'}>
                    <motion.h1
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 1.5}}}
                        className={'font-semibold text-5xl'}>Resources</motion.h1>
                    <motion.div
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 2}}}
                        className={'text-xl flex gap-1 items-center'}>
                        <Link href={'/'} className={'hover:underline'}>Home</Link>
                        <AiOutlineRight className={'mt-2'}/>
                        <Link href={'/resources'} className={'text-gray-400 mt-1 hover:underline'}>Resources</Link>
                    </motion.div>
                </div>
            </motion.div>
            <div className={'bg-gray-100 flex px-2 md:px-20 w-full gap-4 justify-between py-4 md:pt-16 md:py-5'}>
                <motion.div
                    initial={{x: -1000, opacity: 0}}
                    animate={{x: 0, opacity: 1, transition: {duration: 1}}}
                    className={'pt-2 md:pt-6 px-2 md:px-8 bg-white w-full pb-8 flex flex-col gap-8'}>
                    <h1

                        className={'relative text-3xl md:text-4xl font-semibold md:font-bold text-red-800'}
                    >
                        Helpful Links
                        <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                    </h1>
                    <ul>
                        <LinkCard
                            heading={'Canada.ca'}
                            link={'https://www.canada.ca/en/immigration-refugees-citizenship.html'}
                        />
                        <LinkCard
                            heading={'Express Entry Calculator'}
                            link={'https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp?_ga=2.180118183.2005306217.1516484487-813901058.1465410578'}
                        />
                        <LinkCard
                            heading={'IQAS – International Qualifications Assessment Service'}
                            link={'https://www.alberta.ca/iqas-immigration.aspx'}
                        />
                        <LinkCard
                            heading={'ICAS – International Credential Assessment Service of Canada'}
                            link={'https://www.icascanada.ca/'}
                        />
                        <LinkCard
                            heading={'ICES – International Credential Evaluation Service'}
                            link={'https://www.bcit.ca/ices/eca/'}
                        />
                        <LinkCard
                            heading={'WES – World Education Services'}
                            link={'https://www.wes.org/ca/eca/'}
                        />
                        <LinkCard
                            heading={'CAEL – English Language Testing (For Citizenship Test and ICCRC EPE Examination)'}
                            link={'https://cael-registration.cael.ca/registration/#/registration/sitting-selection?affiliate=3f94c11c-a6b7-45a8-a1b5-da4bfa8a0b9a&companyName=Steed%20Immigration%20Services%20Inc.'}
                        />
                        <LinkCard
                            heading={'IELTS – English Language Testing'}
                            link={'https://ielts.idp.com/book/IELTS?RA=517ffba4-55a0-4a84-89ff-333d93e9c037'}
                        />
                        <LinkCard
                            heading={'CELPIP – English Language Testing'}
                            link={'https://celpip-registration.paragontesting.ca/registration/#/registration/sitting-selection?affiliate=bc70aa38-27d4-493c-a18f-3cf565de4240&companyName=Steed%20Immigration%20Services%20Inc.'}
                        />
                        <LinkCard
                            heading={'TEF – French Language Testing'}
                            link={'https://www.afcalgary.ca/exams/tef/'}
                        />
                        <LinkCard
                            heading={'CES – Comparative Education Service'}
                            link={'https://learn.utoronto.ca/comparative-education-service'}
                        />
                        <LinkCard
                            heading={'CLB – Canadian Language Benchmark charts'}
                            link={'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html'}
                        />
                        <LinkCard
                            heading={'How to Get a Police Certificate'}
                            link={'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how.html'}
                        />
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Resources;