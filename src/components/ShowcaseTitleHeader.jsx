import React from 'react';
import { Link } from 'react-router-dom';

const ShowcaseTitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge hover:scale-105 hover:bg-gray-900 hover:text-white-70 transition-all duration-800">
        <Link 
          to="/projects" 
          className="text-white-50 transition-colors"
        >
          <p>{sub}</p>
        </Link>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default ShowcaseTitleHeader;
