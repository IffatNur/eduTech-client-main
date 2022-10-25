import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div className="bg-container flex items-center justify-center">
        <div className="w-2/4">
          <h1 className="text-7xl font-bold text-yellow-400">eduTech</h1>
          <p className="text-xl font-semibold text-cyan-300">
            is one of the best online course platform with provides more than
            100 tech courses by which people can increase their tech skills and
            can brush up their existing skills. Explore our website for more
            details.
          </p>
          <button className="btn bg-blue-800 rounded-full px-8 mt-5">Explore</button>
        </div>
      </div>
    );
};

export default Home;