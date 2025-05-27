import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">All Projects</h1>
        <div className="mb-4">
          <Link 
            to="/" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="text-gray-300">
          Projects page content will be added here.
        </div>
      </div>
    </div>
  );
};

export default Projects;
