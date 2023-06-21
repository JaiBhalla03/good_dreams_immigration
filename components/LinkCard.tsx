import React from 'react';

interface MyComponentProps{
    heading : String;
    link: String;
}

const MyComponent: React.FC<MyComponentProps> = ({heading , link}) => {
    return (
        <div className={'p-2 md:p-4 border-b border-gray-300'}>
            <a href={`${link}`} target="_blank" rel="noopener noreferrer" className={'text-blue-500 hover:underline font-semibold text-xl md:text-2xl'}>
                {heading}
            </a>
        </div>
    );
};

export default MyComponent;
