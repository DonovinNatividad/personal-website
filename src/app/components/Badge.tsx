import React from 'react';
import Image from 'next/image';

interface BadgeProps {
    socialMediaName: string;
    icon: string;
}

const Badge: React.FC<BadgeProps> = ({ socialMediaName, icon }) => {
    return (
        <div className='flex items-center justify-center w-12 h-12 rounded-full '> 
            <Image
                src={icon}
                alt={socialMediaName}
                width={48}
                height={48}
            />
        </div>
    );
};

export default Badge;