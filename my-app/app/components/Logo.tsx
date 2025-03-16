import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="180" 
        height="40" 
        viewBox="0 0 180 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path 
          d="M10 30L20 10H35L25 30H10Z" 
          fill="currentColor" 
          fillOpacity="0.8"
        />
        <path 
          d="M5 30L15 10H20L10 30H5Z" 
          fill="currentColor"
        />
        <text 
          x="40" 
          y="25" 
          fontFamily="Arial" 
          fontSize="18" 
          fontWeight="bold" 
          fill="currentColor"
        >
          贸易制造业 
        </text>
      </svg>
    </div>
  );
};

export default Logo; 