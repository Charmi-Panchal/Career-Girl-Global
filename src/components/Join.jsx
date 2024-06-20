import React from 'react';

const JoinCommunity = () => {
  return (
    <div className="md:min-h-screen h-[65vh] md:mt-0 mt-16 py-16 md:py-32 px-4 md:px-8 flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-8 md:p-16 rounded-lg shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Join Our Community</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          Empower Your Career, Empower Yourself
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 transition-colors duration-300">
          Join Community
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Laptops on a table"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
        </div>
    </div>
  );
};

export default JoinCommunity;