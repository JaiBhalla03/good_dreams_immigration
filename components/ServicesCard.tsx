import React from 'react';
import Image, {StaticImageData} from "next/image";
import serviceImage1 from '../images/service1.jpg';
import Link from "next/link";

interface serviceCardProps{
    imageUrl: StaticImageData;
    linkUrl: string;
    heading: string;
}

const ServicesCard: React.FC<serviceCardProps> = ({imageUrl, linkUrl, heading}) => {
    return (
        <div className={'group relative cursor-pointer m-2 flex justify-center w-[95%] mx-auto md:w-64'}>
            <Link href={`${linkUrl}`} className={'flex justify-center'}>
                <div className={'w-full md:w-64 h-72 rounded-md shadow shadow-lg shadow-gray-500'}>
                    <Image src={imageUrl} alt={''} className={'w-full h-full object-cover rounded-md'}/>
                </div>
                <div className={'absolute flex items-center justify-center text-2xl font-semibold text-red-800 bg-gray-100 bg-opacity-[50%] group-hover:bg-opacity-[100%] duration-500 transition-all rounded-md top-40 group-hover:top-20 duration-300 transition-all z-10 shadow shadow-sm shadow-gray-500 h-32 w-[80%] md:w-60'}>
                    <div className={'relative rounded-md w-full flex justify-center items-center h-full'}>
                        <div className={'mx-2'}>
                            {heading}
                        </div>
                        <div className={'absolute rounded-b-md hidden group-hover:block duration-500 transition-all bottom-0 h-1 w-full bg-red-800'}>

                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default ServicesCard;