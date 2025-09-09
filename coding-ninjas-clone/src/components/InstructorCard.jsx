import React from 'react';

const InstructorCard = ({ name, role, courses }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
      {/* Placeholder image */}
      <span className="text-lg text-gray-500">Photo</span>
    </div>
    <h4 className="text-xl font-semibold">{name}</h4>
    <p className="text-indigo-600">{role}</p>
    <p className="mt-2 text-gray-600">{courses}</p>
  </div>
);

export default InstructorCard;
