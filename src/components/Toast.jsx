import React from 'react';

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-green-100/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-800 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
