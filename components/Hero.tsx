import React from 'react';
import heroImage1 from '../images/heroImage1.jpg';
import heroImage2 from '../images/heroImage2.jpg';
import heroImage3 from '../images/heroImage3.jpg';
import Image from 'next/Image';

const Hero = () => {
    return (
        <div className={'h-screen'}>
          <Image src={heroImage2} alt={''} className={'w-full object-cover h-full'}/>
        </div>
    );
};

export default Hero;