import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-500">
          Oops!
        </h1>
        <p className="text-lg text-gray-800 text-center">Page not found.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
