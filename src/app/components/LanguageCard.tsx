import React from 'react';

interface LanguageCardProps {
  language: string;
  icon: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg w-52 h-52 m-2 transform transition duration-500 ease-in-out hover:scale-110">
      <img src={icon} alt={language} className="w-24 h-24 mb-4" />
      <p className="text-2xl font-semibold">{language}</p>
    </div>
  );
};

export default LanguageCard;