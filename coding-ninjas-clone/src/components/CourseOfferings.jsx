import React from 'react';

const offerings = [
  {
    title: "Full Stack Web Development Job Bootcamp with GenAI",
    description: "Job ready AI‑infused curriculum · 15+ projects · 95% placement"
  },
  {
    title: "PG Certification in Data Analytics with GenAI (IIT Guwahati)",
    description: "6 months · For graduates"
  },
  // Add more offering objects as needed
];

const CourseOfferings = () => (
  <section className="py-16 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Offerings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {offerings.map((o, idx) => (
        <div key={idx} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold">{o.title}</h3>
          <p className="mt-2 text-gray-600">{o.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CourseOfferings;
