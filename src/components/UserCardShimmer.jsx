import React from 'react';

const UserCardShimmer = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-6 rounded-lg shadow-md bg-gray-200 w-64 h-64">
      <div className="h-8 bg-gray-300 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
      
    </div>
  );
};

export default UserCardShimmer;
