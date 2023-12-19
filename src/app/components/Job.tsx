import React from 'react';

interface JobProps {
    title: string;
    date: string;
    description: string;
    skills: string[];
}

const Job: React.FC<JobProps> = ({ title, date, description, skills }) => {
    return (
        <div className='job w-full h-auto md:h-56 flex flex-col rounded-xl hover:bg-rose-300 hover:ring-1 hover:ring-white ring-transparent transition-all duration-200 p-3 -ml-3 mb-3'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p>{date}</p>
            <p className='mt-3'>{description}</p>
            <ul className='flex flex-wrap'>
                {skills.map((skill, index) => (
                    <li className='m-1 px-3 py-1 bg-gray-900 text-rose-200 rounded-full' key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Job;