import React from 'react';
import Image from 'next/image';

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, image, githubLink }) => {
    return (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className=' lg:w-3/5 p-4 transform hover:scale-105 transition-transform duration-200'>
            <div className='flex flex-col items-start bg-gray-900 rounded-xl p-4 h-full border-b border-black'>
                <Image src={image} alt={title} className='w-full object-cover rounded-xl' height={378} width={512} />
                <h2 className='mt-4 text-2xl font-bold text-rose-300'>{title}</h2>
                <p className='mt-2 text-white flex-grow'>{description}</p>
                <p className='mt-2 text-sm text-gray-300'>{technologies.join(', ')}</p>
            </div>
        </a>
    );
}

export default Project;