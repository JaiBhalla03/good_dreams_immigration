import React from 'react';
import TaskBar from "@/components/TaskBar";
import SideLink from "@/components/SideLink";
import ContactCard from "@/components/ContactCard";
import {motion} from "framer-motion";

const FamilySponsorship = () => {
    return (
        <div>
            <TaskBar name={'Family Sponsorship'}/>
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
                                Family Sponsorship
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-2xl md:text-3xl font-semibold md:font-bold text-red-800'}
                            >
                                Sponsor your Parents and Grandparents
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                If you are a Canadian citizen or a permanent resident of Canada, you can sponsor your Parent or grandparent to become a permanent resident under the Family Class (FC).
                                Following are the requirements to sponsor Parent or grandparent:
                            </p>
                            <ul className={'list-decimal'}>
                                <li>Must be a Canadian citizen or permanent resident</li>
                                <li>Prove to be able to support the family member(s) financially</li>
                                <li>Consent to provide financial support to the family member for 20 years from the date they become permanent Canadian resident.</li>
                                <li>In case of parents & grandparents sponsorship, principal applicant must meet the LICO plus 30%for 3 previous taxation years.</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-2xl md:text-3xl font-semibold md:font-bold text-red-800'}
                            >
                                Responsibilities of Sponsoring Family members.
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Your spouse, partner, dependent child, and their dependent children must provide the following documentation to showcase that they meet the eligibility requirements until visa issuance and entry to Canada as permanent residence.
                            </p>
                            <ul className={'list-decimal'}>
                                <li>Proof of legal Marriage (Marriage certificate)</li>
                                <li>Medical examination</li>
                                <li>Biometrics</li>
                                <li>Should not be inadmissible to Canada under any stage of immigration process.</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-2xl md:text-3xl font-semibold md:font-bold text-red-800'}
                            >
                                Sponsor your Child
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                If you are a Canadian citizen or a permanent resident of Canada, you can sponsor your dependent child (including adopted child) or other to become a permanent resident under the Family Class (FC).
                                <br/>
                                Following are the requirements to sponsor a Child or Other Dependent Sponsorship:
                            </p>
                            <ul className={'list-decimal'}>
                                <li>The sponsor should be 18 years or older</li>
                                <li>Must be a Canadian citizen or permanent resident</li>
                                <li>Prove to be able to support the family member(s) financially</li>
                                <li>SConsent to provide financial support to the family member for 10 years or the day the child becomes 25, whichever is first. Dependent child 22 years of age when becomes PR length of undertaking is 3 years from the day becoming PR.</li>
                                <li>One can sponsor dependent child under 22 years old unless mentally or physically dependent.</li>
                                <li>Not married or in a common- law relationship.</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-2xl md:text-3xl font-semibold md:font-bold text-red-800'}
                            >
                                Sponsor your Adopted Child/ Relatives
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <ul className={'list-decimal'}>
                                <li>Child under the age of 18, you must have consent from both biological parents, you must have legally adopted the child outside of Canada, and the Hague Convention requirements must be met.</li>
                                <li>Orphaned brothers, sisters, nephews, nieces, granddaughters, or grandsons who are under the age of 18 and unmarried or in a common-law relationship</li>
                            </ul>
                        </div>
                        <div className={'text-lg flex flex-col gap-4'}>
                            <h1
                                className={'relative text-2xl md:text-3xl font-semibold md:font-bold text-red-800'}
                            >
                                Requirements of Sponsor
                                <span className={'absolute -bottom-2 start-0 w-1/3 bg-red-400 h-[2px] md:h-1 animate-pulse'}></span>
                            </h1>
                            <p className={'text-lg'}>
                                Your relatives can live, study and work in Canada if they become permanent residents of Canada. You can sponsor certain relatives to come to Canada if
                            </p>
                            <ul className={'list-decimal'}>
                                <li>you’re at least 18 years old and</li>
                                <li>Canadian Citizen, or Permanent Resident of Canada</li>
                                <li>Person registered in Canada as an Indian under the Canadian Indian Act.</li>
                                <li>Sign an undertaking promising to provide for the basic requirement with sponsored person</li>
                                <li>Meet LICO for the past 12 months, except to sponsor a dependent child who has no dependent child, an adopted person under 18 years; or a spouse with no dependent child or with dependent child who has no dependent child.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FamilySponsorship;