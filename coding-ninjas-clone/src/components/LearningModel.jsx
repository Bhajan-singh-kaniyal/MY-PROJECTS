import React from 'react';

const stages = [
  { title: 'Learn', desc: 'Seamless problem-solving learning modules.' },
  { title: 'Excel', desc: 'Track progress and skill growth.' },
  { title: 'Standout', desc: 'Get noticed by recruiters with feedback.' },
];

const LearningModel = () => (
  <section className="py-16 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-8">Our 3‑stage Learning Model</h2>
    <div className="flex flex-col md:flex-row justify-center items-start gap-10">
      {stages.map((s, i) => (
        <div key={i} className="text-center max-w-xs">
          <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
          <p className="text-gray-700">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LearningModel;
