import React from 'react';

export const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-500">
          404 Not Found
        </h1>
        <p className="text-lg text-gray-800 text-center">
          Oops! The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};
