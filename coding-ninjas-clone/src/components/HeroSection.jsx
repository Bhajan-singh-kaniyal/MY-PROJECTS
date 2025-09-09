import React from 'react';

const HeroSection = () => (
  <section className="bg-indigo-600 text-white py-16 px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Get the tech career you deserve. Faster.
    </h1>
    <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
      <div className="bg-white text-indigo-600 p-6 rounded-md shadow-md flex-1">
        <h2 className="text-2xl font-semibold">128% avg hike</h2>
        <p>Via our placement cell</p>
      </div>
      <div className="bg-white text-indigo-600 p-6 rounded-md shadow-md flex-1">
        <h2 className="text-2xl font-semibold">1.5L+ learners</h2>
        <p>Cracked top tech companies</p>
      </div>
      <div className="bg-white text-indigo-600 p-6 rounded-md shadow-md flex-1">
        <h2 className="text-2xl font-semibold">1,400+ alumni</h2>
        <p>In top companies</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
